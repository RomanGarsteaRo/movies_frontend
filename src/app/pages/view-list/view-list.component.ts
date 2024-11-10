import {Component} from '@angular/core';
import {AsyncPipe, CommonModule, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FileSizeComponent} from "../../ui/file-size/file-size.component";
import {NoCommaPipe} from "../../ui/no-comma.pipe";
import {IOmdb} from "../../services/omdb/omdb.interface";
import {SortService} from "../../services/sort.service";
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {IFile, IFileExtended, IFileSize} from "../../services/file/file.interface";
import {IPlex} from "../../services/plex/plex.interface";
import {IMovie} from "../../services/movie/movie.interface";
import {FileUtils} from "../../services/file/file.utils";




@Component({
	selector: 'app-view-list',
	standalone: true,
	imports: [
		AsyncPipe,
		DecimalPipe,
		FileSizeComponent,
		NgForOf,
		NgIf,
		NoCommaPipe,
		CommonModule
	],
	templateUrl: './view-list.component.html',
	styleUrl: './view-list.component.scss'
})
export class ViewListComponent {

	public files:    IFile[] = [];
	public plex:    IPlex[] = [];
	public omdb:    IOmdb[] = [];
	public movies: IMovie[] = [];

	public averageYear!:    number | undefined;
	public averageSize!: IFileSize | undefined;
	public averageImdb!:    number | undefined;

	public moviesRus!: IMovie[];
	public moviesEn!:  IMovie[];
	public movies3d!:    number;
	public duplicate!: IMovie[];

	public plexAssociated!: number;
	public plexNotAssociated!: IPlex[];
	public omdbAssociated!: number;
	public omdbNotAssociated!: IOmdb[];


	constructor(private store: Store, private SORT: SortService) {
		this.store.pipe(select(MoviesSelectors.movies)).subscribe((movies: IMovie[]) => this.init(movies))
	}

	private init(movies: IMovie[]): void {

		this.movies         = movies;

		this.averageYear    = this.getAverageYear();
		this.averageSize    = this.getAverageSize();
		this.averageImdb    = this.getAverageImdb();

		this.moviesRus      = this.getRusName(this.movies);
		this.moviesEn       = this.getEnName(this.movies);
		this.movies3d       = this.getMovies3d(this.movies);
		this.duplicate      = this.getDuplicate(this.movies);

		this.plexAssociated = this.getPlexAssociated();
		this.omdbAssociated = this.getOmdbAssociated();
	}

	private getPlexAssociated(): number {
		return this.movies.reduce((acc: number, cur: IMovie) => cur.plex !== null ? ++acc : acc, 0);
	}

	private getOmdbAssociated(): number {
		return this.movies.reduce((acc: number, cur: IMovie) => cur.omdb !== null ? ++acc : acc, 0);
	}



	private getDuplicate(arr: IMovie[]): IMovie[] {
		// https://flexiple.com/javascript/find-duplicates-javascript-array
		return arr.filter((item, index) => arr.indexOf(item) !== index);
	}

	private getRusName(arr: IMovie[]): IMovie[] {
		const russianTitleRegex: RegExp = /[а-яА-ЯЁё]/;
		return arr.filter(movie => russianTitleRegex.test(movie.title));
	}

	private getMovies3d(arr: IMovie[]): number {
		return arr.reduce((acc: number, item: IMovie) => {
			let count = 0;
			item.nas.forEach(file => {
				if (file.tags.find(tag => tag === '3D')) {
					count++;
				}
			})
			return acc += count;
		}, 0);
	}

	private getAverageSize(): IFileSize | undefined{
		if(!this.movies) {return undefined}
		let size: number = 0;
		this.movies.forEach(item => {
			item.nas.forEach((movie: IFileExtended) => size += movie.size.sizeInByte)
		});
		return FileUtils.convertBytesToIFileSize(size / this.movies.length);
	}

	private getEnName(arr: IMovie[]): IMovie[] {
		const russianTitleRegex: RegExp = /[а-яА-ЯЁё]/;
		return arr.filter(movie => !russianTitleRegex.test(movie.title));
	}

	private getAverageYear(): number | undefined{
		if(!this.movies) {return undefined}
		let size: number = 0;
		this.movies.forEach(item => size += +item.year);
		return size / this.movies.length;
	}

	private getAverageImdb(): number | undefined {
		if(!this.omdb) {return undefined}
		let size: number = 0;
		this.omdb.forEach(item => size = size + (item?.imdbRating ? +item.imdbRating : 0));
		return size / this.omdb.length;
	}




	// Sort ............................................................................................................

	public onSortByYear() {
		// return this.SORT.onSortByYear()
	}

	public onSortBySize() {}

	public onSortByImdb() {}

	public onSortByTitle() {}

	public onSortPlex() {}

	// Have or not have data
	public onSortOmdb() {}

}

import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CommonModule, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FileSizeComponent} from "../../ui/file-size/file-size.component";
import {NoCommaPipe} from "../../ui/no-comma.pipe";
import {IOmdb} from "../../services/omdb/omdb.interface";
import {SortService} from "../../services/sort.service";
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {IFile, IFileSize} from "../../services/file/file.interface";
import {IPlex} from "../../services/plex/plex.interface";
import {IMovie} from "../../services/movie/movie.interface";
import {FileUtils} from "../../services/file/file.utils";
import {combineLatest, filter} from "rxjs";
import {FileSrvSelectors, OmdbDbSelectors, PlexApiSelectors} from "../../state/selectors";


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
export class ViewListComponent implements OnInit {

	public file:   IFile[] = [];
	public plex:   IPlex[] = [];
	public omdb:   IOmdb[] = [];
	public movie: IMovie[] = [];

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


	constructor(
		private store: Store,
		private sort: SortService
	) {}

	ngOnInit() {
		combineLatest([
			this.store.pipe(select(FileSrvSelectors.files)),
			this.store.pipe(select(OmdbDbSelectors.movies)),
			this.store.pipe(select(PlexApiSelectors.movies)),
			this.store.pipe(select(MoviesSelectors.movies)),
		]).pipe(
			filter(([file, omdb, plex, movie]) => !!file.length && !!omdb.length && !!plex.length && !!movie.length)
		).subscribe(([file, omdb, plex, movie]) => {
			this.init(file, omdb, plex, movie)
		});
	}

	private init(file: IFile[], omdb: IOmdb[], plex: IPlex[], movie: IMovie[]): void {

		this.file 			= [...file];
		this.plex 			= [...plex];
		this.omdb 			= [...omdb];
		this.movie          = [...movie];

		this.averageYear    = this.getAverageYear();
		this.averageSize    = this.getAverageSize();
		this.averageImdb    = this.getAverageImdb();

		this.moviesRus      = this.getRusName(this.movie);
		this.moviesEn       = this.getEnName(this.movie);
		this.movies3d       = this.getMovies3d(this.movie);
		this.duplicate      = this.getDuplicate(this.movie);

		this.plexAssociated = this.getPlexAssociated();
		this.omdbAssociated = this.getOmdbAssociated();
	}

	private getPlexAssociated(): number {
		return this.movie.reduce((acc: number, cur: IMovie) => cur.plex !== null ? ++acc : acc, 0);
	}

	private getOmdbAssociated(): number {
		return this.movie.reduce((acc: number, cur: IMovie) => cur.omdb !== null ? ++acc : acc, 0);
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
			item.files.forEach(file => {
				if (file.titl_p.tags.find(tag => tag === '3D')) {
					count++;
				}
			})
			return acc += count;
		}, 0);
	}

	private getAverageSize(): IFileSize | undefined{
		if(!this.movie) {return undefined}
		let size: number = 0;
		this.movie.forEach(item => {
			item.files.forEach((movie: IFile) => size += movie.size.sizeInByte)
		});
		return FileUtils.convertBytesToIFileSize(size / this.movie.length);
	}

	private getEnName(arr: IMovie[]): IMovie[] {
		const russianTitleRegex: RegExp = /[а-яА-ЯЁё]/;
		return arr.filter(movie => !russianTitleRegex.test(movie.title));
	}

	private getAverageYear(): number | undefined{
		if(!this.movie) {return undefined}
		let size: number = 0;
		this.movie.forEach(item => size += +item.year);
		return size / this.movie.length;
	}

	private getAverageImdb(): number | undefined {
		if(!this.omdb) {return undefined}
		let size: number = 0;
		this.omdb.forEach(item => size = size + (item?.imdbRating ? +item.imdbRating : 0));
		return size / this.omdb.length;
	}




	// Sort ............................................................................................................

	public onSortByYear() {
		this.sort.onSortByYear(this.movie);
	}

	public onSortBySize() {
		this.sort.onSortBySize(this.movie);
	}

	public onSortByImdb() {
		this.sort.onSortByImdb(this.movie);
	}

	public onSortByTitle() {
		this.sort.onSortByTitle(this.movie);
	}

	public onSortPlex() {
		this.sort.onSortPlex(this.movie);
	}

	// Have or not have data
	public onSortOmdb() {
		this.sort.onSortOmdb(this.movie);
	}

}

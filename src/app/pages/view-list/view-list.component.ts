import {Component, OnInit} from '@angular/core';
import {CommonModule, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FileSizeComponent} from "../../ui/file-size/file-size.component";
import {NoCommaPipe} from "../../ui/no-comma.pipe";
import {IOmdb} from "../../services/omdb/omdb.interface";
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {IFile, IFileSize} from "../../services/file/file.interface";
import {IPlex} from "../../services/plex/plex.interface";
import {IMovie} from "../../services/movie/movie.interface";
import {FileUtils} from "../../services/file/file.utils";
import {combineLatest, filter} from "rxjs";
import {FileSrvSelectors, OmdbDbSelectors, PlexApiSelectors} from "../../state/selectors";
import {ColumnHeaderComponent} from "../../ui/column-header/column-header.component";
import {SortLogicService} from "../../services/sort/sort-logic.service";
import {SortStateService} from "../../services/sort/sort-state.service";


@Component({
	selector: 'app-view-list',
	standalone: true,
	imports: [
		DecimalPipe,
		FileSizeComponent,
		NgForOf,
		NgIf,
		NoCommaPipe,
		CommonModule,
		ColumnHeaderComponent
	],
	providers: [SortStateService],
	templateUrl: './view-list.component.html',
	styleUrl: './view-list.component.scss'
})
export class ViewListComponent implements OnInit {

	public file:   IFile[] = [];
	public plex:   IPlex[] = [];
	public omdb:   IOmdb[] = [];
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


	constructor(
		private store: Store,
		private sort: SortLogicService
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
			console.log('..................')
			this.init(file, omdb, plex, movie);
		});
	}

	private init(file: IFile[], omdb: IOmdb[], plex: IPlex[], movie: IMovie[]): void {
		console.log(movie);

		this.file 			= [...file];
		this.plex 			= [...plex];
		this.omdb 			= [...omdb];
		this.movies         = [...movie].filter(movie => movie.show);

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
			item.files.forEach(file => {
				if (file.titl_p.tags.find(tag => tag === '3D')) {
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
			item.files.forEach((movie: IFile) => size += movie.size.sizeInByte)
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
		this.sort.onSortByYear(this.movies);
	}

	public onSortBySize() {
		this.sort.onSortBySize(this.movies);
	}

	public onSortByImdb() {
		this.sort.onSortByImdb(this.movies);
	}

	public onSortByTitle() {
		this.sort.onSortByTitle(this.movies);
	}

	public onSortPlex() {
		this.sort.onSortPlex(this.movies);
	}

	// Have or not have data
	public onSortOmdb() {
		this.sort.onSortOmdb(this.movies);
	}
}

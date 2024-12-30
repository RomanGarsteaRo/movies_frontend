import {BehaviorSubject, combineLatest, filter} from "rxjs";
import {Injectable} from '@angular/core';

import {select, Store} from "@ngrx/store";
import {FileSrvSelectors, OmdbDbSelectors, PlexApiSelectors} from "./state/selectors";
import {FileSrvActions, MoviesActions, OmdbDbActions, PlexApiActions} from "./state/actions";

import {FileUtils} from "./services/file/file.utils";
import {IFile} from "./services/file/file.interface";
import {IPlex} from "./services/plex/plex.interface";
import {PlexUtils} from "./services/plex/plex.utils";
import {IOmdb} from "./services/omdb/omdb.interface";
import {IMovie} from "./services/movie/movie.interface";
import {MovieUtils} from "./services/movie/movie.utils";


@Injectable({
	providedIn: 'root'
})
export class AppService {

	public showFilterPanel$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(
		private store: Store,
	) {
		this.store.dispatch(FileSrvActions.getAll());
		this.store.dispatch(OmdbDbActions.getAll());
		this.store.dispatch(PlexApiActions.getAll());


		/**
		 *	 1. Get files from server
		 *	  	    [{"id": "The Man from U.N.C.L.E. (2015).m2ts",
		 *           "path": "\\\\NAS\\Movies\\The Man from U.N.C.L.E. (2015).m2ts",
		 *           "size": "39542323200"}...]
		 *   2. Get Plex json from API
		 *   3. Get OMDB json from DB
		 *	 4. init()
		 *
		 */
		combineLatest([
			this.store.pipe(select(FileSrvSelectors.files)),
			this.store.pipe(select(OmdbDbSelectors.movies)),
			this.store.pipe(select(PlexApiSelectors.movies))
		]).pipe(
			filter(([files, omdb, plex]) => !!files.length && !!omdb.length && !!plex.length)
		).subscribe(([files, omdb, plex]) => {
			this.init(files, omdb, plex)
		});
	}


	private init(file: IFile[], omdb: IOmdb[], plex: IPlex[]): void {

		let groups: IFile[][] = [];
		let movies: IMovie[]  = [];

		groups = FileUtils.group(file);
		movies = MovieUtils.createIMovies(groups);
		movies = MovieUtils.connectOmdb(movies, omdb);
		movies = PlexUtils.connectPlex(movies, plex);

	 // this.store.dispatch(MoviesActions.updateMovies({ movies: movies.slice(0, 100) }));
		this.store.dispatch(MoviesActions.updateMovies({ movies: movies }));
	}

	public toggleFilterPanel() {
		this.showFilterPanel$.next(!this.showFilterPanel$.value);
	}

}

import {BehaviorSubject, combineLatest, filter} from "rxjs";
import {Injectable} from '@angular/core';

import {select, Store} from "@ngrx/store";
import {FileSrvSelectors, OmdbDbSelectors, PlexApiSelectors} from "./state/selectors";
import {FileSrvActions, MoviesActions, OmdbDbActions, PlexApiActions} from "./state/actions";

import {FileUtils} from "./services/file/file.utils";
import {IFile, IFileExtended} from "./services/file/file.interface";
import {IPlex} from "./services/plex/plex.interface";
import {PlexUtils} from "./services/plex/plex.utils";
import {IOmdb} from "./services/omdb/omdb.interface";
import {OmdbUtils} from "./services/omdb/omdb.utils";
import {IMovie} from "./services/movie/movie.interface";
import {MovieUtils} from "./services/movie/movie.utils";


@Injectable({
	providedIn: 'root'
})
export class AppService {

	public files!:  IFileExtended[] | null;
	public movies!: IMovie[]        | null;

	// Panels
	public showFilterPanel$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);


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


	private init(files: IFile[], omdb: IOmdb[], plex: IPlex[]): void {

		this.files  = FileUtils.transformIFileToIFileExtended(files);
		this.movies = MovieUtils.transformIFileExtendedToIMovie(this.files);
		this.movies = OmdbUtils.addOmdbToMovies(this.movies, omdb);
		this.movies = PlexUtils.addPlexToMovies(this.movies, plex);

		if (this.movies) {
			this.store.dispatch(MoviesActions.updateMovies({ movies: this.movies }));
		}
	}

	public toggleFilterPanel() {
		this.showFilterPanel$.next(!this.showFilterPanel$.value);
	}

}

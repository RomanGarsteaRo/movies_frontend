import { ActionReducerMap } from '@ngrx/store';
import { omdbApiReducer, OmdbApiState } from './omdb-api.reducer';
import { omdbDbReducer, OmdbDbState } from './omdb-db.reducer';
import { plexApiReducer, PlexApiState} from "./plex-api.reducer";
import {fileSrvReducer, FileSrvState} from "./file-srv.reducer";
import {moviesReducer, MoviesState} from "./movies.reducer";

export interface AppState {
	omdbApi: OmdbApiState;
	omdbDb: OmdbDbState;
	plexApi: PlexApiState;
	fileSrv: FileSrvState;
	movies: MoviesState;
}

export const reducers: ActionReducerMap<AppState> = {
	omdbApi: omdbApiReducer,
	omdbDb: omdbDbReducer,
	plexApi: plexApiReducer,
	fileSrv: fileSrvReducer,
	movies: moviesReducer,
};

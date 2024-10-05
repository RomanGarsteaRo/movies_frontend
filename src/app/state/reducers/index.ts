import { ActionReducerMap } from '@ngrx/store';
import { omdbApiReducer, OmdbApiState } from './omdb-api.reducer';
import { omdbDbReducer, OmdbDbState } from './omdb-db.reducer';
import { plexApiReducer, PlexApiState} from "./plex-api.reducer";
import {fileSrvReducer, FileSrvState} from "./file-srv.reducer";

export interface AppState {
	omdbApi: OmdbApiState;
	omdbDb: OmdbDbState;
	plexApi: PlexApiState;
	fileSrv: FileSrvState;
}

export const reducers: ActionReducerMap<AppState> = {
	omdbApi: omdbApiReducer,
	omdbDb: omdbDbReducer,
	plexApi: plexApiReducer,
	fileSrv: fileSrvReducer,
};

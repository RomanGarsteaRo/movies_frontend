import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PlexApiState} from "../reducers/plex-api.reducer";

export const plexApiState = createFeatureSelector<PlexApiState>('plexApi');


export const plexApi_movies = createSelector(plexApiState, (state: PlexApiState) => state.movies);
export const plexApi_loading = createSelector(plexApiState, (state: PlexApiState) => state.loading);
export const plexApi_error = createSelector(plexApiState, (state: PlexApiState) => state.error);


export const PlexApiSelectors = {
	all: plexApi_movies,
	loading: plexApi_loading,
	error: plexApi_error,
};

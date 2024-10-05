import {createFeatureSelector, createSelector} from "@ngrx/store";
import {OmdbApiState} from "../reducers/omdb-api.reducer";

export const movieApiState = createFeatureSelector<OmdbApiState>('omdbApi');


export const all = createSelector(movieApiState, (state: OmdbApiState) => state.movies);
export const loading = createSelector(movieApiState, (state: OmdbApiState) => state.loading);
export const error = createSelector(movieApiState, (state: OmdbApiState) => state.error);


export const movieByTitle = (title: string) => createSelector(all, (movies) => movies.find(movie => movie.Title === title));
export const movieById = (id: string) => createSelector(all, (movies) => movies.find(movie => movie.imdbID === id));


export const OmdbApiSelectors = {
	all,
	loading,
	error,

	movieByTitle,
	movieById
};

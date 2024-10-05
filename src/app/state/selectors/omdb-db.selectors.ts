import {createFeatureSelector, createSelector} from "@ngrx/store";
import {OmdbDbState} from "../reducers/omdb-db.reducer";

const movieDbState = createFeatureSelector<OmdbDbState>('omdbDb');

const all = createSelector(movieDbState, (state: OmdbDbState) => state.movies);
const loading = createSelector(movieDbState, (state: OmdbDbState) => state.loading);
const error = createSelector(movieDbState, (state: OmdbDbState) => state.error);



const movieByTitle = (title: string) => createSelector(all, (movies) => movies.find(movie => movie.Title === title));
const movieById = (id: string) => createSelector(all, (movies) => movies.find(movie => movie.imdbID === id));


export const OmdbDbSelectors = {
	all,
	loading,
	error,

	movieByTitle,
	movieById
};

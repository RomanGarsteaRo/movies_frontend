
import {createReducer, on} from "@ngrx/store";
import {OmdbApiActions} from "../actions";
import {IOmdb} from "../../services/omdb/omdb.interface";


export interface OmdbApiState {
	movies: IOmdb[];
	loading: boolean;
	error: any;
}

export const initialState: OmdbApiState = {
	movies: [],
	loading: false,
	error: null,
};


export const omdbApiReducer = createReducer(
	initialState,
	on(OmdbApiActions.loadMovie, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(OmdbApiActions.loadMovieSuccess, (state, { movie }) => ({
		...state,
		movies: [...state.movies, movie],
		loading: false,
		error: null
	})),
	on(OmdbApiActions.loadMovieFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),

	////////////////////////////////////////////////////////////////////
	on(OmdbApiActions.loadMovies, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(OmdbApiActions.loadMoviesSuccess, (state, { movies }) => ({
		...state,
		movies: [...state.movies, ...movies],
		loading: false,
		error: null
	})),
	on(OmdbApiActions.loadMoviesFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	}))
);

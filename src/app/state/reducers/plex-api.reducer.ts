import {createReducer, on} from "@ngrx/store";
import {PlexApiActions} from "../actions";


export interface PlexApiState {
	movies: any[];
	loading: boolean;
	error: any;
}

export const initialState: PlexApiState = {
	movies: [],
	loading: false,
	error: null,
};


export const plexApiReducer = createReducer(
	initialState,
	on(PlexApiActions.loadMovies, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(PlexApiActions.loadMoviesSuccess, (state, { movies }) => ({
		...state,
		movies: [...movies],
		loading: false,
		error: null
	})),
	on(PlexApiActions.loadMoviesFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),
);

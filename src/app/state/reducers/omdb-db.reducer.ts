import {createReducer, on} from "@ngrx/store";
import {OmdbDbActions} from "../actions";
import {IOmdb} from "../../services/omdb/omdb.interface";

export interface OmdbDbState {
	movies: IOmdb[];
	loading: boolean;
	error: any;
}

export const initialState: OmdbDbState = {
	movies: [],
	loading: false,
	error: null,
};

export const omdbDbReducer = createReducer(
	initialState,
	on(OmdbDbActions.getAll, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(OmdbDbActions.getAllSuccess, (state, { movies }) => ({
		...state,
		movies: [...movies],
		loading: false,
		error: null
	})),
	on(OmdbDbActions.getAllFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),

	///////////////////////////////////////////////////////////////////
	on(OmdbDbActions.getById, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(OmdbDbActions.getByIdSuccess, (state, { movie }) => ({
		...state,
		movies: [movie],
		loading: false,
		error: null
	})),
	on(OmdbDbActions.getByIdFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),

	///////////////////////////////////////////////////////////////////
	on(OmdbDbActions.add, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(OmdbDbActions.addSuccess, (state, { movie }) => ({
		...state,
		movies: [...state.movies, movie],
		loading: false,
		error: null
	})),
	on(OmdbDbActions.addFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),

	///////////////////////////////////////////////////////////////////
	on(OmdbDbActions.update, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(OmdbDbActions.updateSuccess, (state, { movie }) => ({
		...state,
		movies: state.movies.map(m => m.imdbID === movie.imdbID ? movie : m),
		loading: false,
		error: null,
	})),
	on(OmdbDbActions.updateFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),

	///////////////////////////////////////////////////////////////////
	on(OmdbDbActions.delete, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(OmdbDbActions.deleteSuccess, (state, { movie }) => ({
		...state,
		movies: state.movies.filter((m: IOmdb) => m.imdbID !== movie.imdbID),
		loading: false,
		error: null
	})),
	on(OmdbDbActions.deleteFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	}))
);

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
	on(PlexApiActions.getAll, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(PlexApiActions.getAllSuccess, (state, { movies }) => ({
		...state,
		movies: [...movies],
		loading: false,
		error: null
	})),
	on(PlexApiActions.getAllFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),
);

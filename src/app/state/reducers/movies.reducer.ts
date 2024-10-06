import {createReducer, on} from "@ngrx/store";
import {IMovie} from "../models/movie.interface";
import {MoviesActions} from "../actions";

export interface MoviesState {
	movies: IMovie[];
}

const initialState: MoviesState = {
	movies: []
};

export const moviesReducer = createReducer(
	initialState,
	on(MoviesActions.updateMovies, (state, { movies }) => ({ ...state, movies }))
);

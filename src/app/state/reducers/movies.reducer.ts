import {createReducer, on} from "@ngrx/store";
import {MoviesActions} from "../actions";
import {IMovie} from "../../services/movie/movie.interface";

export interface MoviesState {
	movies: IMovie[];
}

const initialState: MoviesState = {
	movies: []
};

export const moviesReducer = createReducer(
	initialState,
	on(MoviesActions.updateMovies, (state, { movies }) => ({ ...state, movies })),
	on(MoviesActions.updateMovie,  (state, { movie }) => ({
		...state,
		movies: state.movies.map(m => m.id === movie.id ? movie : m)
	})),

);

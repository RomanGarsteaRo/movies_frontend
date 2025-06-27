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
	on(MoviesActions.initMovies, (state, { movies }) => ({
		...state,
		movies
	})),
	on(MoviesActions.updateMovies, (state, { movies }) => ({
		...state,
		movies: state.movies.map(m => {
			const updated = movies.find(u => u.id === m.id);
			return updated ? updated : m;
		})
	})),
	on(MoviesActions.updateMovie,  (state, { movie }) => ({
		...state,
		movies: state.movies.map(m => m.id === movie.id ? movie : m)
	})),

);

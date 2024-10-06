import {MoviesState} from "../reducers/movies.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IMovie} from "../models/movie.interface";


const selectMoviesState = createFeatureSelector<MoviesState>('movies');
const selectAllMovies        = createSelector(selectMoviesState, (state: MoviesState): IMovie[] => state.movies);

export const MoviesSelectors = {
	movies: selectAllMovies,
};

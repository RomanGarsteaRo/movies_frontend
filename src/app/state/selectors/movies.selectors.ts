import {MoviesState} from "../reducers/movies.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IMovie} from "../../services/movie/movie.interface";



const selectMoviesState = createFeatureSelector<MoviesState>('movies');


const selectAllMovies    = createSelector(
	selectMoviesState,
	(state: MoviesState): IMovie[] => state.movies
);

/* Foarte performant, standard NgRx pattern (Entity Adapter). */
const selectMovieByKey = (id: string) => createSelector(
		selectAllMovies,
		(movies: IMovie[]) => movies.find(movie => movie.id === id));


export const MoviesSelectors = {
	movies: selectAllMovies,
	selectMovieById: selectMovieByKey,
};


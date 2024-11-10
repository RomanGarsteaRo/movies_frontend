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
	on(MoviesActions.filterMovies, (state, { genre }) => {

		const filteredMovies = state.movies.map(movie => {
			// omdb
			const omdbGenres: string[] = movie.omdb?.Genre ? movie.omdb.Genre.split(", ").map(g => g.trim()) : [];

			// plex
			const plexGenres: string[] = movie.plex?.Genre ? movie.plex.Genre.map(g => g.tag) : [];

			// omdb or plex
			const hasGenre: boolean = omdbGenres.includes(genre.value) || plexGenres.includes(genre.value);

			// Set "show" property
			return {
				...movie,
				show: genre.state ? hasGenre : false
			};
		});
		return { ...state, movies: filteredMovies };
	})
);

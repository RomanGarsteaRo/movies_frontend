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
	on(MoviesActions.updateMovies, (state, { movies }) => ({ ...state, movies })),
	on(MoviesActions.filterMovies, (state, { genre }) => {

		const filteredMovies = state.movies.map(movie => {
			// Проверка жанра в omdb
			const omdbGenres = movie.omdb?.Genre ? movie.omdb.Genre.split(", ").map(g => g.trim()) : [];

			// Проверка жанра в plex
			const plexGenres = movie.plex?.Genre ? movie.plex.Genre.map(g => g.tag) : [];

			// Проверка наличия genre.value в жанрах omdb или plex
			const hasGenre = omdbGenres.includes(genre.value) || plexGenres.includes(genre.value);

			// Устанавливаем show в зависимости от genre.state и наличия жанра
			return {
				...movie,
				show: genre.state ? hasGenre : false
			};
		});
		console.log('.....');
		return { ...state, movies: filteredMovies };
	})
);

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

		console.log("..........");
		//console.log(genre);
		const filteredMovies = state.movies.map(movie => {
			// omdb
			// const omdbGenres: string[] = movie.omdb?.Genre ? movie.omdb.Genre.split(", ").map(g => g.trim()) : [];

			// plex
			// const plexGenres: string[] = movie.plex?.Genre ? movie.plex.Genre.map(g => g.tag) : [];

			// omdb or plex
			// const hasGenre: boolean = omdbGenres.includes(genre.value) || plexGenres.includes(genre.value);

			// filter genres
			// const filterGenres =
			// const hasGenre: boolean = omdbGenres.includes(genre.value);
			//
			//
			// if (hasGenre){
			// 	return {...movie, show: true};
			// } else {
			// 	if(genre.state){
			// 		return {...movie, show: false};
			// 	}else{
			// 		return {...movie, show: true};
			// 	}
			// }



		});
		return { ...state };
	})
);

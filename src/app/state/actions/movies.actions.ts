import {createActionGroup, props} from "@ngrx/store";
import {IMovie} from "../../services/movie/movie.interface";


export const MoviesActions = createActionGroup({
	source: 'Movies',
	events: {
		  'Init Movies': props<{ movies: IMovie[]  }>(),
		'Update Movies': props<{ movies: IMovie[]  }>(),
		'Update Movie' : props<{  movie: IMovie    }>(),
	}
});

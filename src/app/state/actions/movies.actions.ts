import {createActionGroup, props} from "@ngrx/store";
import {IMovie} from "../models/movie.interface";


export const MoviesActions = createActionGroup({
	source: 'Movies',
	events: {
		'Update Movies': props<{ movies: IMovie[] }>(),
		'Filter Movies': props<{ genre: {value: string, state: boolean} }>(),
	}
});

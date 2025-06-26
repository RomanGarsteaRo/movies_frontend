import {createActionGroup, props} from "@ngrx/store";
import {IMovie} from "../../services/movie/movie.interface";
import {IFilter} from "../../services/filter/filter.class";


export const MoviesActions = createActionGroup({
	source: 'Movies',
	events: {
		'Update Movies': props<{ movies: IMovie[] }>(),
		'Filter Movies': props<{ genre:  IFilter[] }>(),
	}
});

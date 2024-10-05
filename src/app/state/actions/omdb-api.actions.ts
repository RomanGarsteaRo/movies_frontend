import {createActionGroup, props} from "@ngrx/store";
import {IOmdb} from "../models/omdb.interface";


export const OmdbApiActions = createActionGroup({
	source: 'OMDB API',
	events: {
		'Load Movie': 		  props<{ title: string }>(),
		'Load Movie Success': props<{ movie: IOmdb }>(),
		'Load Movie Failure': props<{ error: any }>(),

		'Load Movies': 		   props<{ titles: string[] }>(),
		'Load Movies Success': props<{ movies: IOmdb[] }>(),
		'Load Movies Failure': props<{ error: any }>()
	}
});

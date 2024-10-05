import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IOmdb} from "../models/omdb.interface";

export const OmdbDbActions = createActionGroup({
	source: 'OMDB DB',
	events: {
		'Get All': 		     emptyProps(),
		'Get All Success':   props<{ movies: IOmdb[] }>(),
		'Get All Failure':   props<{ error: any }>(),

		'Get By Id': 		 props<{ id: string }>(),
		'Get By Id Success': props<{ movie: IOmdb }>(),
		'Get By Id Failure': props<{ error: any }>(),

		'Add': 		         props<{ movie: IOmdb }>(),
		'Add Success': 		 props<{ movie: IOmdb }>(),
		'Add Failure': 		 props<{ error: any }>(),

		'Update': 	         props<{ movie: IOmdb }>(),
		'Update Success':    props<{ movie: IOmdb }>(),
		'Update Failure':    props<{ error: any }>(),

		'Delete': 		     props<{ omdbId: string }>(),
		'Delete Success':    props<{ movie: IOmdb }>(),
		'Delete Failure':    props<{ error: any }>()
	}
});

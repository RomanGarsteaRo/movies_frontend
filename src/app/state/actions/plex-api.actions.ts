import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IOmdb} from "../models/omdb.interface";
import {IPlex} from "../models/plex.interface";

export const PlexApiActions = createActionGroup({
	source: 'PLEX',
	events: {
		'Get All': emptyProps(),
		'Get All Success': props<{ movies: any[] }>(),
		'Get All Failure': props<{ error: any }>(),
	}
});

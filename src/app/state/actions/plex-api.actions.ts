import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IOmdb} from "../models/omdb.interface";
import {IPlex} from "../models/plex.interface";

export const PlexApiActions = createActionGroup({
	source: 'PLEX',
	events: {
		'Load Movies': emptyProps(),
		'Load Movies Success': props<{ movies: any[] }>(),
		'Load Movies Failure': props<{ error: any }>(),
	}
});

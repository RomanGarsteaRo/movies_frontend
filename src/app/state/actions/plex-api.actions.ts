import {createActionGroup, emptyProps, props} from '@ngrx/store';

export const PlexApiActions = createActionGroup({
	source: 'PLEX',
	events: {
		'Get All': emptyProps(),
		'Get All Success': props<{ movies: any[] }>(),
		'Get All Failure': props<{ error: any }>(),
	}
});

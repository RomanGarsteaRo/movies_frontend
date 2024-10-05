import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PlexApiActions} from "../actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {PlexApiService} from "../services/plex-api.service";

@Injectable()
export class PlexApiEffects {

	constructor(
		private actions$: Actions,
		private plexApiService: PlexApiService
	) {
	}

	getAll$ = createEffect(() =>
		this.actions$.pipe(
			ofType(PlexApiActions.loadMovies),
			mergeMap(() =>
				this.plexApiService.getAll().pipe(
					map(movies => PlexApiActions.loadMoviesSuccess({movies})),
					catchError(error => of(PlexApiActions.loadMoviesFailure({error})))
				)
			)
		)
	);
}

import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {OmdbApiService} from "../services/omdb-api.service";
import {OmdbApiActions} from "../actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";


@Injectable()
export class OmdbApiEffects {

	constructor(
		private actions$: Actions,
		private omdbApiService: OmdbApiService
	) {}

	loadMovie$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OmdbApiActions.loadMovie),
			mergeMap(action => this.omdbApiService.getMovie(action.title).pipe(
					map(movie => OmdbApiActions.loadMovieSuccess({movie})),
					catchError(error => of(OmdbApiActions.loadMovieFailure({error: error.message})))
				)
			)
		)
	);

	loadMovies$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OmdbApiActions.loadMovies),
			mergeMap(action => this.omdbApiService.getMovies(action.titles).pipe(
					map(movies => OmdbApiActions.loadMoviesSuccess({movies})),
					catchError(error => of(OmdbApiActions.loadMovieFailure({error: error.message})))
				)
			)
		)
	);

}

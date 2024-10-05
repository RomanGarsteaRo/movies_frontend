import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {OmdbDbActions} from "../actions";
import {catchError, map, mergeMap, of, tap} from "rxjs";
import {OmdbDbService} from "../services/omdb-db.service";

@Injectable()
export class OmdbDbEffects {

	constructor(
		private actions$: Actions,
		private omdbDbService: OmdbDbService
	) {
	}


	getAll$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OmdbDbActions.getAll),
			mergeMap(() =>
				this.omdbDbService.getAll().pipe(
					map(movies => OmdbDbActions.getAllSuccess({movies})),
					catchError(error => of(OmdbDbActions.getAllFailure({error})))
				)
			)
		)
	);

	getMovieById$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OmdbDbActions.getById),
			mergeMap(action =>
				this.omdbDbService.getById(action.id).pipe(
					map(movie => OmdbDbActions.getByIdSuccess({movie})),
					catchError(error => of(OmdbDbActions.getByIdFailure({error})))
				)
			)
		)
	);

	addMovie$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OmdbDbActions.add),
			mergeMap(action =>
				{
					console.log(action);
					return this.omdbDbService.add(action.movie).pipe(
						map(movie => OmdbDbActions.addSuccess({ movie })),
						catchError(error => of(OmdbDbActions.addFailure({ error })))
					)
				}
			)
		)
	);

	updateMovie$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OmdbDbActions.update),
			mergeMap(action =>
				this.omdbDbService.update(action.movie).pipe(
					map(movie => OmdbDbActions.updateSuccess({ movie })),
					catchError(error => of(OmdbDbActions.updateFailure({ error })))
				)
			)
		)
	);

	deleteMovie$ = createEffect(() =>
		this.actions$.pipe(
			ofType(OmdbDbActions.delete),
			mergeMap(action => {
					console.log(action);
					return this.omdbDbService.delete(action.omdbId).pipe(
						tap((item) => console.log(item)),
						map((movie) => OmdbDbActions.deleteSuccess({ movie })),
						catchError(error => of(OmdbDbActions.deleteFailure({error})))
					)
				}
			)
		)
	);

}

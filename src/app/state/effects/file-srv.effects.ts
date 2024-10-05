import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {FileSrvActions} from "../actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {FileSrvService} from "../services/file-srv.service";

@Injectable()
export class FileSerEffects {

	constructor(
		private actions$: Actions,
		private fileSrvService: FileSrvService
	) {
	}


	getAll$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FileSrvActions.getAll),
			mergeMap(() =>
				this.fileSrvService.all().pipe(
					map(files => FileSrvActions.getAllSuccess({files})),
					catchError(error => of(FileSrvActions.getAllFailure({error})))
				)
			)
		)
	);

	getFromFolder$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FileSrvActions.getFromFolder),
			mergeMap((action) =>
				this.fileSrvService.folder(action.path).pipe(
					map(files => FileSrvActions.getFromFolderSuccess({files})),
					catchError(error => of(FileSrvActions.getFromFolderFailure({error})))
				)
			)
		)
	);

	getStats$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FileSrvActions.getStats),
			mergeMap((action) =>
				this.fileSrvService.stats(action.path).pipe(
					map(files => FileSrvActions.getStatsSuccess(files)),
					catchError(error => of(FileSrvActions.getStatsFailure({error})))
				)
			)
		)
	);

	meta$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FileSrvActions.getMeta),
			mergeMap((action) =>
				this.fileSrvService.meta(action.path).pipe(
					map(files => FileSrvActions.getMetaSuccess(files)),
					catchError(error => of(FileSrvActions.getMetaFailure({error})))
				)
			)
		)
	);

	rename$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FileSrvActions.rename),
			mergeMap(action =>
				this.fileSrvService.rename(action.path, action.newName).pipe(
					map((data) => FileSrvActions.renameSuccess({ oldName: data.oldName, newName: data.newName })),
					catchError(error => of(FileSrvActions.renameFailure({ error })))
				)
			)
		)
	);

	move$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FileSrvActions.move),
			mergeMap(action =>
				this.fileSrvService.move(action.sourcePath, action.destinationPath).pipe(
					map((data) => FileSrvActions.renameSuccess({ oldName: data.sourcePath, newName: data.destinationPath })),
					catchError(error => of(FileSrvActions.renameFailure({ error })))
				)
			)
		)
	);

	delete$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FileSrvActions.delete),
			mergeMap(action =>
				this.fileSrvService.delete(action.path).pipe(
					map((data) => FileSrvActions.deleteSuccess({ path: data.path })),
					catchError(error => of(FileSrvActions.deleteFailure({ error })))
				)
			)
		)
	);

}

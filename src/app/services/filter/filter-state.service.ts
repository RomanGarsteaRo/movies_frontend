import {Injectable} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, filter, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import {IMovie} from "../movie/movie.interface";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {FilterClass, FilterCngClass, IFilter, IFilterCng, IFilterRange} from "./filter.class";
import {IOmdb} from "../omdb/omdb.interface";
import {FilterEvaluatorService} from "./filter-evaluator.service";
import {MoviesActions} from "../../state/actions";


@Injectable({
	providedIn: 'root'
})
export class FilterStateService {

	public filter_init$: BehaviorSubject<IFilter | null> = new BehaviorSubject<IFilter | null>(null);
	public filter_chng$: BehaviorSubject<IFilterCng>     = new BehaviorSubject<IFilterCng>(new FilterCngClass());


	constructor(private store: Store,
				private filterEvaluator: FilterEvaluatorService,
	) {

		this.initStartParam();

		this.filter_chng$
			.subscribe(filter => {
				this.store.select(MoviesSelectors.movies).pipe(take(1)).subscribe(movies => {
					const updatedMovies = movies.map(m => {
						const shouldShow = this.filterEvaluator.evaluate(filter, m);
						return m.show !== shouldShow ? { ...m, show: shouldShow } : null;
					}).filter((m): m is IMovie => m !== null);

					if (updatedMovies.length > 0) {
						this.store.dispatch(MoviesActions.updateMovies({ movies: updatedMovies }));
					}
				});
			});
	}


	/*  ........................................
		Init Filter Params for UI default
		........................................  */

	private initStartParam(): void {

		this.store.select(MoviesSelectors.movies)
			.pipe(
				filter((movies: IMovie[]) => Array.isArray(movies) && movies.length > 0),
				take(1)
			)
			.subscribe((movies: IMovie[]) => {
				let param: FilterClass = new FilterClass();
				movies.forEach(movie => {
					let omdb = movie.omdb;
					if (omdb) {
						this.initArrayParam(param, omdb);
						this.initRangeParam(param, omdb);
					}
				})
				console.log("SER..    init START Param -> UI    |  initStartParam(movies)    -> filter_init$.next(param)  |  param: ", param);
				this.filter_init$.next(param);
			})
	}

	private initArrayParam(param: IFilter, omdb: IOmdb): void {
		if (omdb.Genre) omdb.Genre.forEach(item => param.genre.add(item));
		if (omdb.Actors) omdb.Actors.forEach(item => param.actor.add(item));
		if (omdb.Writer) omdb.Writer.forEach(item => param.writr.add(item));
		if (omdb.Director) omdb.Director.forEach(item => param.drctr.add(item));
	}

	private initRangeParam(param: IFilter, omdb: IOmdb): void {
		if (omdb.Year && typeof omdb.Year === "number") this.setRangeParam(param.year, omdb.Year);
		if (omdb.imdbRating && typeof omdb.imdbRating === "number") this.setRangeParam(param.imdb, omdb.imdbRating);
		if (omdb.Metascore && typeof omdb.Metascore === "number") this.setRangeParam(param.meta, omdb.Metascore);
		if (omdb.RotRating && typeof omdb.RotRating === "number") this.setRangeParam(param.rott, omdb.RotRating);
		if (omdb.imdbVotes && typeof omdb.imdbVotes === "number") this.setRangeParam(param.vots, omdb.imdbVotes);
	}

	private setRangeParam(range: IFilterRange, data: number): void {
		if (range.min > data) range.min = data;
		if (range.max < data) range.max = data;
	}


}

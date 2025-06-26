import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, Observable} from "rxjs";
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

	public filter_init$:   BehaviorSubject<IFilter | null>  = new BehaviorSubject<IFilter | null>(null);
	public filter_chng$:   BehaviorSubject<IFilterCng>  	= new BehaviorSubject<IFilterCng>(new FilterCngClass());

	private movies: IMovie[] = [];

	constructor(private store: Store,
				private filterEvaluator: FilterEvaluatorService,
	) {

		this.store.select(MoviesSelectors.movies)
			.pipe(filter((movies: IMovie[]) => Array.isArray(movies) && movies.length > 0))
			.subscribe((movies: IMovie[]) => {
				this.movies = [...movies];
				this.initStartParam(movies);
			})

		this.filter_chng$.subscribe((filter: IFilterCng) => {
			if(this.movies && this.movies.length > 0){
				const updatedMovies = this.movies.map(movie => ({
					...movie,
					show: this.filterEvaluator.evaluate(filter, movie)
				}));
				this.store.dispatch(MoviesActions.updateMovies({ movies: updatedMovies }));
			}
		})
	}





/*  ........................................
	Init Filter Params
	........................................  */

	private initStartParam(movies: IMovie[]): void{
		let param: FilterClass = new FilterClass();
		movies.forEach(movie => {
			let omdb = movie.omdb;
			if (omdb) {
				this.initArrayParam(param, omdb);
				this.initRangeParam(param, omdb);
			}
		})

		this.filter_init$.next(param);
		console.log(param);
	}

	private initArrayParam(param: IFilter, omdb: IOmdb): void{
		if(omdb.Genre) omdb.Genre.forEach(item => param.genre.add(item));
		if(omdb.Actors) omdb.Actors.forEach(item => param.actor.add(item));
		if(omdb.Writer) omdb.Writer.forEach(item => param.writr.add(item));
		if(omdb.Director) omdb.Director.forEach(item => param.drctr.add(item));
	}

	private initRangeParam(param: IFilter, omdb: IOmdb): void{
		if(omdb.Year && typeof omdb.Year === "number") this.setRangeParam(param.year, omdb.Year);
		if(omdb.imdbRating && typeof omdb.imdbRating === "number") this.setRangeParam(param.imdb, omdb.imdbRating);
		if(omdb.Metascore  && typeof omdb.Metascore  === "number") this.setRangeParam(param.meta, omdb.Metascore);
		if(omdb.RotRating  && typeof omdb.RotRating  === "number") this.setRangeParam(param.rott, omdb.RotRating);
		if(omdb.imdbVotes  && typeof omdb.imdbVotes  === "number") this.setRangeParam(param.vots, omdb.imdbVotes);
	}

	private setRangeParam(range: IFilterRange, data: number): void{
		if(range.min > data) range.min = data;
		if(range.max < data) range.max = data;
	}



}

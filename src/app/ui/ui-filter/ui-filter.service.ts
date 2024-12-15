import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IMovie} from "../../services/movie/movie.interface";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {Filter, FilterClass, FRange, Genre} from "./ui-filter.class";
import {calculateNestedRanges, valueParser} from "./ui-filter.util";


@Injectable({
	providedIn: 'root'
})
export class UiFilterService {

	private movies$: 		  Observable<IMovie[]>  	 = this.store.select(MoviesSelectors.movies);
	private filter_init$:     BehaviorSubject<Filter>    = new BehaviorSubject<Filter>(new FilterClass());
	private filter_change$:   BehaviorSubject<Filter>    = new BehaviorSubject<Filter>(new FilterClass());

	constructor(private store: Store) {
		this.movies$
			.pipe(filter((movies: IMovie[]) => Array.isArray(movies) && movies.length > 0))
			.subscribe((movies: IMovie[]) => this.initFilter(movies))
	}



	/*


	1.	Crearea Obiectului ce contine valorile initiale a filtrului "filter_init$"
		Trebuie de primit valorile initiale a filtrului,
		"Year" | "Metascore" | "imdbRating" | "imdbVotes" | "RotRating" | "BoxOffice"
		+ Genurile (this.initGenres)
		poate de creat o functie nu generica dar predefinita pt proprietatile cunoscute

	2.  Creat obiectului ce contine valorile modificate a filtrului "filter_change$"

	3.  In RotRating nu poate fi min = 0, trebuie de debogat


	*/
	private initFilter(movies: IMovie[]){

		let year: 		FRange;
		let imdb: 		FRange;
		let meta: 		FRange;
		let rott: 		FRange;

		let genres:    Genre[];
		let actor:    string[];
		let writer:   string[];
		let director: string[];


		let recordw = calculateNestedRanges<IMovie, "omdb", "Year" | "Metascore" | "imdbRating" | "imdbVotes" | "RotRating" | "BoxOffice">(
			movies,
			"omdb",
			["Year", "Metascore", "imdbRating", "imdbVotes", "RotRating", "BoxOffice"],
			(value) => valueParser(value)
		)

		console.log(recordw);
	}







	private initGenres(movies: IMovie[] | null): void{
		// if (!movies) {this.genres_list$.next([]);}

		let genresSet: 	  Set<string> = new Set();
		let genresArray:  string[]    = [];
		let genres: 	  Genre[]     = []

		// Unique value
		movies?.forEach(movie => {
			// collect from OMDB
			if (movie.omdb?.Genre ) {
				movie.omdb?.Genre?.forEach(genre => genresSet.add(genre));
			}
			// collect from PLEX
			// if (movie.plex?.Genre) {
			// 	movie.plex.Genre.forEach(genreObj => genresSet.add(genreObj.tag));
			// }
		});
		genresArray = Array.from(genresSet).sort((a, b) => a.localeCompare(b));
		genres = genresArray.map(title => ({title, state: false}));

		// this.genres_list$.next( genres || []) ;
		// this.genres_change$.next( genres || []) ;
	}
	public updateMoviesByGenre(genre_changed: {title: string, state: boolean}): void {

		// let newGenre: Genre[] = this.genres_change$.value.map(genre => {
		// 	if(genre.title === genre_changed.title){
		// 		return {title: genre.title, state: genre_changed.state};
		// 	} else {
		// 		return genre;
		// 	}
		// })
		// this.genres_change$.next(newGenre);
	}
}

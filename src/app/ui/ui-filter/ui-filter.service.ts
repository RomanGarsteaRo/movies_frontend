import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IMovie} from "../../services/movie/movie.interface";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {Genre} from "./ui-filter.class";


@Injectable({
	providedIn: 'root'
})
export class UiFilterService {

	private movies$: Observable<IMovie[]> 	   = this.store.select(MoviesSelectors.movies);

	public  genres_list$:   BehaviorSubject<Genre[]>  = new BehaviorSubject<Genre[]>([]);
	public  genres_change$: BehaviorSubject<Genre[]>  = new BehaviorSubject<Genre[]>([]);
	// public  year_range:

	constructor(private store: Store) {
		this.movies$.subscribe((movies: IMovie[]) => {
			this.initGenres(movies);
		})
	}


	private initGenres(movies: IMovie[] | null): void{
		if (!movies) {this.genres_list$.next([]);}

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

		this.genres_list$.next( genres || []) ;
		this.genres_change$.next( genres || []) ;
	}

	public updateMoviesByGenre(genre_changed: {title: string, state: boolean}): void {

		let newGenre: Genre[] = this.genres_change$.value.map(genre => {
			if(genre.title === genre_changed.title){
				return {title: genre.title, state: genre_changed.state};
			} else {
				return genre;
			}
		})
		this.genres_change$.next(newGenre);
	}
}

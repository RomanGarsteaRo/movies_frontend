import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../state/selectors/movies.selectors";
import {MoviesActions} from "../state/actions";
import {IMovie} from "./movie/movie.interface";

/*   GENRES   *************************************************

	--------					|	-----------
	| IMDB |					|	| MyGenre |
	--------					|	-----------
								|
	01. "Action",				|	01. "Post-apocalyptic",
	02. "Adventure",			|
	03. "Animation",			|
	04. "Biography"				|
	05. "Comedy",				|
	06. "Crime"					|
	07. "Documentary"			|
	08. "Drama",				|
	09. "Family",				|
	10. "Fantasy",				|
	11. "Film-Noir"				|
	12. "Game-Show"				|
	13. "History",				|
	14. "Horror",				|
	15. "Music",				|
	16. "Musical"				|
	17. "Mystery"				|
	18. "New"					|
	19. "Reality-TV"			|
	21. "Romance",				|
	22. "Sci-Fi",				|
	23. "Short"					|
	24. "Sport"					|
	25. "Talk-Show"				|
	26. "Thriller",				|
	27. "War"					|
	28. "Western",				|

******************************************************/

@Injectable({
	providedIn: 'root'
})
export class FilterService {

	public genres$: BehaviorSubject<string[] | null> = new BehaviorSubject<string[] | null>([]);
	private movies$: Observable<IMovie[]> = this.store.pipe(select(MoviesSelectors.movies));

	constructor(private store: Store) {
		this.movies$.subscribe((movies: IMovie[]) => {
			this.collectMovieGenres(movies);
		})
	}


	private collectMovieGenres(movies: IMovie[] | null): void{
		if (!movies) {
			this.genres$.next(null) ;
		}
		let genreSet: Set<string> = new Set();
		let genreArray: string[] = [];

		// Unique value
		movies?.forEach(movie => {
			// OMDB
			if (movie.omdb?.Genre) {
				const omdbGenres = movie.omdb.Genre.split(", ").map(genre => genre.trim());
				omdbGenres.forEach(genre => genreSet.add(genre));
			}
			// PLEX
			if (movie.plex?.Genre) {
				movie.plex.Genre.forEach(genreObj => genreSet.add(genreObj.tag));
			}
		});
		genreArray = Array.from(genreSet).sort((a, b) => a.localeCompare(b));

		this.genres$.next( genreArray || null) ;
	}

	public updateMoviesByGenre(genre: {value: string, state: boolean}): void {
		this.store.dispatch(MoviesActions.filterMovies({ genre }));
	}

}

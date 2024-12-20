import {Injectable} from '@angular/core';
import {IFilterCng, IFilterRange} from "../ui/ui-filter/ui-filter.class";
import {IMovie} from "./movie/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class FilterEvaluatorService {

	// Verifică dacă un film îndeplinește toate criteriile de filtrare
	public evaluate(filter: IFilterCng, movie: IMovie): boolean {

		if (movie.title === "1917") {
			console.log('.');
		}

		// Daca filtru nu este activ atunci 											return => true  / SHOW
		if (!this.isFilterActive(filter)) return true;




		/*
			Daca filtru nu exista adica este null   									return => true  / SHOW
			Daca filtru exist dar conf posterului sunt in afara Range/FilterParam       return => false / HIDDEN

			Cazuri particulare:
			Posterele care nu contin aceste date sa nu fie aratate => false/HIDDEN
			ele nici nu ajung sa fie procesate in isInRange / hasCommonElements
			pentruca operatorul de conditie "IF/ELSE" le face return false

			1. !movie?.omdb?.imdbRating
			2. !movie?.omdb?.RotRating
			3. !movie?.omdb?.Metascore
			4. !movie?.omdb?.imdbVotes

		*/

		if (						     filter?.year && !this.isInRange(filter.year, movie?.year)) 			   return false;
		if (!movie?.omdb?.imdbRating || (filter?.imdb && !this.isInRange(filter.imdb, movie?.omdb?.imdbRating)))   return false;
		if (!movie?.omdb?.RotRating  ||	(filter?.rott && !this.isInRange(filter.rott, movie?.omdb?.RotRating )))   return false;
		if (!movie?.omdb?.Metascore  ||	(filter?.meta && !this.isInRange(filter.meta, movie?.omdb?.Metascore )))   return false;
		if (!movie?.omdb?.imdbVotes  || (filter?.vots && !this.isInRange(filter.vots, movie?.omdb?.imdbVotes )))   return false;

		if (!movie?.omdb?.Genre      || (filter.genre && !this.hasCommonElements(filter.genre, movie.omdb.Genre))) return false;
		// if (filter.actor && !this.hasCommonElements(movie.Actors,   filter.actor)) return false;
		// if (filter.writr && !this.hasCommonElements(movie.Writer,   filter.writr)) return false;
		// if (filter.drctr && !this.hasCommonElements(movie.Director, filter.drctr)) return false;

		return true; // Dacă toate criteriile sunt îndeplinite
	}


	// Verificăm dacă cel puțin una dintre proprietăți are o valoare diferită de null sau este populată.
	private  isFilterActive(filter: IFilterCng): boolean {
		return (
			(filter.year !== null) ||
			(filter.rott !== null) ||
			(filter.meta !== null) ||
			(filter.imdb !== null) ||
			(filter.vots !== null) ||
			(filter.genre !== null && filter.genre.length > 0) ||
			(filter.actor !== null && filter.actor.length > 0) ||
			(filter.writr !== null && filter.writr.length > 0) ||
			(filter.drctr !== null && filter.drctr.length > 0)
		);
	}

	// Verifică dacă o valoare se află într-un intervalul din filtru
	private isInRange(range: IFilterRange | null, value: string | number | undefined): boolean {
		if (!range || !value) return true;
		return +value >= range.min && +value <= range.max;
	}

	// Verifică dacă toate elementele din filtru sunt prezente in a doua lista
	private hasCommonElements(filter: string[] | null, list: string[] | undefined): boolean {
		if (!filter || filter.length === 0 || !list ) return true;
		return filter.every(filter_genre => list.includes(filter_genre));
	}
}

import {Injectable} from '@angular/core';
import {IFileExtended} from "../state/models/file.interface";
import {IMovie} from "../state/models/movie.interface";

@Injectable({
	providedIn: 'root'
})
export class SortService {

	// TODO sort in cash for fast responding

	constructor() {}

	public sortByTitleAndTags(arr: IMovie[]): IMovie[] {
		arr = arr.sort((a: IMovie, b: IMovie) => a.title.localeCompare(b.title));
		arr.forEach((movie: IMovie) => movie.nas.sort((a: IFileExtended, b: IFileExtended) => {
			return a.tags.length - b.tags.length;
		}))
		return arr;
	}

	public onSortByYear(movies: IMovie[]) {
		setTimeout(() => {
			if (+movies[0].year < +movies[1].year) {
				movies = movies.sort((a, b) => +b?.year - +a?.year);
			} else {
				movies = movies.sort((a, b) => +a?.year - +b?.year);
			}
		}, 0)
	}

	public onSortBySize(movies: IMovie[]) {
		setTimeout(() => {
			if (+movies[0].nas[0].size.sizeInByte < +movies[1].nas[0].size.sizeInByte) {
				movies = movies.sort((a, b) => +b?.nas[0].size.sizeInByte - +a?.nas[0].size.sizeInByte);
			} else {
				movies = movies.sort((a, b) => +a?.nas[0].size.sizeInByte - +b?.nas[0].size.sizeInByte);
			}
		}, 0)
	}

	public onSortByImdb(movies: IMovie[]) {
		setTimeout(() => {

			// 1. direction UP or Down
			// 2. sorting UP or Down  last not imdb rating

			if ((movies[0]?.omdb?.imdbRating && movies[1]?.omdb?.imdbRating && movies[2]?.omdb?.imdbRating) &&
				+movies[0]?.omdb?.imdbRating > +movies[1]?.omdb?.imdbRating &&
				+movies[1]?.omdb?.imdbRating > +movies[2]?.omdb?.imdbRating) {

				movies = movies.sort((a, b) => {
					let aa: number | undefined = a?.omdb?.imdbRating ? +a?.omdb?.imdbRating : undefined;
					let bb: number | undefined = b?.omdb?.imdbRating ? +b?.omdb?.imdbRating : undefined;

					// Move null imdb Down
					if(aa && bb === undefined) {
						return -1; // b down
					}
					if(aa === undefined && bb) {
						return +1; // b up
					}
					if(aa === undefined && bb === undefined) {
						return 0;
					}

					// Sort
					if(aa && bb) {
						return aa - bb;
					} else {
						return 0;
					}
				})

			} else {

				movies = movies.sort((a, b) => {
					let aa: number | undefined = a?.omdb?.imdbRating ? +a?.omdb?.imdbRating : undefined;
					let bb: number | undefined = b?.omdb?.imdbRating ? +b?.omdb?.imdbRating : undefined;

					// Move null imdb Down
					if(aa && bb === undefined) {
						return -1; // b down
					}
					if(aa === undefined && bb) {
						return +1; // b up
					}
					if(aa === undefined && bb === undefined) {
						return 0;
					}

					// Sort
					if(aa && bb) {
						return bb - aa;

					} else {
						return 0;
					}
				})
			}

		}, 0)
	}

	public onSortByTitle(movies: IMovie[]) {
		setTimeout(() => {
			if (movies[0].title > movies[1].title) {
				movies = movies.sort((a, b) => a.title.localeCompare(b.title));
			} else {
				movies = movies.sort((a, b) => b.title.localeCompare(a.title));
			}
		}, 0)
	}

	// Have or not have data
	public onSortPlex(movies: IMovie[]) {
		setTimeout(() => {
			if (movies[0].plex !== null && movies[movies.length - 1].plex === null) {
				movies = movies.sort((a, b) => {
					if (a.plex === null && b.plex !== null) {
						return -1
					}
					if (a.plex !== null && b.plex === null) {
						return 1
					}
					return 0;
				});
			} else {
				movies = movies.sort((a, b) => {
					if (a.plex === null && b.plex !== null) {
						return 1
					}
					if (a.plex !== null && b.plex === null) {
						return -1
					}
					return 0;
				});
			}
		}, 0)
	}

	// Have or not have data
	public onSortOmdb(movies: IMovie[]) {
		setTimeout(() => {
			if (movies[0].omdb !== null && movies[movies.length - 1].omdb === null) {
				movies = movies.sort((a, b) => {
					if (a.omdb === null && b.omdb !== null) {
						return -1
					}
					if (a.omdb !== null && b.omdb === null) {
						return 1
					}
					return 0;
				});
			} else {
				movies = movies.sort((a, b) => {
					if (a.omdb === null && b.omdb !== null) {
						return 1
					}
					if (a.omdb !== null && b.omdb === null) {
						return -1
					}
					return 0;
				});
			}
		}, 0)
	}
}

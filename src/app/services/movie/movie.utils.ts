import {IMovie} from "./movie.interface";

import {Movie} from "./movie.class";
import {IFileExtended} from "../file/file.interface";

export class MovieUtils {



	static groupFileExtended(fileEx: IFileExtended[]):IFileExtended[][] {

		// 1. Get List of Title (no duplicate)
		let titlesUnique: Set<string> = this.getTitleUnique(fileEx);

		return [];
	}


	// Transform IFileExtended[] to IMovie[]
	static addNasToMovies(movies: IMovie[], filesEx: IFileExtended[] | null): IMovie[] | null {
		if (!filesEx) {return null}

		// 1. Get List of Title (no duplicate)
		let titlesUnique: Set<string> = this.getTitleUnique(filesEx);

		// 2. Transform data: IFileExtended[] to IMovie[]
		titlesUnique.forEach(titleUnique => {
			let title: string = '';
			let year: number | string = 'N/A';
			let assets: IFileExtended[] = [];
			const newMovie = new Movie();

			filesEx.forEach(item => {
				if (titleUnique === item.title + item.year) {
					title = item.title;
					year = item.year;
					assets.push(item);
				}
			})

			newMovie.nas = assets;
			movies.push(newMovie);
		});

		return this.sortByTitleAndTags(movies);
	}

	private static getTitleUnique(arr: IFileExtended[]): Set<string> {
		let unique: Set<string> = new Set<string>();
		// let repeat: string[] = [];
		arr.forEach(item => {
			if (unique.has(item.title + item.year)) {
				// repeat.push(item.title);
			} else {
				unique.add(item.title + item.year);
			}
		});
		return unique;
	}

	private static sortByTitleAndTags(arr: IMovie[]): IMovie[] {
		arr = arr.sort((a: IMovie, b: IMovie) => a.title.localeCompare(b.title));
		arr.forEach((movie: IMovie) => movie.nas.sort((a: IFileExtended, b: IFileExtended) => {
			return a.tags.length - b.tags.length;
		}))
		return arr;
	}


	// Movie duration transformation      6156768 -> "1h 42m"
	public static getFormattedDuration(duration: number, format?: "h" | "m"): string {
		const totalMinutes = Math.floor(duration / 60000);
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		if (format === "h") {
			return hours.toString();
		}
		if (format === "m") {
			return minutes.toString();
		}
		return `${hours}h ${minutes}m`;
	}
}

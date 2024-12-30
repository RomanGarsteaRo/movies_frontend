import {IMovie} from "./movie.interface";

import {Movie} from "./movie.class";
import {IFile} from "../file/file.interface";
import {IOmdb} from "../omdb/omdb.interface";
import {TitleUtils} from "../utils/title.utils.";
import {OmdbAdapter} from "../omdb/ombd.adapter.class";

export class MovieUtils {


	// Transform IFile[][] to IMovie[]
	static createIMovies(groups: IFile[][]): IMovie[] {
		if (!groups) {return []}
		let movies: IMovie[] = [];
		// console.log(groups);
		groups.forEach(files => {
			let title: string = files[0]?.titl_p.title || '';
			let year:  number = files[0]?.titl_p.year  || 0;
			let movie: IMovie = new Movie({title, year, files});
			// console.log(movie);
			movies.push(movie);
		});

		return this.sortByTitleAndTags(movies);
	}

	// Add OMDB data to Movies[]
	static connectOmdb(movies: IMovie[] | null, omdb: IOmdb[]): IMovie[] {
		if (!movies || !omdb || movies.length === 0 || omdb.length === 0) {return [];}

		movies.forEach(movieItem => {
			let foundedOmdbItem: IOmdb | undefined = omdb.find(omdbItem => {
				// Wrong Title in Omdb
				// TODO improve 1
				if (movieItem.title === 'Pride & Prejudice' && omdbItem.Title === 'Pride and Prejudice') return true;
				if (movieItem.title === 'Alien³' && omdbItem.Title === 'Alien 3') return true;

				let nasTitleNorm: string | undefined = TitleUtils.normalizeTitle(movieItem.title);
				let omdbTitleNorm: string | undefined = TitleUtils.normalizeTitle(omdbItem.Title);
				return (nasTitleNorm === omdbTitleNorm) && (movieItem.year === omdbItem.Year);
			});

			if (foundedOmdbItem) {
				// 1. Exclude founded item to omdb array
				if (omdb) {
					omdb = omdb.filter(item => item !== foundedOmdbItem);
				}
				// 2. Add founded plex item to data
				movieItem.omdb = OmdbAdapter.adapter(foundedOmdbItem);
			}
		})

		return movies;
	}


	private static sortByTitleAndTags(arr: IMovie[]): IMovie[] {
		arr = arr.sort((a: IMovie, b: IMovie) => a.title.localeCompare(b.title));
		arr.forEach((movie: IMovie) => movie.files.sort((a: IFile, b: IFile) => {
			if (a.titl_p && b.titl_p) {
				return a.titl_p.tags.length - b.titl_p.tags.length;
			} else {
				return 0;
			}

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

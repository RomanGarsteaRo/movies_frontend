import {IFileExtended} from "./file.interface";
import {IOmdb} from "./omdb.interface";
import {IPlex} from "./plex.interface";
import {SortService} from "../../services/sort.service";


export interface IMovie {
	title: string,
	year: number | string,

	nas: IFileExtended[],
	omdb: IOmdb | null,
	plex: IPlex | null,
}

export class MovieUtils {


	// Transform IFileExtended[] to IMovie[]
	static transformIFileExtendedToIMovie(files: IFileExtended[] | null): IMovie[] | null {

		if (!files) {return null}
		let movies: IMovie[] = [];

		// 1. Get List of Title (no duplicate)
		let titlesUnique: Set<string> = this.getTitleUnique(files);

		// 2. Transform data: IFileExtended[] to IMovie[]
		titlesUnique.forEach(titleUnique => {
			let title: string = '';
			let year: number | string = 'N/A';
			let assets: IFileExtended[] = [];

			files.forEach(item => {
				if (titleUnique === item.title + item.year) {
					title = item.title;
					year = item.year;
					assets.push(item);
				}
			})

			movies.push({
				title,
				year,
				nas: assets,
				plex: null,
				omdb: null,
			})
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
}

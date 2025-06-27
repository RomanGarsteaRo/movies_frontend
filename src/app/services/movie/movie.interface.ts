import {IFile} from "../file/file.interface";
import {IOmdb} from "../omdb/omdb.interface";
import {IPlex} from "../plex/plex.interface";





export interface IMovie {
	id:    string,
	title: string,
	year: number,

	/**
	 * UI-only property used to control movie visibility.
	 *
	 * This value is derived from the result of filter evaluation
	 * (evaluate(filter, movie)) and must not be modified outside
	 * the filtering logic.
	 *
	 * Used to optimize performance in large movie lists by avoiding
	 * repeated filter computations on every change.
	 *
	 * NOTE: This is not a business state property — it reflects only UI visibility.
	 */
	show: boolean,

	files: IFile[],
	omdb: IOmdb | null,
	plex: IPlex | null,
}

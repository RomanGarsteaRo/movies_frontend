import {IFileExtended} from "../file/file.interface";
import {IOmdb} from "../omdb/omdb.interface";
import {IPlex} from "../plex/plex.interface";



export interface IMovie {
	show: boolean,
	imdbID: string

	title: string,
	year: number,
	studio: string,
	rated: string,
	released: string,
	summary: string,
	duration: number,
	genre: string[],
	actors: string[],
	director: string[],
	writer: string[],
	country: string[],
	boxOffice: string,
	awards: string,
	rating: {
		rottentomatoes: {
			tomatometer: number,
			popcornmeter: number
		} | null,
		imdb: {
			votes: number,
			rating: number,
		} | null,
		metacritic: number | null,
	}


	nas: IFileExtended[],
	omdb: IOmdb | null,
	plex: IPlex | null,
}

import {IFileExtended} from "../file/file.interface";
import {IOmdb} from "../omdb/omdb.interface";
import {IPlex} from "../plex/plex.interface";
import {IMovie} from "./movie.interface";

export class Movie implements IMovie {
	public show: boolean;
	public imdbID: string;
	public title: string;
	public year: number;
	public studio: string;
	public rated: string;
	public released: string;
	public summary: string;
	public duration: number;
	public genre: string[];
	public actors: string[];
	public director: string[];
	public writer: string[];
	public country: string[];
	public boxOffice: string;
	public awards: string;
	public rating: {
		rottentomatoes: {
			tomatometer: number;
			popcornmeter: number;
		} | null;
		imdb: {
			votes: number;
			rating: number;
		} | null;
		metacritic: number | null;
	};
	public nas: IFileExtended[];
	public omdb: IOmdb | null;
	public plex: IPlex | null;

	constructor(data: Partial<IMovie> = {}) {
		this.show = data.show ?? false;
		this.imdbID = data.imdbID ?? '';
		this.title = data.title ?? '';
		this.year = data.year ?? 0;
		this.studio = data.studio ?? '';
		this.rated = data.rated ?? '';
		this.released = data.released ?? '';
		this.summary = data.summary ?? '';
		this.duration = data.duration ?? 0;
		this.genre = data.genre ?? [];
		this.actors = data.actors ?? [];
		this.director = data.director ?? [];
		this.writer = data.writer ?? [];
		this.country = data.country ?? [];
		this.boxOffice = data.boxOffice ?? '';
		this.awards = data.awards ?? '';
		this.rating = data.rating ?? {
			rottentomatoes: null,
			imdb: null,
			metacritic: null
		};
		this.nas = data.nas ?? [];
		this.omdb = data.omdb ?? null;
		this.plex = data.plex ?? null;
	}
}

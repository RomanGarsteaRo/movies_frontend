import {IFile} from "../file/file.interface";
import {IOmdb} from "../omdb/omdb.interface";
import {IPlex} from "../plex/plex.interface";
import {IMovie} from "./movie.interface";

export class Movie implements IMovie {

	public    id: string;
	public title: string;
	public  year: number;
	public  show: boolean;

	public files: IFile[];
	public  omdb: IOmdb | null;
	public  plex: IPlex | null;


	constructor(data: Partial<IMovie> = {}) {
		this.id	   = data.id    ?? '';
		this.title = data.title ?? '';
		this.year  = data.year  ?? 1900;
		this.show  = data.show  ?? true;

		this.files = data.files ?? [];
		this.omdb  = data.omdb  ?? null;
		this.plex  = data.plex  ?? null;
	}
}

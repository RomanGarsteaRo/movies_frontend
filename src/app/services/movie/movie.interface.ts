import {IFile} from "../file/file.interface";
import {IOmdb} from "../omdb/omdb.interface";
import {IPlex} from "../plex/plex.interface";



export interface IMovie {
	title: string,
	year: number,
	show: boolean,

	files: IFile[],
	omdb: IOmdb | null,
	plex: IPlex | null,
}

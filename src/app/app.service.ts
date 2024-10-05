import {Injectable} from '@angular/core';
import {IOmdb} from "./services/omdb/omdb.interface";
import {IPlex} from "./data/data_from_plex";

export interface INas {
	fileName: string,
	path: string,
	size: string,
}

export interface INasExtended {
	fileName: string,
	path: string,
	size: IFileSize,

	title: string,
	year: number | string,
	format: string,
	tags: string[],
}

export interface IMovie {
	title: string,
	year: number | string,

	nas: INasExtended[],
	omdb: IOmdb | null,
	plex: IPlex | null,
}

export interface IFileSize {
	sizeInByte: number,
	sizeInUnit: number;
	unit: string;
}

const SizeUnits: { [key: string]: number } = {
	Bytes: 1,
	KB: 1024,
	MB: 1024 * 1024,
	GB: 1024 * 1024 * 1024,
	TB: 1024 * 1024 * 1024 * 1024
};

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor() {}

	public init(){

	}

}

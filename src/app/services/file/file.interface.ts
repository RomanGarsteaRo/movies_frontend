
export interface IFile {
	title: string,
	path: string,
	size: string,
}

export interface IFileExtended {
	title: string,
	path: string,
	size: IFileSize,

	year: number | string,
	format: string,
	tags: string[],
}

export interface IFileSize {
	sizeInByte: number,
	sizeInUnit: number;
	unit: string;
}

export const SizeUnits: { [key: string]: number } = {
	Bytes: 1,
	KB: 1024,
	MB: 1024 * 1024,
	GB: 1024 * 1024 * 1024,
	TB: 1024 * 1024 * 1024 * 1024
};

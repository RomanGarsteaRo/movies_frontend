

export const SizeUnits: { [key: string]: number } = {
	Bytes: 1,
	KB: 1024,
	MB: 1024 * 1024,
	GB: 1024 * 1024 * 1024,
	TB: 1024 * 1024 * 1024 * 1024
};

export interface IFileSize {
	sizeInByte: number,
	sizeInUnit: number;
	unit: string;
}

export interface IFile {
	fileName: string,
	path: string,
	size: string,
}

export interface IFileExtended {
	fileName: string,
	path: string,
	size: IFileSize,

	title: string,
	year: number | string,
	format: string,
	tags: string[],
}

export class FileUtils {

	// Transform IFile[] to IFileExtended[]
	static transformIFileToIFileExtended(files: IFile[]): IFileExtended[] | null {
		if (!files?.length) {return null}
		return files.map((movie: IFile) => {
			const match = movie.fileName.match(/^(.+?)\s\((\d{4})\)/);
			const title = match?.[1] || '';
			const year: number | string = parseInt(match?.[2] || '', 10) || 'N/A';
			const format = movie.fileName.match(/(?:\.([^.]+))?$/)?.[1] || '';
			const tags: string[] = FileUtils.getTagsFromTitle(movie.fileName);

			return {
				fileName: movie.fileName,
				path:     movie.path,
				size:     FileUtils.convertBytesToIFileSize(+movie.size),
				title:    title,
				year,
				format,
				tags
			};
		});
	}

	// Bytes to IFileSize
	static convertBytesToIFileSize(bytes: number | IFileSize): IFileSize {
		if (typeof bytes !== "number") {
			return bytes;
		}

		if (bytes === 0) {
			return {
				sizeInByte: 0,
				sizeInUnit: 0,
				unit: "n/a"
			};
		}

		const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
		if (i === 0) {
			return {
				sizeInByte: bytes,
				sizeInUnit: bytes,
				unit: "Bytes"
			};
		} else {
			const unit = Object.keys(SizeUnits)[i];
			return {
				sizeInByte: bytes,
				sizeInUnit: bytes / SizeUnits[unit],
				unit: unit
			};
		}
	}

	// "Blade (1998) 3D ISO.mp4"  ->  ['3D', 'ISO']
	static getTagsFromTitle(id: string): string[] {
		id = id.replace(/.*?\(\d{4}\)/, '').trim();
		id = id.replace(/\.[^.]+$/, '');
		return id.split(' ').filter(item => item !== '');
	}

}

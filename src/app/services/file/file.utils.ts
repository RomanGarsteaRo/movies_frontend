import {IFile, IFileSize, SizeUnits} from "./file.interface";
import {TitleUtils} from "../utils/title.utils.";

export class FileUtils {


	// Group Files with same Title
	static group(filesEx: IFile[]):IFile[][]  {
		if(!filesEx){return [];}
		let allGroup: IFile[][] = [];

		// 1. Get List of Title (no duplicate)
		let titlesUnique: string[] = TitleUtils.getTitleUnique(filesEx);

		// 2. Group IFileExtended[] to IFileExtended[][]
		titlesUnique.forEach(titleUnique => {
			let title: string = '';
			let year: number | string = 'N/A';
			let group: IFile[] = [];

			filesEx.forEach(item => {
				if (titleUnique === item.title + item.year) {
					title = item.title;
					year = item.year;
					group.push(item);
				}
			})
			allGroup.push(group);
		});
		return allGroup;
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

}

import {IFile, IFileSize, SizeUnits} from "./file.interface";
import {TitleUtils} from "../utils/title.utils.";

export class FileUtils {


	// Group Files with same Title
	static group(files: IFile[]):IFile[][]  {
		if(!files){return [];}
		let allGroup: IFile[][] = [];

		// 1. Get List of Title (no duplicate)
		let titlesUnique: string[] = TitleUtils.getTitleUnique(files);

		// 2. Group IFile[] to IFile[][]
		titlesUnique.forEach(titleUnique => {
			let title: string;
			let year:  number;
			let group: IFile[] = [];

			files.forEach(item => {
				if (titleUnique === item.titl_p?.title + item.titl_p?.year) {
					title = item.titl_p?.title || '';
					year  = item.titl_p?.year  || 1900;
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

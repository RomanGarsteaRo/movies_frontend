import {IOmdb} from "./omdb.interface";


export class OmdbAdapter {

	// Method to manage the object by adding missing properties and removing unnecessary ones
	public static adapter(obj: Partial<IOmdb>): Partial<IOmdb> {
		obj = this.addMissingProperties(obj);
		obj = this.removeUnnecessaryProperties(obj);
		return obj;
	}

	private static validKeys: Set<string> = new Set([
		"imdbID",
		"Title",
		"Year",
		"Rated",
		"Released",
		"Runtime",
		"Genre",
		"Director",
		"Writer",
		"Actors",
		"Plot",
		"Language",
		"Country",
		"Awards",
		"Poster",
		"RotRating",
		"Metascore",
		"imdbRating",
		"imdbVotes",
		"Type",
		"DVD",
		"BoxOffice",
		"Production",
		"Website",
		"Response",
	]);
	private static defaultValues: Partial<IOmdb> = {
		imdbID: "N/A",
		Title: "N/A",
		Year: "N/A",
		Rated: "N/A",
		Released: "N/A",
		Runtime: "N/A",
		Genre: [],
		Director: [],
		Writer: [],
		Actors: [],
		Plot: "N/A",
		Language: "N/A",
		Country: "N/A",
		Awards: "N/A",
		Poster: "N/A",
		RotRating: "N/A",
		Metascore: "N/A",
		imdbRating: "N/A",
		imdbVotes: "N/A",
		Type: "N/A",
		DVD: "N/A",
		BoxOffice: "N/A",
		Production: "N/A",
		Website: "N/A",
		Response: "N/A",
	};

	// Method to add missing properties with default values
	private static addMissingProperties(obj: Partial<IOmdb>): Partial<IOmdb> {
		obj = {...obj};

		for (const key of this.validKeys) {
			if (!obj.hasOwnProperty(key)) {
				(obj as any)[key] = (this.defaultValues as any)[key];
			} else if (key === "Ratings" && !Array.isArray(obj.Ratings)) {
				obj.Ratings = [];
			}
		}

		return obj;
	}

	// Method to remove unnecessary properties
	private static removeUnnecessaryProperties(obj: Partial<IOmdb>): Partial<IOmdb> {
		for (const key in obj) {
			if (!this.validKeys.has(key)) {
				delete (obj as any)[key];
			}
		}

		return obj;
	}
}

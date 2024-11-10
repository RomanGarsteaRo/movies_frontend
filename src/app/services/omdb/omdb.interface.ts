// export const path = 'http://www.omdbapi.com/?t=oblivion&plot=full&apikey=8adee8c7';
// export const path = 'http://www.omdbapi.com/?t=Warrior&plot=full&apikey=8adee8c7&y=2011';


export interface IOmdb {
	"Title"?: string,
	"Year"?: string,
	"Rated"?: string,
	"Released"?: string,
	"Runtime"?: string,
	"Genre"?: string,
	"Director"?: string,
	"Writer"?: string,
	"Actors"?: string,
	"Plot"?: string,
	"Language"?: string,
	"Country"?: string,
	"Awards"?: string,
	"Poster"?: string,
	"Ratings"?: { "Source": string, "Value": string }[],
	"Metascore"?: string,
	"RotRating"?: string,
	"imdbRating"?: string,
	"imdbVotes"?: string,
	"imdbID"?: string,
	"Type"?: string,
	"DVD"?: string,
	"BoxOffice"?: string,
	"Production"?: string,
	"Website"?: string,
	"totalSeasons"?: string,
	"Response"?: string,
	"Error"?: string
}




/*   GENRES   *************************************************

	--------					|	-----------
	| IMDB |					|	| MyGenre |
	--------					|	-----------
								|
	01. "Action",				|	01. "Post-apocalyptic",
	02. "Adventure",			|	02. "Vagina"
	03. "Animation",			|	03.
	04. "Biography"				|
	05. "Comedy",				|
	06. "Crime"					|
	07. "Documentary"			|
	08. "Drama",				|
	09. "Family",				|
	10. "Fantasy",				|
	11. "Film-Noir"				|
	12. "Game-Show"				|
	13. "History",				|
	14. "Horror",				|
	15. "Music",				|
	16. "Musical"				|
	17. "Mystery"				|
	18. "New"					|
	19. "Reality-TV"			|
	21. "Romance",				|
	22. "Sci-Fi",				|
	23. "Short"					|
	24. "Sport"					|
	25. "Talk-Show"				|
	26. "Thriller",				|
	27. "War"					|
	28. "Western",				|

******************************************************/

export interface Filter {
	genres: Genre[],
	year: 	Range,

	imdb: Range,
	meta: Range,
	rott: Range,

	actor: string[],
	writer: string[],
	director: string[],
}

export interface Genre {
	title: string,
	state: boolean,
}

export interface Range {
	min: number,
	max: number
}

export class FilterClass implements Filter {
	genres: Genre[];
	year: Range;
	imdb: Range;
	meta: Range;
	rott: Range;
	actor: string[];
	writer: string[];
	director: string[];

	constructor(data: Partial<Filter> = {}) {
		this.year = data.year || { min: 0, max: 0 };
		this.imdb = data.imdb || { min: 0, max: 0 };
		this.meta = data.meta || { min: 0, max: 0 };
		this.rott = data.rott || { min: 0, max: 0 };

		this.genres   = data.genres   || [];
		this.actor    = data.actor    || [];
		this.writer   = data.writer   || [];
		this.director = data.director || [];
	}
}

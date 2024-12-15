

export interface Filter {
	year: FRange,
	imdb: FRange,
	meta: FRange,
	rott: FRange,

	genres:    Genre[],
	actor:    string[],
	writer:   string[],
	director: string[],
}

export interface Genre {
	title: string,
	state: boolean,
}

export interface FRange {
	min: number,
	max: number
}

export class FilterClass implements Filter {
	year: FRange;
	imdb: FRange;
	meta: FRange;
	rott: FRange;

	genres:    Genre[];
	actor:    string[];
	writer:   string[];
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

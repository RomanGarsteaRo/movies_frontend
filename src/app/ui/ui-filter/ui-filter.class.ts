export interface IFilterRange {
	min: number,
	max: number
}

export class FilterRangeClass implements  IFilterRange {
	min: number;
	max: number;
	constructor(data: IFilterRange = { min: +Infinity, max: -Infinity }) {
		this.min = data.min || +Infinity;
		this.max = data.max || -Infinity;
	}
}


export interface IFilter {
	year: IFilterRange,
	rott: IFilterRange,
	meta: IFilterRange,
	imdb: IFilterRange,
	vots: IFilterRange,

	genre: Set<string>,
	actor: Set<string>,
	writr: Set<string>,
	drctr: Set<string>,
}

export class FilterClass implements IFilter {
	year:  IFilterRange;
	rott:  IFilterRange;
	meta:  IFilterRange;
	imdb:  IFilterRange;
	vots:  IFilterRange;

	genre: Set<string> = new Set();
	actor: Set<string> = new Set();
	writr: Set<string> = new Set();
	drctr: Set<string> = new Set();

	constructor(init: Partial<IFilter> = {}) {
		this.year = init.year || new FilterRangeClass();
		this.rott = init.rott || new FilterRangeClass();
		this.meta = init.meta || new FilterRangeClass();
		this.imdb = init.imdb || new FilterRangeClass();
		this.vots = init.vots || new FilterRangeClass();
	}
}


export interface IFilterCng {
	year: IFilterRange | null,
	rott: IFilterRange | null,
	meta: IFilterRange | null,
	imdb: IFilterRange | null,
	vots: IFilterRange | null,

	genre: string[] | null,
	actor: string[] | null,
	writr: string[] | null,
	drctr: string[] | null,
}

export class FilterCngClass implements IFilterCng {
	year:  IFilterRange | null = null;
	rott:  IFilterRange | null = null;
	meta:  IFilterRange | null = null;
	imdb:  IFilterRange | null = null;
	vots:  IFilterRange | null = null;

	genre: string[] | null = null;
	actor: string[] | null = null;
	writr: string[] | null = null;
	drctr: string[] | null = null;

	constructor(cng: Partial<IFilterCng> = {}) {
		this.year  = cng.year  || null;
		this.rott  = cng.rott  || null;
		this.meta  = cng.meta  || null;
		this.imdb  = cng.imdb  || null;
		this.vots  = cng.vots  || null;
		this.genre = cng.genre || null;
		this.actor = cng.actor || null;
		this.writr = cng.writr || null;
		this.drctr = cng.drctr || null;
	}
}

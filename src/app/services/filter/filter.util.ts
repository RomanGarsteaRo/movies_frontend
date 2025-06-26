import {IFilterRange} from "./filter.class";




export function calculateRanges<T>(data: T[], properties: (keyof T)[]): Record<keyof T, IFilterRange> {

	const ranges: Record<string, IFilterRange> = {};

	// Initialize ranges for each property
	for (const property of properties) {
		ranges[property as string] = { min: Infinity, max: -Infinity };
	}

	// Traverse the data once
	for (const item of data) {
		for (const property of properties) {
			const value = item[property] as unknown as number;
			const range = ranges[property as string];

			if (value < range.min) range.min = value;
			if (value > range.max) range.max = value;
		}
	}

	return ranges as Record<keyof T, { min: number; max: number }>;
}


export function calculateNestedRanges<
	T, // Tipul elementelor din masiv
	K extends keyof T, // Cheia pentru proprietatea "nested"
	P extends keyof NonNullable<T[K]> // Chei valide ale obiectului "nested", excluzând null
>(
	data: T[],
	nestedKey: K,
	properties: P[], // Array de chei din obiectul "nested"
	valueParser: (value: NonNullable<T[K]>[P]) => number | null // Funcție pentru a converti valorile în numere
): Record<P, { min: number; max: number }> {
	const ranges: Record<P, { min: number; max: number }> = {} as Record<P, { min: number; max: number }>;

	// Initializează range-urile pentru fiecare proprietate
	for (const property of properties) {
		ranges[property] = { min: Infinity, max: -Infinity };
	}

	// Parcurge datele o singură dată
	for (const item of data) {
		const nestedObject = item[nestedKey];
		if (nestedObject) {
			for (const property of properties) {
				const rawValue = nestedObject[property];
				const value = valueParser(rawValue);

				// Verifică dacă valoarea este un număr valid
				if (value !== null) {
					const range = ranges[property];
					if (value < range.min) range.min = value;
					if (value > range.max) range.max = value;
				}
			}
		}
	}

	return ranges;
}

/*   Preproceseaza diverse tipuri de valori pentru a le converti în numere. Aceasta va trata cazuri comune, cum ar fi:
 *	  1. Valori numerice în format string (ex. "123", "12.34").
 *	  2. Valori cu simboluri precum %, $, sau alte caractere care trebuie eliminate înainte de conversie.
 *	  3. Valori null, undefined, sau alte tipuri care nu pot fi convertite.
 */

export function valueParser(value: unknown): number | null {
	if (typeof value === 'number') {
		return !isNaN(value) ? value : null; // Returnăm numărul dacă este valid
	}

	if (typeof value === 'string') {
		// Eliminăm simboluri nedorite (de exemplu %, $, etc.) și convertim în număr
		const cleanedValue = value.replace(/[^0-9.-]/g, '');
		const parsedValue = parseFloat(cleanedValue);
		return !isNaN(parsedValue) ? parsedValue : null;
	}

	return null; // Returnăm null pentru valori care nu pot fi convertite
}

/*
private initFilter(movies: IMovie[]){

		let year: 		IFilterRange;
		let imdb: 		IFilterRange;
		let meta: 		IFilterRange;
		let rott: 		IFilterRange;

		let genres:     string[];
		let actor:      string[];
		let writer:     string[];
		let director:   string[];


		let recordw = calculateNestedRanges<IMovie, "omdb", "Year" | "Metascore" | "imdbRating" | "imdbVotes" | "RotRating" | "BoxOffice">(
			movies,
			"omdb",
			["Year", "Metascore", "imdbRating", "imdbVotes", "RotRating", "BoxOffice"],
			(value) => valueParser(value)
		)

		console.log(recordw);
	}
* */

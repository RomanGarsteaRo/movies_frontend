
import { IMovie } from '../movie/movie.interface';

export const movieSortAccessors: Record<string, (m: IMovie) => any> = {
	title: (m) => m.title?.toLowerCase() ?? null,
	year: (m) => m.year ?? null,
	'size': (m) => m.files?.[0]?.size?.sizeInByte ?? null,
	'format': (m) => m.files?.[0]?.titl_p?.format ?? null,
	'imdb': (m) => m.omdb?.imdbRating ?? null,
	'plex': (m) => m.plex ? 1: 0,
	'omdb': (m) => m.omdb ? 1: 0,
};

// fallback (optional)
export function getAccessor(key: string): (m: IMovie) => any {
	/*   Dacă ai o funcție personalizată de extragere, folosește-o.
	 *   Dacă nu, extrage pur și simplu valoarea cu IMovie[key].”
	 * 	 Este creata pentru a evita introducerea cheilor directe (simple, care nu au transformare) in movieSortAccessors()
	 */
	return movieSortAccessors[key] ?? ((m: IMovie) => m[key as keyof IMovie]);
}

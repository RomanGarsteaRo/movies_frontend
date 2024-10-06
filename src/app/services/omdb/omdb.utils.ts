import {IMovie} from "../../state/models/movie.interface";
import {OmdbAdapter} from "./ombd.adapter.class";
import {IOmdb} from "../../state/models/omdb.interface";
import {TitleUtils} from "../title.utils.";



export class OmdbUtils {


	// Add OMDB to Movies[]
	public static addOmdbToMovies(movies: IMovie[] | null, omdb: IOmdb[]): IMovie[] | null {
		if (!movies || !omdb || movies.length === 0 || omdb.length === 0) {
			return null; // Возвращаем null, если один из параметров отсутствует или пустой
		}

		movies.forEach(movieItem => {
			let foundedOmdbItem: IOmdb | undefined = omdb.find(omdbItem => {
				// Wrong Title in Omdb
				// TODO improve 1
				if (movieItem.title === 'Pride & Prejudice' && omdbItem.Title === 'Pride and Prejudice') return true;
				if (movieItem.title === 'Alien³' && omdbItem.Title === 'Alien 3') return true;

				let nasTitleNorm: string | undefined = TitleUtils.normalizeTitle(movieItem.title);
				let omdbTitleNorm: string | undefined = TitleUtils.normalizeTitle(omdbItem.Title);
				return (nasTitleNorm === omdbTitleNorm) && (movieItem.year.toString() === omdbItem.Year);
			});

			if (foundedOmdbItem) {
				// 1. Exclude founded item to plex arr
				if (omdb) { // Дополнительная проверка
					omdb = omdb.filter(item => item !== foundedOmdbItem);
				}
				// 2. Add founded plex item to data
				movieItem.omdb = OmdbAdapter.adapter(foundedOmdbItem);
			}
		})

		return movies;
	}

}

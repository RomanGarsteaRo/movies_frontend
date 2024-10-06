import {IMovie} from "../../state/models/movie.interface";
import {IPlex} from "../../state/models/plex.interface";
import {TitleUtils} from "../title.utils.";


export class PlexUtils {


	// Add Plex[] to Movies[]
	public static addPlexToMovies(movies: IMovie[] | null, plex: IPlex[]): IMovie[] | null {

		if (!movies || !plex || movies.length === 0 || plex.length === 0) {
			return null; // Возвращаем null, если один из параметров отсутствует или пустой
		}

		movies.forEach(movieItem => {
			let foundedPlexItem: IPlex | undefined = plex.find(plexItem => this.thereAreSimilarities(movieItem, plexItem));

			if (foundedPlexItem) {
				// Exclude founded item to plex arr
				plex = plex.filter(item => item !== foundedPlexItem);
				// Add founded plex item to data
				movieItem.plex = foundedPlexItem;
			}
		})

		return movies;
	}

	// TODO improve 1
	private static thereAreSimilarities(nas: IMovie, plex: IPlex): boolean {

		// It's wrong Title and Year
		if (nas.title === 'Brigada Diverse intra in actiune' && plex.title === 'Brigade Miscellaneous Steps In') {
			return true
		}

		let titleSimilarities: boolean = this.thereAreSimilaritiesInTitle(nas, plex);
		let yearSimilarities: boolean = this.thereAreSimilaritiesInYears(nas, plex);
		return titleSimilarities && yearSimilarities;
	}

	// TODO improve 1
	private static thereAreSimilaritiesInTitle(nas: IMovie, plex: IPlex): boolean {

		let nasTitle: string | undefined = nas.title;
		let plexTitleOr: string | undefined = plex?.originalTitle;
		let plexTitle: string | undefined = plex.title;

		// Plex wrong title. Title of movie in IMDB is different of title in plex.
		if (nasTitle === 'Jodaeiye Nader Az Simin') {
			nasTitle = 'A Separation'
		}
		if (nasTitle === 'Naked Gun 33 13 The Final Insult') {
			nasTitle = 'Naked Gun 33 1 3 The Final Insult'
		}
		if (nasTitle === 'Xin Shao Lin Si') {
			nasTitle = 'Shaolin'
		}
		if (nasTitle === 'Daddy\'s Home 2') {
			nasTitle = 'Daddy‘s Home'
		}
		if (nasTitle === 'Crimson Rivers 2 Angels of the Apocalypse') {
			nasTitle = 'Crimson Rivers II Angels of the Apocalypse'
		}
		if (nasTitle === 'The Legend of the Drunken Master') {
			nasTitle = 'The Legend of Drunken Master'
		}
		if (nasTitle === 'Men in Black 3') {
			nasTitle = 'Men in Black³'
		}
		if (nasTitle === 'X2 X-Men United') {
			nasTitle = 'X2'
		}
		if (nasTitle === 'Mission Impossible - Dead Reckoning Part One') {
			nasTitle = 'Mission Impossible - Dead Reckoning'
		}
		if (nasTitle === 'Dark Phoenix') {
			nasTitle = 'X-Men: Dark Phoenix'
		}

		nasTitle = TitleUtils.normalizeTitle(nasTitle);
		plexTitleOr = TitleUtils.normalizeTitle(plexTitleOr);
		plexTitle = TitleUtils.normalizeTitle(plexTitle);

		return nasTitle === plexTitle || nasTitle === plexTitleOr;
	}

	private static thereAreSimilaritiesInYears(nas: IMovie, plex: IPlex): boolean {
		let plexYear = plex.year;
		let nasYear = nas.year;
		if (plexYear && nasYear !== 'N/A' && typeof nasYear === "number") {
			return plexYear === nasYear || plexYear === nasYear - 1 || plexYear === nasYear + 1;
		} else {
			return false;
		}
	}

}

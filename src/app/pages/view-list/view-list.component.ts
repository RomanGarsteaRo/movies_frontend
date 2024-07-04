import {Component} from '@angular/core';
import {AsyncPipe, CommonModule, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FileSizeComponent} from "../../ui/file-size/file-size.component";
import {NoCommaPipe} from "../../ui/no-comma.pipe";
import {IPlex} from "../../data/data_from_plex";
import {forkJoin} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OmdbService} from "../../services/omdb/omdb.service";
import {OmdbManager} from "../../services/omdb/ombd.manager.class";
import {IOmdb} from "../../services/omdb/omdb.interface";


export interface INas {
	fileName: string,
	path: string,
	size: string,
}

export interface INasExtended {
	fileName: string,
	path: string,
	size: IFileSize,

	title: string,
	year: number | string,
	format: string,
	tags: string[],
}

export interface IMovie {
	title: string,
	year: number | string,

	nas: INasExtended[],
	omdb: IOmdb | null,
	plex: IPlex | null,
}

export interface IFileSize {
	sizeInByte: number,
	sizeInUnit: number;
	unit: string;
}

const SizeUnits: { [key: string]: number } = {
	Bytes: 1,
	KB: 1024,
	MB: 1024 * 1024,
	GB: 1024 * 1024 * 1024,
	TB: 1024 * 1024 * 1024 * 1024
};

@Component({
	selector: 'app-view-list',
	standalone: true,
	imports: [
		AsyncPipe,
		DecimalPipe,
		FileSizeComponent,
		NgForOf,
		NgIf,
		NoCommaPipe,
		CommonModule
	],
	templateUrl: './view-list.component.html',
	styleUrl: './view-list.component.scss'
})
export class ViewListComponent {

	private nasBaseURL: string = 'http://localhost:3000/';
	private nasOmdb: string = 'http://localhost:3000/movies';
	private plexURL: string = "https://10-0-0-143.b235164b334f4933bace62d0694b3418.plex.direct:32400/library/sections/1/all?type=1&includeCollections=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.87.2&X-Plex-Client-Identifier=yxti8gld2yndgo8hh9zauojl&X-Plex-Platform=Chrome&X-Plex-Platform-Version=126.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Windows&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x919%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=763&X-Plex-Token=uqUhdUPHx6rHGwZa2jg4&X-Plex-Provider-Version=5.1&X-Plex-Text-Format=plain&X-Plex-Language=en"

	public files:    INas[] = [];
	public plex:    IPlex[] = [];
	public omdb:    IOmdb[] = [];
	public movies: IMovie[] = [];

	public averageYear!:    number | undefined;
	public averageSize!: IFileSize | undefined;
	public averageImdb!:    number | undefined;

	public moviesRus!: IMovie[];
	public moviesEn!:  IMovie[];
	public movies3d!:    number;
	public duplicate!: IMovie[];

	public plexNotAssociated!: IPlex[];
	public plexAssociated!: number;
	public omdbAssociated!: number;
	public omdbNotAssociated!: IOmdb[];


	constructor(private http: HttpClient, private omdbService: OmdbService) {

		/**
		 *	 1. Get data from NAS (all file data)
		 *	  	    [{"id": "The Man from U.N.C.L.E. (2015).m2ts",
		 *           "path": "\\\\NAS\\Movies\\The Man from U.N.C.L.E. (2015).m2ts",
		 *           "size": "39542323200"}...]
		 *   2. Get data from Plex app
		 *   3. Get OMDB json from DB
		 *	 4. init()
		 *
		 */

		forkJoin({
			files: this.http.get<INas[]>(this.nasBaseURL),
			plex: this.http.get<any>(this.plexURL),
			omdb: this.http.get<IOmdb[]>(this.nasOmdb),
		}).subscribe(({files, plex, omdb}) => {
			this.files = files;
			this.plex = plex.MediaContainer.Metadata;
			this.omdb = omdb;
			this.init();

			// console.log('NAS:', this.files);
			// console.log('Plex:', this.plex);
			// console.log('Omdb:', this.omdb);
			// console.log('Movies:', this.movies);
			// console.log();
		});
	}


	// Init ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////


	private init(): void {
		this.transformMovieData();
		this.addOmdbJsonToData();
		this.addPlexJsonToData();

		this.averageYear = this.getAverageYear();
		this.averageSize = this.getAverageSize();
		this.averageImdb = this.getAverageImdb();

		this.moviesRus = this.getRusName(this.movies);
		this.moviesEn = this.getEnName(this.movies);
		this.movies3d = this.getMovies3d(this.movies);
		this.duplicate = this.getDuplicate(this.movies);

		this.plexAssociated = this.getPlexAssociated();
		this.omdbAssociated = this.getOmdbAssociated();
	}

	private transformMovieData(): void {
		let nas: INas[] = this.files;
		let nasExtended: INasExtended[];
		let movies: IMovie[] = [];

		// 1. Transform data: INas[] to INasExtended[]
		nasExtended = nas.map((movie: INas) => {
			const match = movie.fileName.match(/^(.+?)\s\((\d{4})\)/);
			const title = match?.[1] || '';
			const year: number | string = parseInt(match?.[2] || '', 10) || 'N/A';
			const format = movie.fileName.match(/(?:\.([^.]+))?$/)?.[1] || '';
			const tags: string[] = this.getTagsFromTitle(movie.fileName);

			return {
				fileName: movie.fileName,
				path: movie.path,
				size: this.convertBytesToIFileSize(+movie.size),
				title: title,
				year,
				format,
				tags
			};
		});

		// 2. Get List of Title (no duplicate)
		let titlesUnique: Set<string> = this.getNasTitleUnique(nasExtended);

		// 3. Transform data: INasExtended[] to IMovie[]
		titlesUnique.forEach(titleUnique => {
			let title: string = '';
			let year: number | string = 'N/A';
			let assets: INasExtended[] = [];

			nasExtended.forEach(item => {
				if (titleUnique === item.title + item.year) {
					title = item.title;
					year = item.year;
					assets.push(item);
				}
			})

			movies.push({
				title,
				year,
				nas: assets,
				plex: null,
				omdb: null,
			})
		});

		// 4. Sort by title and tags: [ISO, 3D ...] and save in movies property
		this.movies = this.sortNasData(movies);
	}

	private convertBytesToIFileSize(bytes: number | IFileSize): IFileSize {

		if (typeof bytes !== "number") {
			return bytes;
		}

		if (bytes == 0) {
			return {
				sizeInByte: 0,
				sizeInUnit: 0,
				unit: "n/a"
			};
		}

		const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
		if (i == 0) {
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

	private normalizeTitle(fileName: string | undefined): string | undefined {
		// https://en.wikipedia.org/wiki/Filename#Reserved_characters_and_words


		// TEST
		// 01. "3:10 to Yuma" -> "3 10 to Yuma"
		// 02. "300: Rise of an Empire" -> "300 Rise of an Empire"

		// Remove illegal characters from a file name but leave spaces
		// https://stackoverflow.com/questions/42210199/remove-illegal-characters-from-a-file-name-but-leave-spaces
		fileName = fileName?.replace(/[/\\?%*:|"<>]/g, ' ');
		// Remove double space
		fileName = fileName?.replace('  ', ' ');
		// The removes whitespace from both ends of a string.
		fileName = fileName?.trim();
		fileName = fileName?.toLowerCase();


		return fileName || undefined;
	}


	private getDuplicate(arr: IMovie[]): IMovie[] {
		// https://flexiple.com/javascript/find-duplicates-javascript-array
		return arr.filter((item, index) => arr.indexOf(item) !== index);
	}

	private getRusName(arr: IMovie[]): IMovie[] {
		const russianTitleRegex: RegExp = /[а-яА-ЯЁё]/;
		return arr.filter(movie => russianTitleRegex.test(movie.title));
	}

	private getMovies3d(arr: IMovie[]): number {
		return arr.reduce((acc: number, item: IMovie) => {
			let count = 0;
			item.nas.forEach(file => {
				if (file.tags.find(tag => tag === '3D')) {
					count++;
				}
			})
			return acc += count;
		}, 0);
	}

	private getAverageSize(): IFileSize | undefined{
		if(!this.movies) {return undefined}
		let size: number = 0;
		this.movies.forEach(item => {
			item.nas.forEach((movie: INasExtended) => size += movie.size.sizeInByte)
		});
		return this.convertBytesToIFileSize(size / this.movies.length);
	}

	private getEnName(arr: IMovie[]): IMovie[] {
		const russianTitleRegex: RegExp = /[а-яА-ЯЁё]/;
		return arr.filter(movie => !russianTitleRegex.test(movie.title));
	}

	private getAverageYear(): number | undefined{
		if(!this.movies) {return undefined}
		let size: number = 0;
		this.movies.forEach(item => size += +item.year);
		return size / this.movies.length;
	}

	private getAverageImdb(): number | undefined {
		if(!this.omdb) {return undefined}
		let size: number = 0;
		this.omdb.forEach(item => size = size + (item?.imdbRating ? +item.imdbRating : 0));
		return size / this.omdb.length;
	}

	private getNasTitleUnique(arr: INasExtended[]): Set<string> {
		let unique: Set<string> = new Set<string>();
		// let repeat: string[] = [];
		arr.forEach(item => {
			if (unique.has(item.title + item.year)) {
				// repeat.push(item.title);
			} else {
				unique.add(item.title + item.year);
			}
		});
		// console.log(repeat);
		return unique;
	}

	private getTagsFromTitle(id: string): string[] {
		id = id.replace(/.*?\(\d{4}\)/, '').trim();
		id = id.replace(/\.[^.]+$/, '');
		return id.split(' ').filter(item => item !== '');
	}



	// TODO sort in cash for fast responding
	// Sort ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////

	private sortNasData(arr: IMovie[]): IMovie[] {
		arr = arr.sort((a: IMovie, b: IMovie) => a.title.localeCompare(b.title));
		arr.forEach((movie: IMovie) => movie.nas.sort((a: INasExtended, b: INasExtended) => {
			return a.tags.length - b.tags.length;
		}))
		return arr;
	}

	public onSortByYear() {
		setTimeout(() => {
			if (+this.movies[0].year < +this.movies[1].year) {
				this.movies = this.movies.sort((a, b) => +b?.year - +a?.year);
			} else {
				this.movies = this.movies.sort((a, b) => +a?.year - +b?.year);
			}
		}, 0)
	}

	public onSortBySize() {
		setTimeout(() => {
			if (+this.movies[0].nas[0].size.sizeInByte < +this.movies[1].nas[0].size.sizeInByte) {
				this.movies = this.movies.sort((a, b) => +b?.nas[0].size.sizeInByte - +a?.nas[0].size.sizeInByte);
			} else {
				this.movies = this.movies.sort((a, b) => +a?.nas[0].size.sizeInByte - +b?.nas[0].size.sizeInByte);
			}
		}, 0)
	}

	public onSortByImdb() {
		setTimeout(() => {

			// 1. direction UP or Down
			// 2. sorting UP or Down  last not imdb rating

			if ((this.movies[0]?.omdb?.imdbRating && this.movies[1]?.omdb?.imdbRating && this.movies[2]?.omdb?.imdbRating) &&
				+this.movies[0]?.omdb?.imdbRating > +this.movies[1]?.omdb?.imdbRating &&
				+this.movies[1]?.omdb?.imdbRating > +this.movies[2]?.omdb?.imdbRating) {

				this.movies = this.movies.sort((a, b) => {
					let aa: number | undefined = a?.omdb?.imdbRating ? +a?.omdb?.imdbRating : undefined;
					let bb: number | undefined = b?.omdb?.imdbRating ? +b?.omdb?.imdbRating : undefined;

					// Move null imdb Down
					if(aa && bb === undefined) {
						return -1; // b down
					}
					if(aa === undefined && bb) {
						return +1; // b up
					}
					if(aa === undefined && bb === undefined) {
						return 0;
					}

					// Sort
					if(aa && bb) {
						return aa - bb;
					} else {
						return 0;
					}
				})

			} else {

				this.movies = this.movies.sort((a, b) => {
					let aa: number | undefined = a?.omdb?.imdbRating ? +a?.omdb?.imdbRating : undefined;
					let bb: number | undefined = b?.omdb?.imdbRating ? +b?.omdb?.imdbRating : undefined;

					// Move null imdb Down
					if(aa && bb === undefined) {
						return -1; // b down
					}
					if(aa === undefined && bb) {
						return +1; // b up
					}
					if(aa === undefined && bb === undefined) {
						return 0;
					}

					// Sort
					if(aa && bb) {
						return bb - aa;

					} else {
						return 0;
					}
				})
			}

		}, 0)
	}

	public onSortByTitle() {
		setTimeout(() => {
			if (this.movies[0].title > this.movies[1].title) {
				this.movies = this.movies.sort((a, b) => a.title.localeCompare(b.title));
			} else {
				this.movies = this.movies.sort((a, b) => b.title.localeCompare(a.title));
			}
		}, 0)
	}

	// Have or not have data
	public onSortPlex() {
		setTimeout(() => {
			if (this.movies[0].plex !== null && this.movies[this.movies.length - 1].plex === null) {
				this.movies = this.movies.sort((a, b) => {
					if (a.plex === null && b.plex !== null) {
						return -1
					}
					if (a.plex !== null && b.plex === null) {
						return 1
					}
					return 0;
				});
			} else {
				this.movies = this.movies.sort((a, b) => {
					if (a.plex === null && b.plex !== null) {
						return 1
					}
					if (a.plex !== null && b.plex === null) {
						return -1
					}
					return 0;
				});
			}
		}, 0)
	}

	// Have or not have data
	public onSortOmdb() {
		setTimeout(() => {
			if (this.movies[0].omdb !== null && this.movies[this.movies.length - 1].omdb === null) {
				this.movies = this.movies.sort((a, b) => {
					if (a.omdb === null && b.omdb !== null) {
						return -1
					}
					if (a.omdb !== null && b.omdb === null) {
						return 1
					}
					return 0;
				});
			} else {
				this.movies = this.movies.sort((a, b) => {
					if (a.omdb === null && b.omdb !== null) {
						return 1
					}
					if (a.omdb !== null && b.omdb === null) {
						return -1
					}
					return 0;
				});
			}
		}, 0)
	}


	// PLEX ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////

	// Concat PLEX JSON  from Plex server in NAS to Movies[]
	private addPlexJsonToData(): void {
		let plexNotAssociated: IPlex[] = [...this.plex];
		this.movies.forEach(movieItem => {
			let foundedPlexItem: IPlex | undefined = plexNotAssociated.find(plexItem => this.thereAreSimilarities(movieItem, plexItem));

			if (foundedPlexItem) {
				// Exclude founded item to plex arr
				plexNotAssociated = plexNotAssociated.filter(item => item !== foundedPlexItem);
				// Add founded plex item to data
				movieItem.plex = foundedPlexItem;
			}
		})

		this.plexNotAssociated = plexNotAssociated
		// console.log('plexNotAssociated:', plexNotAssociated);
	}

	private getPlexAssociated(): number {
		return this.movies.reduce((acc: number, cur: IMovie) => cur.plex !== null ? ++acc : acc, 0);
	}


	// TODO improve 1
	private thereAreSimilaritiesInTitle(nas: IMovie, plex: IPlex): boolean {

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

		nasTitle = this.normalizeTitle(nasTitle);
		plexTitleOr = this.normalizeTitle(plexTitleOr);
		plexTitle = this.normalizeTitle(plexTitle);

		return nasTitle === plexTitle || nasTitle === plexTitleOr;
	}

	private thereAreSimilaritiesInYears(nas: IMovie, plex: IPlex): boolean {
		let plexYear = plex.year;
		let nasYear = nas.year;
		if (plexYear && nasYear !== 'N/A' && typeof nasYear === "number") {
			return plexYear === nasYear || plexYear === nasYear - 1 || plexYear === nasYear + 1;
		} else {
			return false;
		}
	}


	// TODO improve 1
	private thereAreSimilarities(nas: IMovie, plex: IPlex): boolean {

		// It's wrong Title and Year
		if (nas.title === 'Brigada Diverse intra in actiune' && plex.title === 'Brigade Miscellaneous Steps In') {
			return true
		}

		let titleSimilarities: boolean = this.thereAreSimilaritiesInTitle(nas, plex);
		let yearSimilarities: boolean = this.thereAreSimilaritiesInYears(nas, plex);
		return titleSimilarities && yearSimilarities;
	}


	// OMDB ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////

	// Concat OMDB from DB to Movies[]
	private addOmdbJsonToData() {
		this.omdbNotAssociated = [...this.omdb];
		this.movies.forEach(movieItem => {
			let foundedOmdbItem: IOmdb | undefined = this.omdbNotAssociated.find(omdbItem => {
				// Wrong Title in Omdb
				// TODO improve 1
				if (movieItem.title === 'Pride & Prejudice' && omdbItem.Title === 'Pride and Prejudice') return true;
				if (movieItem.title === 'Alien³' && omdbItem.Title === 'Alien 3') return true;

				let nasTitleNorm: string | undefined = this.normalizeTitle(movieItem.title);
				let omdbTitleNorm: string | undefined = this.normalizeTitle(omdbItem.Title);
				return (nasTitleNorm === omdbTitleNorm) && (movieItem.year.toString() === omdbItem.Year);
			});

			if (foundedOmdbItem) {
				// 1. Exclude founded item to plex arr
				this.omdbNotAssociated = this.omdbNotAssociated.filter(item => item !== foundedOmdbItem);
				// 2. Add founded plex item to data
				movieItem.omdb = OmdbManager.adapter(foundedOmdbItem);
			}
		})
		// console.log("omdbNotAssociated:", this.omdbNotAssociated.map(item => ({title: item.Title, year: item.Year}))[0]);
		// console.log("omdbNotAssociated:", this.omdbNotAssociated);
	}

	private getOmdbAssociated(): number {
		return this.movies.reduce((acc: number, cur: IMovie) => cur.omdb !== null ? ++acc : acc, 0);
	}


	// BUTTONS /////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////


	public downloadAllNotAssociatedOmdb():void{
		this.omdbService.processMovies(this.movies).subscribe({
			next: updatedMovie => {
				console.log('updatedMovie', updatedMovie);
				// this.movies = this.movies.map(movie =>
				// 	movie.title === updatedMovie.title && movie.year === updatedMovie.year ? updatedMovie : movie
				// );
			},
			error: err => {
				console.error('Error processing movies', err);
			},
			complete: () => {
				console.log('All movies processed');
			}
		});
	}


}

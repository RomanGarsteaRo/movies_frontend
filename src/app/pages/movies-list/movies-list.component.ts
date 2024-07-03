import {Component} from '@angular/core';
import {AsyncPipe, CommonModule, DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FileSizeComponent} from "../../ui/file-size/file-size.component";
import {NoCommaPipe} from "../../ui/no-comma.pipe";
import {IOmdb, json_omdb} from "../../data/data_from_omdbapi";
import {IPlex, json_plex} from "../../data/data_from_plex";
import {Observable, tap} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {EndPoint, UrlBase} from "../../services/url/UrlBase";
import {OmdbManager} from "../../services/ombd-manager.class";

interface INas {
	fileName: string,
	path: string,
	size: string,
}

interface INasExtended {
	fileName: string,
	path: string,
	size: IFileSize,

	title: string,
	year: number | string,
	format: string,
	tags: string[],
}

interface IMovie {
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
  selector: 'app-movies-list',
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
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {

	private nasBaseURL:  string = 'http://localhost:3000/';
	private omdbBaseURL: string = 'http://www.omdbapi.com/';  // ?apikey=8adee8c7&plot=full&t=
	private omdbApiKey:  string = '8adee8c7';
	private plexJsonURL: string = "https://10-0-0-143.b235164b334f4933bace62d0694b3418.plex.direct:32400/library/sections/1/all?type=1&includeCollections=1&includeExternalMedia=1&X-Plex-Product=Plex%20Web&X-Plex-Version=4.87.2&X-Plex-Client-Identifier=yxti8gld2yndgo8hh9zauojl&X-Plex-Platform=Chrome&X-Plex-Platform-Version=126.0&X-Plex-Features=external-media%2Cindirect-media%2Chub-style-list&X-Plex-Model=bundled&X-Plex-Device=Windows&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1920x919%2C1920x1080&X-Plex-Container-Start=0&X-Plex-Container-Size=763&X-Plex-Token=uqUhdUPHx6rHGwZa2jg4&X-Plex-Provider-Version=5.1&X-Plex-Text-Format=plain&X-Plex-Language=en"

	public $list!: Observable<INasExtended[]>;
	public listOfMovies!: IMovie[];
	public numberOfFiles!: number;
	public duplicate!: INasExtended[];
	public rusTitle!: IMovie[];
	public enTitle!: IMovie[];
	public movies3d!: number;
	public averageSize!: IFileSize;
	public averageYear!: number;
	public numberOfItemsPlexInData!: number;
	public numberOfItemsOmdbInData!: number;
	public plex: IPlex[] = [...json_plex];
	public omdb: IOmdb[] = [...json_omdb];
	public omdbDownload!: IOmdb | undefined;
	public omdbNotAssociated!: IOmdb[];

	constructor(private http: HttpClient) {

		/**
		  *	  1. Get data from BackEnd
		  *	  	    [{"id": "The Man from U.N.C.L.E. (2015).m2ts",
		  *           "path": "\\\\NAS\\Movies\\The Man from U.N.C.L.E. (2015).m2ts",
		  *           "size": "39542323200"}...]
		  *	  2. init() -> in subscribe
		  *
		  */
		this.getList().subscribe();
	}







	// Init ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////


	public getList(): Observable<INasExtended[]> {
		const url: string = this.nasBaseURL;
		return this.http.get<INasExtended[]>(url).pipe(
			tap(arr => this.init(arr)),
		);
	}

	private init(arr: any[]):void {
		arr = this.transformMovieData(arr);
		this.addOmdbJsonToData(arr);
		this.addPlexJsonToData(arr);
		arr = this.sortData(arr);


		this.listOfMovies = arr;
		this.numberOfFiles = this.getNumberOfFiles(arr);
		this.rusTitle = this.getRusName(arr);
		this.enTitle = this.getEnName(arr);
		this.averageYear = this.getAverageYear(arr);
		this.averageSize = this.getAverageSize(arr);
		this.movies3d = this.getMovies3d(arr);
		this.numberOfItemsPlexInData = this.getNumberOfPlexItemsInData(arr);
		this.numberOfItemsOmdbInData = this.getNumberOfOmdbItemsInData(arr);
		this.duplicate = this.getDuplicate(arr);
		console.log(arr);
	}

	private transformMovieData(arr: INas[]): IMovie[] {

		let result: IMovie[] = [];

		// 1. Transform data: IMovie[] to INasExtended[]
		let NasExtended: INasExtended[] = arr.map((movie: INas) => {
			const match = movie.fileName.match(/^(.+?)\s\((\d{4})\)/);
			const title= match?.[1] || '';
			const year: number | string = parseInt(match?.[2] || '', 10) || 'N/A';
			const format= movie.fileName.match(/(?:\.([^.]+))?$/)?.[1] || '';
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
		let titlesUnique: Set<string> = this.getNasTitleUnique(NasExtended);

		// 3. Transform data: INasExtended[] to IMovie[]
		titlesUnique.forEach(titleUnique => {
			let title: string = '';
			let year: number | string = 'N/A';
			let assets: INasExtended[] = [];

			NasExtended.forEach(item => {
				if(titleUnique === item.title + item.year) {
					title = item.title;
					year = item.year;
					assets.push(item);
				}
			})

			result.push({
				title,
				year,
				nas: assets,
				plex: null,
				omdb: null,
			})
		});

		return result;
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


	private getDuplicate(arr: INasExtended[]): INasExtended[] {
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
			item.nas.forEach(file=> {
				if(file.tags.find(tag => tag === '3D')) {
					count++;
				}
			})
			return acc += count;
		}, 0);
	}

	private getAverageSize(arr: IMovie[]): IFileSize {
		let size: number = 0;
		arr.forEach(item => {
			item.nas.forEach((movie: INasExtended)=> size += movie.size.sizeInByte)
		});
		return this.convertBytesToIFileSize(size/ this.listOfMovies.length);
	}

	private getEnName(arr: IMovie[]): IMovie[] {
		const russianTitleRegex: RegExp = /[а-яА-ЯЁё]/;
		return arr.filter(movie => !russianTitleRegex.test(movie.title));
	}

	private getAverageYear(arr: IMovie[]): number {
		let size: number = 0;
		arr.forEach(item => size += +item.year);
		return size / this.listOfMovies.length;
	}

	private getNasTitleUnique(arr: INasExtended[]): Set<string> {
		let unique: Set<string> = new Set<string>();
		// let repeat: string[] = [];
		arr.forEach(item => {
			if(unique.has(item.title + item.year)) {
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

	private getNumberOfFiles(list: IMovie[]): number {
		return list.reduce((acc: number, item: IMovie) => {
			return acc += item.nas.length;
		},0)
	}


	// Sort ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////

	private sortData(arr: IMovie[]): IMovie[] {
		arr = arr.sort((a: IMovie,b: IMovie) => a.title.localeCompare(b.title));
		arr.forEach((movie: IMovie) => movie.nas.sort((a: INasExtended, b: INasExtended)=> {
			return a.tags.length - b.tags.length;
		}))
		return arr;
	}

	onSortByYear() {
		setTimeout(()=> {
			if (+this.listOfMovies[0].year < +this.listOfMovies[1].year) {
				this.listOfMovies = this.listOfMovies.sort((a, b) =>  +b?.year - +a?.year);
			} else {
				this.listOfMovies = this.listOfMovies.sort((a, b) =>  +a?.year - +b?.year);
			}
		},0)
	}

	onSortBySize() {
		setTimeout(()=> {
			if (+this.listOfMovies[0].nas[0].size.sizeInByte < +this.listOfMovies[1].nas[0].size.sizeInByte) {
				this.listOfMovies = this.listOfMovies.sort((a, b) =>  +b?.nas[0].size.sizeInByte - +a?.nas[0].size.sizeInByte);
			} else {
				this.listOfMovies = this.listOfMovies.sort((a, b) =>  +a?.nas[0].size.sizeInByte - +b?.nas[0].size.sizeInByte);
			}
		},0)
	}

	onSortByTitle() {
		setTimeout(()=> {
			if (this.listOfMovies[0].title > this.listOfMovies[1].title) {
				this.listOfMovies = this.listOfMovies.sort((a, b) =>  a.title.localeCompare(b.title));
			} else {
				this.listOfMovies = this.listOfMovies.sort((a, b) =>  b.title.localeCompare(a.title));
			}
		},0)
	}

	// Have or not have data
	onSortPlex() {
		setTimeout(()=> {
			if (this.listOfMovies[0].plex !== null && this.listOfMovies[this.listOfMovies.length - 1].plex === null) {
				this.listOfMovies = this.listOfMovies.sort((a, b) => {
					if (a.plex === null && b.plex !== null) {return -1}
					if (a.plex !== null && b.plex === null) {return  1}
					return 0;
				});
			} else {
				this.listOfMovies = this.listOfMovies.sort((a, b) => {
					if (a.plex === null && b.plex !== null) {return  1}
					if (a.plex !== null && b.plex === null) {return -1}
					return 0;
				});
			}
		},0)
	}

	// Have or not have data
	onSortOmdb() {
		setTimeout(()=> {
			if (this.listOfMovies[0].omdb !== null && this.listOfMovies[this.listOfMovies.length - 1].omdb === null) {
				this.listOfMovies = this.listOfMovies.sort((a, b) => {
					if (a.omdb === null && b.omdb !== null) {return -1}
					if (a.omdb !== null && b.omdb === null) {return  1}
					return 0;
				});
			} else {
				this.listOfMovies = this.listOfMovies.sort((a, b) => {
					if (a.omdb === null && b.omdb !== null) {return  1}
					if (a.omdb !== null && b.omdb === null) {return -1}
					return 0;
				});
			}
		},0)
	}


	// PLEX ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////

	private addPlexJsonToData(arr: IMovie[]): void {
		let plexNotFounded: IPlex[] = [...this.plex];
		arr.forEach(movieItem=> {
			// console.log(this.plex.filter(item => item.title.includes("Asterix")).map(item => ({title: item.title, year: item.year})))
			let foundedPlexItem: IPlex | undefined = plexNotFounded.find(plexItem=> this.thereAreSimilarities(movieItem, plexItem));

			if (foundedPlexItem) {
				// Exclude founded item to plex arr
				plexNotFounded = plexNotFounded.filter(item => item !== foundedPlexItem);
				// Add founded plex item to data
				movieItem.plex = foundedPlexItem;
			}
		})

	}

	private getNumberOfPlexItemsInData(arr: IMovie[]): number {
		return arr.reduce((acc:number, cur:IMovie) => cur.plex !== null ? ++acc : acc, 0);
	}
	private getNumberOfOmdbItemsInData(arr: IMovie[]): number {
		return arr.reduce((acc:number, cur:IMovie) => cur.omdb !== null ? ++acc : acc, 0);
	}

	private thereAreSimilaritiesInTitle(nas: IMovie, plex: IPlex): boolean{

		let nasTitle: 	  string | undefined = nas.title;
		let plexTitleOr:  string | undefined = plex?.originalTitle;
		let plexTitle: 	  string | undefined = plex.title;

		// Plex wrong title. Title of movie in IMDB is different of title in plex.
		if(nasTitle === 'Jodaeiye Nader Az Simin') {nasTitle = 'A Separation'}
		if(nasTitle === 'Naked Gun 33 13 The Final Insult') {nasTitle = 'Naked Gun 33 1 3 The Final Insult'}
		if(nasTitle === 'Xin Shao Lin Si') {nasTitle = 'Shaolin'}
		if(nasTitle === 'Daddy\'s Home 2') {nasTitle = 'Daddy‘s Home'}
		if(nasTitle === 'Crimson Rivers 2 Angels of the Apocalypse') {nasTitle = 'Crimson Rivers II Angels of the Apocalypse'}
		if(nasTitle === 'The Legend of the Drunken Master') {nasTitle = 'The Legend of Drunken Master'}
		if(nasTitle === 'Men in Black 3') {nasTitle = 'Men in Black³'}
		if(nasTitle === 'X2 X-Men United') {nasTitle = 'X2'}
		if(nasTitle === 'Mission Impossible - Dead Reckoning Part One') {nasTitle = 'Mission Impossible - Dead Reckoning'}

		nasTitle 	  = this.normalizeTitle(nasTitle);
		plexTitleOr   = this.normalizeTitle(plexTitleOr);
		plexTitle 	  = this.normalizeTitle(plexTitle);

		return nasTitle === plexTitle || nasTitle === plexTitleOr;
	}

	private thereAreSimilaritiesInYears(nas: IMovie, plex: IPlex): boolean{
		let plexYear = plex.year;
		let nasYear = nas.year;
		if(plexYear && nasYear !== 'N/A' && typeof nasYear === "number") {
			return plexYear === nasYear ||  plexYear === nasYear -1 || plexYear === nasYear +1;
		} else {
			return false;
		}
	}

	private thereAreSimilarities(nas: IMovie, plex: IPlex):boolean{

		// It's wrong Title and Year
		if(nas.title === 'Brigada Diverse intra in actiune' && plex.title === 'Brigade Miscellaneous Steps In') { return true}

		let titleSimilarities: boolean = this.thereAreSimilaritiesInTitle(nas, plex);
		let yearSimilarities:  boolean = this.thereAreSimilaritiesInYears(nas, plex);
		return titleSimilarities && yearSimilarities;
	}


	// OMDB ////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////


	private addOmdbJsonToData(arr: IMovie[]) {
		this.omdbNotAssociated = [...this.omdb];
		arr.forEach(movieItem=> {
			let foundedOmdbItem: IOmdb | undefined = this.omdbNotAssociated.find(omdbItem=> {
				// Wrong Title in Omdb
				if (movieItem.title === 'Pride & Prejudice' && omdbItem.Title === 'Pride and Prejudice') return true;

				let nasTitleNorm:  string | undefined = this.normalizeTitle(movieItem.title);
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
		console.log(this.omdbNotAssociated.map(item=> ({title: item.Title, year: item.Year})));
	}

	// Get OMDB JSON from OMDB api
	getOmdbJson(group: IMovie): void {
		let title = group.plex?.title || group.title;
		let year: number | string = group.plex?.year || group.year;
		const params = new HttpParams().appendAll({t: title, plot: 'full', apikey: this.omdbApiKey, y: year});
		this.http.get<any>(this.omdbBaseURL, {params}).pipe(tap(data=> {
			this.omdbDownload = OmdbManager.adapter(data);
			console.log(this.omdbDownload);
		})).subscribe();
	}


	// Save OMDB JSON to DB
	saveOmdbJson(movie: IOmdb) {
		let headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');

		// .append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
		this.http.post<IOmdb>(UrlBase.url + EndPoint.movies.root, movie, {headers}).subscribe();
	}

	get options() {
		let headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
		return {headers, params: undefined};
	}

	public addToDB() {
		this.listOfMovies.forEach(movie => {
			if(movie.omdb) {
				this.saveOmdbJson(movie.omdb);
			}
		})

	}

}

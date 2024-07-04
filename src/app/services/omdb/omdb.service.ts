import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, concatMap, defaultIfEmpty, filter, from, map, of, tap} from "rxjs";
import {IMovie} from "../../pages/view-list/view-list.component";
import {IOmdb} from "./omdb.interface";
import {OmdbManager} from "./ombd.manager.class";

@Injectable({
	providedIn: 'root'
})
export class OmdbService {
	private omdbApiKey = '8adee8c7';
	private omdbBaseURL = 'http://www.omdbapi.com/';
	private saveUrl = 'http://localhost:3000/movies';

	constructor(private http: HttpClient) {}

	// Get OMDB JSON from OMDB api
	fetchOmdbData(movie: IMovie) {
		console.log('Ombd Service -> Fetch');
		let title = movie.plex?.title || movie.title;
		let year: number | string = movie.plex?.year || movie.year;
		const params = new HttpParams().appendAll({ t: title, plot: 'full', apikey: this.omdbApiKey, y: year });

		return this.http.get<IOmdb>(this.omdbBaseURL, { params }).pipe(
			filter(omdbData => omdbData.Response === "True"),
			map(omdbData => OmdbManager.adapter(omdbData)),
			tap(omdbData => console.log('Ombd Service -> Fetch -> return:', omdbData)),
			catchError(error => {
				console.error('Error fetching OMDB data', error);
				return of(null);
			}),
			defaultIfEmpty(null)
		);
	}

	saveOmdbData(omdbData: IOmdb) {
		// console.log('Ombd Service -> Save:', omdbData);
		const headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
		return this.http.post<IOmdb>(this.saveUrl, omdbData, { headers }).pipe(
			// tap(omdbData => console.log('return:', omdbData)),
			catchError(error => {
				console.error('Error saving OMDB data', error);
				return of(null);
			})
		);
	}

	processMovies(movies: IMovie[]) {
		return from(movies).pipe(
			filter(movie => movie.omdb === null),
			concatMap(movie =>
				this.fetchOmdbData(movie).pipe(
					filter((omdbData): omdbData is IOmdb => omdbData !== null),
					concatMap(omdbData => this.saveOmdbData(omdbData).pipe(
						map(() => ({ ...movie, omdb: omdbData }))
					))
				)
			),
			tap(updatedMovie => {
				// console.log('Updated movie with OMDB data:', updatedMovie);
			}),
			catchError(error => {
				console.error('Error processing movies', error);
				return of(null);
			})
		);
	}

	get options() {
		let headers = new HttpHeaders().append('Content-Type', 'application/json; charset=utf-8');
		return {headers, params: undefined};
	}
}

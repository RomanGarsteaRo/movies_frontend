import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {catchError, concatMap, filter, from, map, Observable, of, throwError, toArray} from "rxjs";
import {OmdbAdapter} from "../../services/omdb/ombd.adapter.class";
import {IOmdb} from "../../services/omdb/omdb.interface";

// 'http://www.omdbapi.com/?t=oblivion&plot=full&apikey=8adee8c7';
// 'http://www.omdbapi.com/?t=Warrior&plot=full&apikey=8adee8c7&y=2011';

@Injectable({
	providedIn: 'root'
})
export class OmdbApiService {

	private omdbApiKey = '8adee8c7';
	private omdbBaseURL = 'http://www.omdbapi.com/';

	constructor(private http: HttpClient) {}

	getMovie(title: string, year?: number): Observable<IOmdb> {

		const params = new HttpParams().appendAll({
			t: title,
			y: year || '',
			plot: 'full',
			apikey: this.omdbApiKey,
		});

		return this.http.get<IOmdb>(this.omdbBaseURL, { params }).pipe(
			map((omdbData: IOmdb) => OmdbAdapter.adapter(omdbData)),
			catchError(error => throwError(() => error))
		);
	}

	getMovies(titles: string[]): Observable<IOmdb[]> {
		return from(titles).pipe(
			concatMap(title => this.getMovie(title).pipe(
				catchError(error => {
					console.error(`Error fetching movie: ${title}`, error);
					return of(null);
				})
			)),
			filter(movie => !!movie),
			toArray()
		);
	}
}

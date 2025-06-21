import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {IOmdb} from "../../services/omdb/omdb.interface";

@Injectable({
	providedIn: 'root'
})
export class OmdbDbService {

	private omdbBaseURL: string = 'http://localhost:3000/omdb';
	// private omdbBaseURL: string = 'http://10.0.0.56:3000/omdb';
	constructor(private http: HttpClient) {}

	getAll(): Observable<IOmdb[]> {
		return this.http.get<IOmdb[]>(this.omdbBaseURL).pipe(
			catchError(error => throwError(() => error))
		);
	}

	getById(imdbID: string): Observable<IOmdb> {
		const url = `${this.omdbBaseURL}/${imdbID}`;
		return this.http.get<IOmdb>(url).pipe(
			catchError(error => throwError(() => error))
		);
	}

	add(movie: IOmdb): Observable<IOmdb> {
		return this.http.post<IOmdb>(this.omdbBaseURL, movie).pipe(
			catchError(error => throwError(() => error))
		);
	}

	update(updatedMovie: IOmdb): Observable<IOmdb> {
		const url = `${this.omdbBaseURL}/${updatedMovie.imdbID}`;
		return this.http.put<IOmdb>(url, updatedMovie);
	}

	delete(imdbID: string): Observable<IOmdb> {
		const url = `${this.omdbBaseURL}/${imdbID}`;
		return this.http.delete<IOmdb>(url).pipe(
			catchError(error => throwError(() => error))
		);
	}
}

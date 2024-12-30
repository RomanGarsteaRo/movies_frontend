import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {IFile} from "../../services/file/file.interface";

@Injectable({
	providedIn: 'root'
})
export class FileSrvService {

	// private baseURL: string = 'http://localhost:3000/file';
	private baseURL: string = 'http://10.0.0.74:3000/file';

	constructor(private http: HttpClient) {}

	all(): Observable<IFile[]> {
		const url = `${this.baseURL}/all`;
		return this.http.get<IFile[]>(url).pipe(
			catchError(error => throwError(() => error))
		);
	}


	// Get all files in folder
	folder(path: string): Observable<IFile[]> {
		const url = `${this.baseURL}/folder`;
		return this.http.post<IFile[]>(url, {path}).pipe(
			catchError(error => throwError(() => error))
		);
	}

	stats(path: string): Observable<any> {
		const url = `${this.baseURL}/stats`;
		return this.http.post<any>(url, {path}).pipe(
			catchError(error => throwError(() => error))
		);
	}

	rename(currentPath: string, newName: string): Observable<{ oldName: string, newName: string }> {
		return this.http.post<{ oldName: string, newName: string }>(`${this.baseURL}/rename`, { currentPath, newName }).pipe(
			catchError(error => {
				console.error('### Rename failed', error);
				return throwError(() => error);
			})
		);
	}

	move(sourcePath: string, destinationPath: string): Observable<{ sourcePath: string, destinationPath: string }> {
		return this.http.post<{ sourcePath: string, destinationPath: string }>(`${this.baseURL}/move`, { sourcePath, destinationPath }).pipe(
			catchError(error => {
				console.error('### Move failed', error);
				return throwError(() => error);
			})
		);
	}

	delete(path: string): Observable<{ path: string }> {
		return this.http.delete<{ path: string }>(`${this.baseURL}/delete`, {body: {path}} ).pipe(
			catchError(error => {
				console.error('### Rename failed', error);
				return throwError(() => error);
			})
		);
	}


	meta(path: string): Observable<any> {
		const url = `${this.baseURL}/meta`;
		return this.http.post<any>(url, {path}).pipe(
			catchError(error => throwError(() => error))
		);
	}

}

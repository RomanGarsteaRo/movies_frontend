import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AsyncPipe, CommonModule} from "@angular/common";

interface movie {
	id: string,
	path: string,
	size: string
}

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, AsyncPipe, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {

	private baseUrl: string = 'http://localhost:3000/';

	public $list!: Observable<movie[]>;
	public list!: movie[];
	public duplicate!: movie[];
	public rusName!: movie[];
	public movies3d!: movie[];
	public averageSize!: string;

	constructor(private http: HttpClient) {
		let $list = this.getList().subscribe();
		// TODO unsubscribe
	}

	public getList(): Observable<movie[]> {
		const url: string = this.baseUrl;
		return this.http.get<movie[]>(url).pipe(
			map(arr=> arr.sort((a: movie,b: movie) => a.id.localeCompare(b.id))),
			map(arr=> arr.filter(item =>item.id !== '#recycle')),
			tap(arr => this.list = arr),
			tap(arr => this.duplicate = this.getDuplicate(arr)),
			tap(arr => this.rusName = this.getRusName(arr)),
			tap(arr => this.movies3d = this.getMovies3d(arr)),
			tap(arr => this.averageSize = this.getAverageSize(arr)),
			tap(arr => console.log(arr[0])),
		);
	}

	private getDuplicate(arr: movie[]): movie[] {
		// https://flexiple.com/javascript/find-duplicates-javascript-array
		return arr.filter((item, index) => arr.indexOf(item) !== index);
	}

	private getRusName(arr: movie[]): movie[] {
		const russianTitleRegex: RegExp = /[а-яА-ЯЁё]/;
		return arr.filter(movie => russianTitleRegex.test(movie.id));
	}

	private getMovies3d(arr: movie[]): movie[] {
		return arr.filter(item => item.id.indexOf('3D') >= 0);
	}

	public convertBytes(bytes: number): string {
		const sizes: string[] = ["Bytes", "KB", "MB", "GB", "TB"];
		if (bytes == 0) {return "n/a"}

		const i: number = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
		if (i == 0) {
			return bytes + " " + sizes[i];
		} else {
			return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
		}
	}

	private getAverageSize(arr: movie[]) {
		let size: number = 0;
		arr.forEach(item => size += +item.size);
		return this.convertBytes(size/ this.list.length);
	}
}

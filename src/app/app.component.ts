import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MoviesListComponent} from "./pages/movies-list/movies-list.component";
import {UrlBase} from "./services/url/UrlBase";
import {environment} from "../environments/environment";
import {UrlOmdb} from "./services/url/UrlOmdb";


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MoviesListComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{


	ngOnInit() {
		UrlBase.url = environment.baseUrl;
		UrlOmdb.url = environment.omdbUrl
		UrlOmdb.key = environment.omdbKey
	}
}





































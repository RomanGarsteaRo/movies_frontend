import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UrlBase} from "./services/url/UrlBase";
import {environment} from "../environments/environment";
import {UrlOmdb} from "./services/url/UrlOmdb";
import {AsyncPipe} from "@angular/common";
import {AppService} from "./app.service";


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe,],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

	constructor(appService: AppService) {
		appService.init();
	}


	ngOnInit() {
		UrlBase.url = environment.baseUrl;
		UrlOmdb.url = environment.omdbUrl;
		UrlOmdb.key = environment.omdbKey;
	}
}





































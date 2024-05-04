import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MoviesListComponent} from "./pages/movies-list/movies-list.component";


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MoviesListComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{


	ngOnInit() {

	}
}





































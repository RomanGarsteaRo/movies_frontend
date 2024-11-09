import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UrlBase} from "./services/url/UrlBase";
import {environment} from "../environments/environment";
import {UrlOmdb} from "./services/url/UrlOmdb";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import {AppService} from "./app.service";
import {select, Store} from "@ngrx/store";
import {PlexApiSelectors} from "./state/selectors";
import {Observable} from "rxjs";
import {UiFiltersComponent} from "./ui/ui-filters/ui-filters.component";
import {
	trigger,
	state,
	style,
	animate,
	transition,
} from "@angular/animations";


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, NgIf, UiFiltersComponent, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	animations: [
		trigger('myInsertRemoveTrigger', [
			transition(':enter', [
				style({
					opacity: 0,
					width: '0px'
				}),
				animate('200ms',
					style({
						opacity: 1,
						width: '600px'
					}))]),
			transition(':leave', [
				animate('200ms',
					style({
						opacity: 0,
						width: '0px'
					}))]),
		]),
	]
})
export class AppComponent implements OnInit{

	@HostBinding('style')
	styles: 	{ [key: string]: string } = {};
	showFilterPanel$: Observable<boolean>  = this.appService.showFilterPanel$;

	constructor(private appService: AppService,
				private store: Store) {
	}

	ngOnInit() {
		UrlBase.url = environment.baseUrl;
		UrlOmdb.url = environment.omdbUrl;
		UrlOmdb.key = environment.omdbKey;


		this.showFilterPanel$.subscribe((isFilterPanel) => {
			if (isFilterPanel) {
				this.styles = {'grid-template-columns': 'auto min-content',};
			} else {
				this.styles = {};
			}
		});
	}

	onFilter() {
		this.appService.toggleFilterPanel();
	}
}





































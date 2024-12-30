import {Component, HostBinding, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UrlBase} from "./services/url/UrlBase";
import {environment} from "../environments/environment";
import {UrlOmdb} from "./services/url/UrlOmdb";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import {AppService} from "./app.service";
import {Observable} from "rxjs";
import {UiFilterComponent} from "./ui/ui-filter/ui-filter.component";
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
	imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, NgIf, CommonModule, UiFilterComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	animations: [
		trigger('myInsertRemoveTrigger', [
			transition(':enter', [
				style({
					opacity: 0,
					width: '0px'
				}),
				animate('400ms',
					style({
						opacity: 1,
						width: '600px'
					}))]),
			transition(':leave', [
				animate('400ms',
					style({
						opacity: 0,
						width: '0px'
					}))]),
		]),
	]
})
export class AppComponent implements OnInit{

	showFilterPanel$: Observable<boolean>  = this.appService.showFilterPanel$;

	@HostBinding('class.reduced')
	isFilterAnimating: boolean = false; // Controlează vizibilitatea contentului

	constructor(private appService: AppService) {}

	ngOnInit() {
		UrlBase.url = environment.baseUrl;
		UrlOmdb.url = environment.omdbUrl;
		UrlOmdb.key = environment.omdbKey;
	}


	onFilter() {
		this.isFilterAnimating = true; // Blochează modificările până la finalizarea animației
		this.appService.toggleFilterPanel();
	}

	onAnimationDone(event: any) {
		if (event.phaseName === 'done' && event.toState === 'void') {
			this.isFilterAnimating = false; // Deblochează modificările
		}
	}
}





































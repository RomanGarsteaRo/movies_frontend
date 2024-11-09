import {Component, HostBinding, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {IMovie} from "../../state/models/movie.interface";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {EllipsisDirective} from "../../ui/ellipsis.directive";
import {UiPosterComponent} from "../../ui/ui-poster/ui-poster.component";
import {OverlayModule} from "@angular/cdk/overlay";
import {UiFiltersComponent} from "../../ui/ui-filters/ui-filters.component";
import {AppService} from "../../app.service";


/*
Для поиска изображений обложек фильмов в Google, вы можете использовать следующие ключевые слова:
Название фильма + DVD cover (например, "Inception DVD cover")
Название фильма + Blu-ray cover (например, "The Matrix Blu-ray cover")
Название фильма + movie poster (например, "Titanic movie poster")
Название фильма + cover art (например, "Avatar cover art")
Название фильма + film cover (например, "Gladiator film cover")
*/


@Component({
	selector: 'app-view-poster',
	standalone: true,
	imports: [
		AsyncPipe,
		NgIf,
		NgForOf,
		SlicePipe,
		EllipsisDirective,
		UiPosterComponent,
		UiFiltersComponent,
		OverlayModule,
	],
	templateUrl: './view-poster.component.html',
	styleUrl: './view-poster.component.scss'
})
export class ViewPosterComponent {

	movies$: 	Observable<IMovie[]> = this.store.pipe(select(MoviesSelectors.movies));

	constructor( private store: Store,
	) {}

}

















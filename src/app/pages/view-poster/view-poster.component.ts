import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {EllipsisDirective} from "../../ui/ellipsis.directive";
import {UiPosterComponent} from "../../ui/ui-poster/ui-poster.component";
import {OverlayModule} from "@angular/cdk/overlay";
import {UiFilterComponent} from "../../ui/ui-filter/ui-filter.component";
import {IMovie} from "../../services/movie/movie.interface";


/*

key google search
DVD cover, Blu-ray cover "The Matrix Blu-ray cover", movie poster "Titanic movie poster"
cover art "Avatar cover art", film cover "Gladiator film cover"

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
		UiFilterComponent,
		OverlayModule,
	],
	templateUrl: './view-poster.component.html',
	styleUrl: './view-poster.component.scss'
})
export class ViewPosterComponent {

	movies$: Observable<IMovie[]> = this.store.pipe(select(MoviesSelectors.movies));

	constructor( private store: Store,
	) {}

}

















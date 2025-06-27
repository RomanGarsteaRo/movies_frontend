import {ChangeDetectionStrategy, Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {UiPosterComponent} from "../../ui/ui-poster/ui-poster.component";
import {OverlayModule} from "@angular/cdk/overlay";
import {IMovie} from "../../services/movie/movie.interface";
import {trackById} from "../../utils/trackby.utils";


/*

key google search
DVD cover, Blu-ray cover "The Matrix Blu-ray cover", movie poster "Titanic movie poster"
cover art "Avatar cover art", film cover "Gladiator film cover"

*/


@Component({
	selector: 'app-view-poster',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		AsyncPipe,
		NgIf,
		NgForOf,
		UiPosterComponent,
		OverlayModule,
	],
	templateUrl: './view-poster.component.html',
	styleUrl: './view-poster.component.scss'
})
export class ViewPosterComponent {

	movies$: Observable<IMovie[]> = this.store.pipe(select(MoviesSelectors.movies));
	protected readonly trackById = trackById;

	constructor( private store: Store) {}

}

















import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {IMovie} from "../../state/models/movie.interface";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf, SlicePipe} from "@angular/common";
import {EllipsisDirective} from "../../ui/ellipsis.directive";
import {Router} from "@angular/router";


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
		EllipsisDirective
	],
	templateUrl: './view-poster.component.html',
	styleUrl: './view-poster.component.scss'
})
export class ViewPosterComponent {

	movies$: Observable<IMovie[]>

	constructor( private store: Store,
				 private route: Router,
	) {
		this.movies$ = this.store.pipe(select(MoviesSelectors.movies));
	}


	getUrl(movie: IMovie) {
		// a  https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=
		// b  encodeURIComponent('/library/metadata/7659/thumb/1727681568')   ----->    %2Flibrary%2Fmetadata%2F7659%2Fthumb%2F1727681568
		// c  %3FX-Plex-Token%3Deksa9m1AycUfJoXR2zGk&X-Plex-Token=eksa9m1AycUfJoXR2zGk

		let a: string = 'https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=';
		let b: string;
		let c: string = '%3FX-Plex-Token%3Deksa9m1AycUfJoXR2zGk&X-Plex-Token=eksa9m1AycUfJoXR2zGk';
		if (typeof(movie?.plex?.thumb) === "string") {
			b = encodeURIComponent(movie.plex.thumb);
			return movie.omdb?.Poster || a + b + c || '';
		} else {
			return movie.omdb?.Poster || "";
		}
	}

	openMovieDetails(movie: IMovie) {
		// this.route.navigate(['/player', movie.omdb?.imdbID || 'NoImdbId'], { state: { movie }});
	}
}

















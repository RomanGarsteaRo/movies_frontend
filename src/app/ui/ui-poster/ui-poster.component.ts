import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {EllipsisDirective} from "../ellipsis.directive";
import {AsyncPipe, NgIf} from "@angular/common";
import {IMovie} from "../../services/movie/movie.interface";
import {Store} from "@ngrx/store";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {filter, Observable} from "rxjs";


@Component({
	selector: 'ui-poster',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		EllipsisDirective,
		NgIf,
		AsyncPipe,
	],
	templateUrl: './ui-poster.component.html',
	styleUrl: './ui-poster.component.scss'
})
export class UiPosterComponent implements OnInit {

	@Input() movieId!: string;

	public plexImageError: boolean = false;
	public omdbImageError: boolean = false;
	public movie$!: Observable<IMovie>;


	constructor(private store: Store) {
	}

	ngOnInit() {
		this.movie$ = this.store.select(MoviesSelectors.selectMovieById(this.movieId)).pipe(filter((m): m is IMovie => m !== undefined));
	}


	// TODO need hardcoded url for fast loading
	// optimizezi imaginile (e.g., loading="lazy", ngSrc în loc de src când Angular 19+)
	public getPlexImageUrl(movie: IMovie) {

		// Cum obtin acest linc? Copii un get de imagine din plex.
		// a  https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=
		// b  encodeURIComponent('/library/metadata/7659/thumb/1727681568')   ----->    %2Flibrary%2Fmetadata%2F7659%2Fthumb%2F1727681568
		// c  %3FX-Plex-Token%3Deksa9m1AycUfJoXR2zGk&X-Plex-Token=eksa9m1AycUfJoXR2zGk

		let prefix: string = 'https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=';
		let thumb:  string = encodeURIComponent(movie?.plex?.thumb || '');
		let tocken: string = '%3FX-Plex-Token%3D7JUGfzsLZmGo1xeNN32s&X-Plex-Token=7JUGfzsLZmGo1xeNN32s';

		if (thumb !== '') {
			return prefix + thumb + tocken;
		} else {
			return movie.omdb?.Poster || '';
		}
	}

	public getOmdbImageUrl(movie: IMovie) {
		if (typeof (movie.omdb?.Poster) === "string") {
			return movie.omdb?.Poster || "";
		} else {
			return "";
		}
	}

	onImageError($event: ErrorEvent, where: "omdb" | "plex") {
		const target = $event.target as HTMLImageElement;
		if (where === "omdb") {
			this.omdbImageError = true;
		}

		if (where === "plex") {
			this.plexImageError = true;
		}

		if (this.omdbImageError && this.plexImageError) {
			// TODO Fallback image
			// target.src = 'https://m.media-amazon.com/images/M/MV5BMTA0MjA5MjM3NDFeQTJeQWpwZ15BbWU4MDMxODU4ODkx._V1_SX300.jpg';
		}
	}

	openMovieDetails(movie: IMovie) {
		// this.route.navigate(['/player', movie.omdb?.imdbID || 'NoImdbId'], { state: { movie }});
	}
}































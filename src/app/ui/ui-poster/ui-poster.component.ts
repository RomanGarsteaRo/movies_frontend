import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {EllipsisDirective} from "../ellipsis.directive";
import {NgForOf, NgIf, NgOptimizedImage, SlicePipe} from "@angular/common";
import {Router} from "@angular/router";
import {IMovie} from "../../services/movie/movie.interface";
import {UiFilterService} from "../ui-filter/ui-filter.service";
import {IFilterCng} from "../ui-filter/ui-filter.class";
import {FilterEvaluatorService} from "../../services/filter-evaluator.service";



@Component({
  selector: 'ui-poster',
  standalone: true,
	imports: [
		EllipsisDirective,
		NgForOf,
		NgIf,
		SlicePipe,
		NgOptimizedImage
	],
  templateUrl: './ui-poster.component.html',
  styleUrl: './ui-poster.component.scss'
})
export class UiPosterComponent implements OnInit {

	public plexImageError: boolean = false;
	public omdbImageError: boolean = false;

	@Input() movie!: IMovie;
	@HostBinding('style') visibility: {} | { display: string } = {};

	constructor( private route: Router,
				 private filter: UiFilterService,
				 private filterEvaluator: FilterEvaluatorService,
	) {}

	ngOnInit(){
		this.filter.filter_chng$.subscribe((param: IFilterCng) => {
			if (this.movie.title === "1917") {
				console.log('ui-poster.component | title: "1917" | filter_chng$.subscribe | param:', param);
			}
			this.setVisibility(param);
		});
	}

	private setVisibility(param: IFilterCng) {
		const isVisible = this.filterEvaluator.evaluate(param, this.movie);
		this.visibility = isVisible ? {} : { display: "none" };
	}

	// TODO need hardcoded url for fas loading
	public getPlexImageUrl(movie: IMovie) {

		// Cum obtin acest linc? Copii un get de imagine din plex.
		// a  https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=
		// b  encodeURIComponent('/library/metadata/7659/thumb/1727681568')   ----->    %2Flibrary%2Fmetadata%2F7659%2Fthumb%2F1727681568
		// c  %3FX-Plex-Token%3Deksa9m1AycUfJoXR2zGk&X-Plex-Token=eksa9m1AycUfJoXR2zGk

		let a: string = 'https://10-0-0-145.b235164b334f4933bace62d0694b3418.plex.direct:32400/photo/:/transcode?width=240&height=360&minSize=1&upscale=1&url=';
		let b: string;
		let c: string = '%3FX-Plex-Token%3D7JUGfzsLZmGo1xeNN32s&X-Plex-Token=7JUGfzsLZmGo1xeNN32s';
		if (typeof(movie?.plex?.thumb) === "string") {
			b = encodeURIComponent(movie.plex.thumb);
			return a + b + c || '';
		} else {
			return movie.omdb?.Poster || "";
		}
	}

	public getOmdbImageUrl(movie: IMovie) {
		if ( typeof(movie.omdb?.Poster) === "string") {
			return movie.omdb?.Poster || "";
		} else {
			return "";
		}
	}

	onImageError($event: ErrorEvent, where: "omdb" | "plex") {
		const target = $event.target as HTMLImageElement;
		if(where === "omdb") {
			this.omdbImageError = true;
		}

		if(where === "plex") {
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































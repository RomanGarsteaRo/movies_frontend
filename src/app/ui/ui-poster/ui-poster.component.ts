import {Component, HostBinding, Input} from '@angular/core';
import {EllipsisDirective} from "../ellipsis.directive";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import {Router} from "@angular/router";
import {IMovie} from "../../services/movie/movie.interface";
import {UiFilterService} from "../ui-filter/ui-filter.service";
import {IFilterCng} from "../ui-filter/ui-filter.class";



@Component({
  selector: 'ui-poster',
  standalone: true,
	imports: [
		EllipsisDirective,
		NgForOf,
		NgIf,
		SlicePipe
	],
  templateUrl: './ui-poster.component.html',
  styleUrl: './ui-poster.component.scss'
})
export class UiPosterComponent {

	@Input() movie!: IMovie;
	@HostBinding('style') visibility: { [key: string]: string } = {};

	constructor( private route: Router,
				 private filter: UiFilterService
	) {
		this.filter.filter_chng$.subscribe((param: IFilterCng) => this.setVisibility(param));
	}

	private setVisibility(param: IFilterCng) {

		if (param.year?.min && param.year?.max) {
			let show: boolean = this.movie.year >= param.year?.min && this.movie.year <= param.year?.max;
			if(show){
				this.visibility = {};
			}else{
				this.visibility = { display: "none" };
			}
		}

	}



	// TODO trebuie hardcodate adresele url pentru a mari viteza de incarcare
	public getImageUrl(movie: IMovie) {
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

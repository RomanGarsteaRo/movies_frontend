
/*  ..................................................

	Sunt utile functiile in contextul *ngFor pentru a evita renderingul
	inutil a componentelor in caz de schimbare a ordinei sau datelor.

	<ui-poster *ngFor="let movie of movies; trackBy: trackById"></ui-poster>

	import { trackByMovieKey } from 'src/app/utils/trackby.utils';
	trackByMovie = trackByMovieKey; // folosit în template

    .................................................. */


// 1. TrackBy după index (fallback) daca ordinea elementelor nu se schimba
export function trackByIndex(index: number, _: any): number {
	return index;
}

// 2. TrackBy după ID (dacă este un câmp .id stabil) si ordinea se schimba
export function trackById<T extends { id: string | number }>(
	index: number,
	item: T
): string | number {
	return item.id;
}

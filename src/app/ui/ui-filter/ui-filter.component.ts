import {Component} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {UiButtonToggleComponent} from "../ui-button-toggle/ui-button-toggle.component";
import {
	CdkDrag,
	CdkDragDrop,
	CdkDropList, CdkDropListGroup,
	moveItemInArray,
	transferArrayItem
} from "@angular/cdk/drag-drop";
import {AppService} from "../../app.service";
import {BehaviorSubject} from "rxjs";
import {UiFilterService} from "./ui-filter.service";
import {Genre} from "./ui-filter.class";


@Component({
	selector: 'ui-filters',
	standalone: true,
	imports: [
		NgForOf,
		UiButtonToggleComponent,
		CdkDropList, CdkDrag, CdkDropListGroup,
		CommonModule,
	],
	templateUrl: './ui-filter.component.html',
	styleUrl: './ui-filter.component.scss',
})
export class UiFilterComponent {

	public genres_list$: BehaviorSubject<Genre[]> = this.filterService.genres_list$;

	constructor(private appService: AppService,
				private filterService: UiFilterService,
	) {
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex,
			);
		}
	}

	genreChanged(genre: {title: string, state: boolean}) {
		this.filterService.updateMoviesByGenre(genre);
	}
}

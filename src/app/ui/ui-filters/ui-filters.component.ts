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
import {FilterService} from "../../services/filter.service";


@Component({
	selector: 'ui-filters',
	standalone: true,
	imports: [
		NgForOf,
		UiButtonToggleComponent,
		CdkDropList, CdkDrag, CdkDropListGroup,
		CommonModule,
	],
	templateUrl: './ui-filters.component.html',
	styleUrl: './ui-filters.component.scss',
})
export class UiFiltersComponent {

	public genres$= this.filterService.genres$;

	constructor(private appService: AppService,
				private filterService: FilterService,
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

	genreChanged(genre: {value: string, state: boolean}) {
		this.filterService.updateMoviesByGenre(genre);
	}
}

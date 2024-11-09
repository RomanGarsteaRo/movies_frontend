import {Component} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {UiButtonToggleComponent} from "../ui-button-toggle/ui-button-toggle.component";
import {
	CdkDrag,
	CdkDragDrop,
	CdkDropList, CdkDropListGroup,
	DragDropModule,
	moveItemInArray,
	transferArrayItem
} from "@angular/cdk/drag-drop";


/*
"Action",
"Adventure",
"Animated",
"Comedy",
"Drama",
"Fantasy",
"Historical",
"Horror",
"Musical",
"Noir",
"Romance",
"Science fiction",
"Thriller",
"Western",
"Post-apocalyptic",
"Family",
"Mystery"
**/

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

	public genres: string[] = [
		"Action",
		"Adventure",
		"Animated",
		"Comedy",
		"Drama",
		"Fantasy",
		"Family",
		"Historical",
		"Horror",
		"Musical",
		"Mystery",
		"Noir",
		"Post-apocalyptic",
		"Romance",
		"Science fiction",
		"Thriller",
		"Western"
	];

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

}

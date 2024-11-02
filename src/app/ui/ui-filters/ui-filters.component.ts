import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
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
	],
	templateUrl: './ui-filters.component.html',
	styleUrl: './ui-filters.component.scss'
})
export class UiFiltersComponent {

	public groups: { title: string, items: string[] }[] = [
		{
			title: "Testosterone",
			items: [
				"Action",
				"Adventure",

			]
		},
		{
			title: "Hi-Tech",
			items: [
				"Science fiction",
				"Post-apocalyptic",
			]
		},
		{
			title: "Family",
			items: [
				"Family",
				"Animated",
				"Comedy",
				"Musical",
			]
		},
		{
			title: "Light",
			items: [
				"Thriller",
				"Western",
			]
		},
		{
			title: "Dark",
			items: [
				"Noir",
				"Horror",
				"Mystery",
			]
		},
		{
			title: "Historical",
			items: [
				"Fantasy",
				"Historical",
			]
		},
		{
			title: "Estrogen",
			items: [
				"Romance",
				"Drama",
			]
		}
	]

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

	dropGroup(event: CdkDragDrop<{ title: string, items: string[] }[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
		}
	}

}

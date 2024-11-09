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
import {AppService} from "../../app.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";


/*   GENRES   *************************************************

	--------					|	-----------
	| IMDB |					|	| MyGenre |
	--------					|	-----------
								|
	01. "Action",				|	01. "Post-apocalyptic",
	02. "Adventure",			|
	03. "Animation",			|
	04. "Biography"				|
	05. "Comedy",				|
	06. "Crime"					|
	07. "Documentary"			|
	08. "Drama",				|
	09. "Family",				|
	10. "Fantasy",				|
	11. "Film-Noir"				|
	12. "Game-Show"				|
	13. "History",				|
	14. "Horror",				|
	15. "Music",				|
	16. "Musical"				|
	17. "Mystery"				|
	18. "New"					|
	19. "Reality-TV"			|
	21. "Romance",				|
	22. "Sci-Fi",				|
	23. "Short"					|
	24. "Sport"					|
	25. "Talk-Show"				|
	26. "Thriller",				|
	27. "War"					|
	28. "Western",				|

******************************************************/

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

	public genres$= this.appService.genres$;

	constructor(private appService: AppService,
				private store: Store,
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

	genreChanged(ev: {value: string, state: boolean}) {
		console.log(ev);
	}
}

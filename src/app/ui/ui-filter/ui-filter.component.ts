import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {UiButtonToggleComponent} from "../ui-button-toggle/ui-button-toggle.component";
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {AppService} from "../../app.service";
import {UiFilterService} from "./ui-filter.service";
import {BehaviorSubject, filter} from "rxjs";
import {FilterCngClass, FilterRangeClass, IFilter, IFilterCng} from "./ui-filter.class";
import {SetToArrayPipe} from "../pipe/set-to-array.pipe";
import {MatSliderModule} from "@angular/material/slider";
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {UiRangeComponent} from "../ui-range/ui-range.component";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";



@Component({
	selector: 'ui-filters',
	standalone: true,
	imports: [
		NgForOf,
		UiButtonToggleComponent,
		CdkDropList, CdkDrag, CdkDropListGroup,
		CommonModule,
		SetToArrayPipe,
		MatSliderModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, UiRangeComponent,
	],
	templateUrl: './ui-filter.component.html',
	styleUrl: './ui-filter.component.scss',
})
export class UiFilterComponent implements OnInit {

	public form: FormGroup;
	public param_init$: BehaviorSubject<IFilter>    = this.filterService.filter_init$;
	public param_chng$: BehaviorSubject<IFilterCng> = this.filterService.filter_chng$;

	constructor(private appService: AppService,
				private filterService: UiFilterService,
				private fb: FormBuilder
	) {
		this.form = this.fb.group({
			year: new FormControl({min: 0, max: 100}),
			rott: new FormControl({min: 0, max: 100}),
			meta: new FormControl({min: 0, max: 100}),
			imdb: new FormControl({min: 0, max: 100}),
			vots: new FormControl({min: 0, max: 100}),

			genre: new FormControl([]),
			actor: new FormControl([]),
			writr: new FormControl([]),
			drctr: new FormControl([]),
		});
	}

	ngOnInit(): void {
		/* Param -> init form */
		this.param_init$
			.pipe(filter(param=> param?.year?.min !== +Infinity && !!param?.year))
			.subscribe(param => {
			this.initForm(param)
		});
	}



	private initForm(param: IFilter): void{
		this.form.setValue({
			year: param.year || { min: 1900, max: 2025 },
			rott: param.rott || { min: 70, max: 100 },
			meta: param.meta || { min: 70, max: 100 },
			imdb: param.imdb || { min: 7, max: 10 },
			vots: param.vots || { min: 500, max: 5000 },

			genre: param.genre || [],
			actor: param.actor || [],
			writr: param.writr || [],
			drctr: param.drctr || [],
		});

		/* Form change -> param change */
		this.form.valueChanges.subscribe(value => this.updateFilterCng(value));
	}

	private updateFilterCng(value: any): void{
		// console.log('asssss', value);
		this.param_chng$.next(new FilterCngClass(value));
	}






















	// drop(event: CdkDragDrop<string[]>) {
	// 	if (event.previousContainer === event.container) {
	// 		moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
	// 	} else {
	// 		transferArrayItem(
	// 			event.previousContainer.data,
	// 			event.container.data,
	// 			event.previousIndex,
	// 			event.currentIndex,
	// 		);
	// 	}
	// }
	//
	// genreChanged(genre: {title: string, state: boolean}) {
	// 	// this.filterService.updateMoviesByGenre(genre);
	// }
}

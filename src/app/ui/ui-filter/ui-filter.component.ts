import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FilterStateService} from "../../services/filter/filter-state.service";
import {BehaviorSubject, debounceTime, filter} from "rxjs";
import {FilterCngClass, IFilter, IFilterCng} from "../../services/filter/filter.class";
import {SetToArrayPipe} from "../pipe/set-to-array.pipe";
import {MatSliderModule} from "@angular/material/slider";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {UiRangeComponent} from "../ui-range/ui-range.component";
import {UiButtonListComponent} from "../ui-button-list/ui-button-list.component";



@Component({
	selector: 'ui-filters',
	standalone: true,
	imports: [
		CommonModule,
		SetToArrayPipe,
		MatSliderModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, UiRangeComponent, UiButtonListComponent,
	],
	templateUrl: './ui-filter.component.html',
	styleUrl: './ui-filter.component.scss',
})
export class UiFilterComponent implements OnInit {


	public        form: FormGroup;
	public  param_init: IFilter | null 			    = null;
	public param_chng$: BehaviorSubject<IFilterCng> = this.filterService.filter_chng$;



	constructor(private filterService: FilterStateService,
				private fb: FormBuilder
	) {
		this.form = this.fb.group({
			year: new FormControl(null),
			rott: new FormControl(null),
			meta: new FormControl(null),
			imdb: new FormControl(null),
			vots: new FormControl(null),

			genre: new FormControl(null),
			actor: new FormControl(null),
			writr: new FormControl(null),
			drctr: new FormControl(null),
		});
	}



	ngOnInit(): void {
	/*  .......................
		Get init params.
		Not changed.
		For Init and Reset.
		.......................   */
		this.filterService.filter_init$
			.pipe(filter(param => param !== null))
			.subscribe((param: IFilter) => {
				this.param_init = {...param};
				console.log("CMP..  ngOnInit(sub(filter_init$))  |  ngOnInit( subscribe(filter_init$) )                    |  param: ", param);
		});

		this.initForm();
	}



	private initForm(): void{

		this.form.setValue({
			year: null,
			rott: null,
			meta: null,
			imdb: null,
			vots: null,

			genre: null,
			actor: null,
			writr: null,
			drctr: null,
		});

	/*  ..............................
		Form change  ->  Param change
		..............................  */
		this.form.valueChanges.pipe(debounceTime(200)).subscribe(value => this.updateFilterCng(value));

		console.log("CMP..  initForm( FormChange to ParamChng$))");
		console.log("........................................................................");
	}



	private updateFilterCng(value: any): void{
		console.log("CMP..  ParamChng$.next()  																	  |  value: ", value);
		this.param_chng$.next(new FilterCngClass(value));
	}

}

import {Component, forwardRef, Input, Output} from '@angular/core';
import {IButtonToggle, UiButtonToggleComponent} from "../ui-button-toggle/ui-button-toggle.component";
import {NgForOf} from "@angular/common";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  	selector: 'ui-button-list',
  	standalone: true,
		imports: [
			UiButtonToggleComponent,
			NgForOf
		],
  	templateUrl: './ui-button-list.component.html',
  	styleUrl: './ui-button-list.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UiButtonListComponent),
			multi: true
		}
	],
})
export class UiButtonListComponent  implements ControlValueAccessor {

	@Input()  items:    string[] = [];
	@Output() selected: string[] = [];

	constructor() {}



	/*  ........................................
	IMPLIMENT INTERFACE ControlValueAccessor
	........................................  */

	private onChange: any = () => {};
	private onTouched: any = () => {};

	/* EXTERN (Form model) -> INTERN (TS) */
	public writeValue(list: string[]): void {
		if (list) {
			this.items = [...list];
		}
	}

	/* INTERN (HTML or TS) -> EXTERN (Form Model) */
	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	/* INTERN HTML -> INTERN var and EXTERN Form Model */
	updateValue(newValue: IButtonToggle): void {
		/* update intern variable */
		if (newValue.state) {
			this.selected.push(newValue.title)
		} else {
			this.selected = this.selected.filter(title => title !== newValue.title);
		}

		/* update extern form  */
		this.onChange(this.selected);
	}

}

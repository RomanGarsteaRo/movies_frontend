import {Component, forwardRef, Input} from '@angular/core';
import {MatSlider, MatSliderRangeThumb} from "@angular/material/slider";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {IFilterRange} from "../ui-filter/ui-filter.class";
import {NgIf} from "@angular/common";

@Component({
	selector: 'ui-range',
	standalone: true,
	imports: [
		MatSlider,
		MatSliderRangeThumb,
		NgIf
	],
	templateUrl: './ui-range.component.html',
	styleUrl: './ui-range.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UiRangeComponent),
			multi: true
		}
	],
})
export class UiRangeComponent implements ControlValueAccessor {

	@Input() rangeSlider: IFilterRange | undefined;
	@Input() rangeThumb:  IFilterRange | undefined;

	constructor() {
	}


/*  ........................................
	IMPLIMENT INTERFACE ControlValueAccessor
	........................................  */

	private onChange: any = () => {};
	private onTouched: any = () => {};

	// EXTERN (Form model) -> INTERN (TS)
	public writeValue(obj: IFilterRange): void {
		// console.log('Form Model -> TS', obj);
		if (obj) {
			this.rangeThumb = {...obj};
		}
	}

	// INTERN (HTML or TS) -> EXTERN (Form Model)
	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	updateValue(newValue: number, type: 'min' | 'max'): void {
		if (this.rangeThumb) {
			this.rangeThumb = { ...this.rangeThumb, [type]: +newValue };
			this.onChange(this.rangeThumb);
		}
	}



}

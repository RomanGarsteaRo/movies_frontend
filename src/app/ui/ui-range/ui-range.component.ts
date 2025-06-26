import {Component, forwardRef, Input} from '@angular/core';
import {MatSlider, MatSliderDragEvent, MatSliderRangeThumb} from "@angular/material/slider";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FilterRangeClass, IFilterRange} from "../../services/filter/filter.class";
import {NgIf} from "@angular/common";
import {MatCheckbox, MatCheckboxChange} from "@angular/material/checkbox";

@Component({
	selector: 'ui-range',
	standalone: true,
	imports: [
		MatSlider,
		MatSliderRangeThumb,
		NgIf,
		MatCheckbox
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
	@Input() step: number = 1;
	@Input() showCheckbox: boolean = true;

	private sliderMode: "single" | "range" = "range";

	constructor() {
	}

	onCheckbox($event: MatCheckboxChange) {
		if ($event.checked) {
			this.sliderMode = "single";
		} else {
			this.sliderMode = "range";
		}
	}

/*  ........................................
	IMPLIMENT INTERFACE ControlValueAccessor
	........................................  */

	private onChange: any = () => {};
	private onTouched: any = () => {};

	// EXTERN (Form model) -> INTERN (TS)
	public writeValue(obj: IFilterRange): void {
		// console.log('Form Model -> TS', obj);
		// if (obj) {
		// 	this.rangeThumb = {...obj};
		// }
	}

	// INTERN (HTML or TS) -> EXTERN (Form Model)
	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	updateValue(event: MatSliderDragEvent, type: 'min' | 'max'): void {
		if (this.rangeThumb) {
			this.rangeThumb = { ...this.rangeThumb, [type]: +event.value };
		}

		if (this.sliderMode === "range") {
			this.onChange(this.rangeThumb);
		} else {
			let range: IFilterRange = new FilterRangeClass();
			range.min = +event.value;
			range.max = +event.value;
			this.onChange(range);
		}
	}

}

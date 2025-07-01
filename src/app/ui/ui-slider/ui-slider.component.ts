import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDrag, CdkDragMove, CdkDragStart} from "@angular/cdk/drag-drop";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DecimalPipe, NgStyle} from "@angular/common";

@Component({
	selector: 'ui-slider',
	standalone: true,
	imports: [
		CdkDrag,
		ReactiveFormsModule,
		NgStyle,
		DecimalPipe
	],
	templateUrl: './ui-slider.component.html',
	styleUrl: './ui-slider.component.scss'
})
export class UiSliderComponent implements AfterViewInit{

	@ViewChild('sliderBox', { static: true }) sliderBox!: ElementRef;
	@ViewChild('thumbMin', { static: true }) thumbMin!: ElementRef;
	@ViewChild('thumbMax', { static: true }) thumbMax!: ElementRef;

	private minYear: number = 1959;
	private maxYear: number = 2025;

	private initMinYear: number = 1980;
	private initMaxYear: number = 2015;

	private distanceYear: number = 66;
	private distancePx	: number = 336;
	private offset		: number = 12;
	private dragStartX	: number = 0;

	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			min: [this.initMinYear],
			max: [this.initMaxYear]
		});
	}

	ngAfterViewInit() {
		this.setThumbPosition('min');
		this.setThumbPosition('max');
	}



	/*	Line between thumb
	 ............................................................*/

	public getLineLeft(): number {
		const minValue: number = this.form.controls['min'].value;
		const percent: 	number =  ((minValue - this.minYear) / this.distanceYear);
		return percent * this.distancePx + this.offset;
	}
	public getLineWidth(): number {
		const minValue: number = this.form.controls['min'].value;
		const maxValue: number = this.form.controls['max'].value;
		const percent: 	number =  ((maxValue - minValue) / this.distanceYear);
		return percent * this.distancePx;
	}
	public onLineDragStart(event: CdkDragStart<any>) {
		this.dragStartX = event.source.getFreeDragPosition().x;
	}

	// TODO
	onLineMoved(event: CdkDragMove<any>) {
		const boxWidth = this.sliderBox.nativeElement.getBoundingClientRect().width;
		const deltaPx = event.pointerPosition.x - this.dragStartX;

		// Transformăm delta în ani
		const deltaYears = Math.round((deltaPx / this.distancePx) * this.distanceYear);

		const oldMin = this.form.controls['min'].value;
		const oldMax = this.form.controls['max'].value;

		let newMin = oldMin + deltaYears;
		let newMax = oldMax + deltaYears;

		// Clamp în intervalul global
		if (newMin < this.minYear) {
			const diff = this.minYear - newMin;
			newMin += diff;
			newMax += diff;
		} else if (newMax > this.maxYear) {
			const diff = newMax - this.maxYear;
			newMin -= diff;
			newMax -= diff;
		}

		this.form.controls['min'].setValue(newMin, { emitEvent: false });
		this.form.controls['max'].setValue(newMax, { emitEvent: false });
	}




	/*	Thumb
	 ............................................................*/

	setThumbPosition(type: 'min' | 'max') {
		const thumbEl = type === 'min' ? this.thumbMin.nativeElement : this.thumbMax.nativeElement;
		const left = this.getThumbLeft(type);
		thumbEl.style.transform = `translateX(${left}px)`;
	}

	getThumbLeft(type: 'min' | 'max'): number {
		const value: number = type === 'min' ? this.form.controls['min'].value : this.form.controls['max'].value;
		const percent: 	number =  ((value - this.minYear) / this.distanceYear);
		return percent * this.distancePx;
	}

	public onMoved($event: CdkDragMove<any>, type: 'min' | 'max') {

		const boxEl = this.sliderBox.nativeElement as HTMLElement;
		const boxRect: DOMRect = boxEl.getBoundingClientRect();
		const boxWidth: number = boxRect.width;

		const thumbEl = (type === 'min' ? this.thumbMin : this.thumbMax).nativeElement as HTMLElement;
		const thumbRect: DOMRect = thumbEl.getBoundingClientRect();
		const thumbWidth: number = thumbRect.width;

		const minYear = 1959;
		const maxYear = 2025;

		const totalDistance_years: number = maxYear - minYear;
		const totalDistance_px   : number = boxWidth - thumbWidth;

		const initialThumbCenterX: number = boxRect.left + thumbWidth / 2;
		const currentThumbCenterX: number = thumbRect.left + thumbWidth / 2;
		const offset			 : number = currentThumbCenterX - $event.pointerPosition.x;
		const draggedDistance_px : number = $event.pointerPosition.x - initialThumbCenterX + offset;

		const percent = draggedDistance_px  / totalDistance_px;
		let year = Math.round((percent * totalDistance_years) + minYear);

		// Prevent overlap. Keep min range 1 year
		if (type === 'min') {
			const maxValue = this.form.controls['max'].value;
			year = Math.min(year, maxValue - 1);
		} else {
			const minValue = this.form.controls['min'].value;
			year = Math.max(year, minValue + 1);
		}

		console.log(`Poziție: ${draggedDistance_px}px -> An: ${year}`);
		this.form.controls[type].setValue(year, { emitEvent: false });
	}

}

import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef, OnInit,
	ViewChild
} from '@angular/core';
import {CdkDrag, CdkDragMove, CdkDragStart} from "@angular/cdk/drag-drop";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NgStyle} from "@angular/common";
import {DraggableDirective} from "../../directives/draggable.directive";

@Component({
	selector: 'ui-slider',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CdkDrag,
		ReactiveFormsModule,
		NgStyle,
		DraggableDirective,
	],
	templateUrl: './ui-slider.component.html',
	styleUrl: './ui-slider.component.scss'
})
export class UiSliderComponent implements AfterViewInit, OnInit{

	@ViewChild('sliderBox', { static: true }) sliderBox!: ElementRef;
	@ViewChild('thumbMin',  { static: true }) thumbMin!:  ElementRef;
	@ViewChild('thumbMax',  { static: true }) thumbMax!:  ElementRef;

	private minYear: number = 1959;
	private maxYear: number = 2025;

	private initMinYear: number = 1980;
	private initMaxYear: number = 2015;

	private distanceYear: number =  66;
	private distancePx	: number = 336;
	private offset		: number =  12;
	private dragStartX	: number =   0;

	thumbMinPositionOverride = { x: 0, y: 0 };
	thumbMaxPositionOverride = { x: 0, y: 0 };

	form: FormGroup;

	constructor(private fb: FormBuilder,
				private cdr: ChangeDetectorRef,
	) {
		this.form = this.fb.group({
			min: [this.initMinYear],
			max: [this.initMaxYear]
		});
	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		// Init Thumbs positions
		this.thumbMinPositionOverride = { x: this.getThumbLeft('min'), y: 0 };
		this.thumbMaxPositionOverride = { x: this.getThumbLeft('max'), y: 0 };

		this.initConstants();

		this.cdr.detectChanges();
	}

	private initConstants() {
		this.distanceYear = (this.maxYear - this.minYear);
		this.distancePx	= this.sliderBox.nativeElement.getBoundingClientRect().width;
	}


	/*	Thumb
	 ............................................................*/

	onThumbDrag($event: number, type: 'min' | 'max') {
		console.log($event);
	}

	public onMoved($event: CdkDragMove<any>, type: 'min' | 'max') {

		const draggedDistancePercent = this.getDraggedDistance_pct($event, type);
		let year = Math.round((draggedDistancePercent * this.distanceYear) + this.minYear);

		//	Prevent overlap. Keep min range 1 year.
		// if (type === 'min') {
		// 	const maxValue = this.form.controls['max'].value;
		// 	year = Math.min(year, maxValue - 1);
		// } else {
		// 	const minValue = this.form.controls['min'].value;
		// 	year = Math.max(year, minValue + 1);
		// }

		if (type === 'min') {
			const maxYearAllowed = this.form.controls['max'].value - 1;
			if (year >= maxYearAllowed) {
				this.thumbMinPositionOverride = { x: this.getThumbLeftValue(maxYearAllowed), y: 0 };
				// this.cdr.detectChanges();
				return;
			} else {
				year = Math.min(year, maxYearAllowed);
			}

		} else {
			const minYearAllowed = this.form.controls['min'].value + 1;
			if (year <= minYearAllowed) {
				this.thumbMaxPositionOverride = { x: this.getThumbLeftValue(minYearAllowed), y: 0 };
				// this.cdr.detectChanges();
				return;
			} else {
				year = Math.max(year, minYearAllowed);
			}

		}

		// console.log(`Poziție: ${draggedDistance_px}px -> An: ${year}`);
		this.form.controls[type].setValue(year, { emitEvent: false });
	}

	private getThumbLeftValue(year: number): number {
		const percent = (year - this.minYear) / this.distanceYear;
		return percent * this.distancePx;
	}

	public getThumbLeft(type: 'min' | 'max'): number {
		const value = this.form.controls[type].value;
		const percent: 	number =  ((value - this.minYear) / this.distanceYear);
		return percent * this.distancePx;
	}

	// Calculate dragged distance in percent ->  0 between 1
	private getDraggedDistance_pct($event: CdkDragMove<any>, type: 'min' | 'max'): number {

		const boxEl = this.sliderBox.nativeElement as HTMLElement;
		const boxRect: DOMRect = boxEl.getBoundingClientRect();

		const thumbEl = (type === 'min' ? this.thumbMin : this.thumbMax).nativeElement as HTMLElement;
		const thumbRect: DOMRect = thumbEl.getBoundingClientRect();

		const initialThumbCenterX: number = boxRect.left + thumbRect.width / 2;
		const currentThumbCenterX: number = thumbRect.left + thumbRect.width / 2;
		const offset			 : number = currentThumbCenterX - $event.pointerPosition.x;
		const draggedDistance_px : number = $event.pointerPosition.x - initialThumbCenterX + offset;
		return draggedDistance_px  / this.distancePx;
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
		console.log(event);
		this.dragStartX = event.source.getFreeDragPosition().x;
	}

	// TODO
	onLineMoved(event: CdkDragMove<any>) {
		// const boxWidth = this.sliderBox.nativeElement.getBoundingClientRect().width;
		// const deltaPx = event.pointerPosition.x - this.dragStartX;
		//
		// // Transformăm delta în ani
		// const deltaYears = Math.round((deltaPx / this.distancePx) * this.distanceYear);
		//
		// const oldMin = this.form.controls['min'].value;
		// const oldMax = this.form.controls['max'].value;
		//
		// let newMin = oldMin + deltaYears;
		// let newMax = oldMax + deltaYears;
		//
		// // Clamp în intervalul global
		// if (newMin < this.minYear) {
		// 	const diff = this.minYear - newMin;
		// 	newMin += diff;
		// 	newMax += diff;
		// } else if (newMax > this.maxYear) {
		// 	const diff = newMax - this.maxYear;
		// 	newMin -= diff;
		// 	newMax -= diff;
		// }
		//
		// this.form.controls['min'].setValue(newMin, { emitEvent: false });
		// this.form.controls['max'].setValue(newMax, { emitEvent: false });
	}
}

import {Component, ElementRef, ViewChild} from '@angular/core';
import {CdkDrag, CdkDragMove} from "@angular/cdk/drag-drop";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
	selector: 'ui-slider',
	standalone: true,
	imports: [
		CdkDrag,
		ReactiveFormsModule
	],
	templateUrl: './ui-slider.component.html',
	styleUrl: './ui-slider.component.scss'
})
export class UiSliderComponent {

	@ViewChild('sliderBox', { static: true }) sliderBox!: ElementRef;
	@ViewChild('thumb', { static: true }) thumb!: ElementRef;

	form: FormGroup;

	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			min: [1980],
			max: [2025]
		});
	}

	onMoved($event: CdkDragMove<any>) {

		const box = this.sliderBox.nativeElement as HTMLElement;
		const thumbEl = this.thumb.nativeElement as HTMLElement;

		const boxRect = box.getBoundingClientRect();
		const thumbWidth = thumbEl.offsetWidth;

		const minYear = 1980;
		const maxYear = 2025;
		const totalYears = maxYear - minYear;
		const boxWidth = boxRect.width;

		// Poziția relativă față de sliderBox (corectată la mijlocul thumbului)
		let relativeX: number = 0;
		if($event.delta.x > 0){
			relativeX = $event?.pointerPosition.x - boxRect.left + thumbWidth / 2;
		} else {
			relativeX = $event?.pointerPosition.x - boxRect.left - thumbWidth / 2;
		}

		// Asigură-te că e în limite
		const clampedX = Math.max(0, Math.min(relativeX, boxWidth));

		// Calculezi anul
		const percent = clampedX / boxWidth;
		const year = Math.round(minYear + percent * totalYears);

		console.log(`Poziție: ${clampedX}px → An: ${year}`);
		this.form.controls['min'].setValue(year, { emitEvent: false });
	}

}

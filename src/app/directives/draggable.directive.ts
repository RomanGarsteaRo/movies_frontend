import {
	ChangeDetectorRef,
	Directive,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	OnDestroy,
	OnInit,
	Output
} from '@angular/core';
import {fromEvent, map, Subscription, switchMap, takeUntil} from "rxjs";

@Directive({
	selector: '[dir-draggable]',
	standalone: true,
})
export class DraggableDirective implements OnInit, OnDestroy {

	@HostBinding('class.draggable') draggable = true;
	@HostBinding('class.dragging') dragging = false;
	@HostBinding('style.transform') transform = '';

	@Input()
	set value(val: number) {
		this._value = val;
		this.currentX = val;
		this.updateTransform(val);
	}
	get value() {
		return this._value;
	}
	private _value = 0;

	@Input() minX: number = 0;
	@Input() maxX: number = 0;

	@Output() drag = new EventEmitter<number>();

	private sub = new Subscription();
	private startX = 0;
	private deltaX = 0;
	private currentX = 0;
	private pointerId: number | null = null;

	constructor(private el: ElementRef<HTMLElement>,
				private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		const nativeEl = this.el.nativeElement;
		nativeEl.style.touchAction = 'none';

		const pointerDown$ = fromEvent<PointerEvent>(nativeEl, 'pointerdown');
		const pointerMove$ = fromEvent<PointerEvent>(document, 'pointermove');
		const pointerUp$   = fromEvent<PointerEvent>(document, 'pointerup');

		const drag$ = pointerDown$.pipe(
			switchMap((startEvent) => {
				this.pointerId = startEvent.pointerId;
				nativeEl.setPointerCapture(this.pointerId);

				this.startX = startEvent.clientX;
				this.dragging = true;
				return pointerMove$.pipe(takeUntil(pointerUp$));
			}),
			map((moveEvent) => moveEvent.clientX - this.startX)
		);

		this.sub.add(
			drag$.subscribe((dx) => {

				// Drag&Drop Movable Area
				if ( (this.currentX + dx) >= this.minX && (this.currentX + dx) <= this.maxX) {
					this.deltaX = dx;
					this.drag.emit(this.currentX + dx);
					this.updateTransform(this.currentX + dx);
				}
			})
		);

		this.sub.add(
			pointerUp$.subscribe(() => {
				if (this.pointerId !== null) {
					nativeEl.releasePointerCapture(this.pointerId);
					this.pointerId = null;
				}

				this.currentX += this.deltaX;
				this.deltaX = 0;
				this.dragging = false;
				this.cdr.markForCheck();
			})
		);
	}

	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

	private updateTransform(x: number = 0): void {
		this.transform = `translateX(${x}px)`;
		this.cdr.markForCheck();
	}

}

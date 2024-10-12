import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[ellipsis]',
  standalone: true
})
export class EllipsisDirective {

	@Input() maxWidth: string = '100%';

	constructor(private el: ElementRef, private renderer: Renderer2) {}

	ngOnInit(): void {
		// Устанавливаем стили для текстового элемента
		this.renderer.setStyle(this.el.nativeElement, 'white-space', 'nowrap');
		this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
		this.renderer.setStyle(this.el.nativeElement, 'text-overflow', 'ellipsis');
		this.renderer.setStyle(this.el.nativeElement, 'max-width', this.maxWidth);
	}
}

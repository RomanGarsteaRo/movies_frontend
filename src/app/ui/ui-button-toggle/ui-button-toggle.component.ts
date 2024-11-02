import {Component, HostBinding, HostListener, Input} from '@angular/core';

@Component({
  selector: 'ui-button-toggle',
  standalone: true,
  imports: [],
  templateUrl: './ui-button-toggle.component.html',
  styleUrl: './ui-button-toggle.component.scss'
})
export class UiButtonToggleComponent {

	public state: boolean = false;
	@Input() text: string = "";

	@HostBinding('class.active') get active() {
		return this.state;
	}

	@HostListener('click') onClick() {
		this.state = !this.state;
	}

}

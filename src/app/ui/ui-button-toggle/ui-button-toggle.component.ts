import {Component, EventEmitter, HostBinding, HostListener, Input, output, Output} from '@angular/core';

@Component({
  selector: 'ui-button-toggle',
  standalone: true,
  imports: [],
  templateUrl: './ui-button-toggle.component.html',
  styleUrl: './ui-button-toggle.component.scss'
})
export class UiButtonToggleComponent {

	public state: boolean = false;

	@Input()  text: string = "";
	@Output() onToggle = new EventEmitter<{value: string, state: boolean}>(); // Output<{value: string, state: boolean}>({alias: 'ngxNameChange'})

	@HostBinding('class.active') get active() {
		return this.state;
	}

	@HostListener('click') onClick() {
		this.state = !this.state;
		this.onToggle.emit({value: this.text, state: this.state})
	}

}

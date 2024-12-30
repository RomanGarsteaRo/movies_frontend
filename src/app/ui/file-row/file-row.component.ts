import {
	Component, ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	Output
} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FileSizeComponent} from "../file-size/file-size.component";
import {IFile} from "../../services/file/file.interface";

@Component({
	selector: 'file-row',
	standalone: true,
	imports: [
		AsyncPipe,
		FileSizeComponent,
		NgForOf,
		NgIf
	],
	templateUrl: './file-row.component.html',
	styleUrl: './file-row.component.scss'
})
export class FileRowComponent {


	public isRename: boolean = false;

	@Input() folder!: IFile;
	@Input() index!: number;

	@Output() onSDClick = new EventEmitter<{ event: "single" | "double", item: IFile, index: number }>();

	constructor(public elementRef: ElementRef){}

	@HostBinding('class.selected')
	isSelected = false;



	@HostListener('document:keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (event.key === 'F2') {
			console.log("F2");
		}
	}

}

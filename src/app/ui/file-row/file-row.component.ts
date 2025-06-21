import {
	ChangeDetectorRef,
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
import {Store} from "@ngrx/store";
import {FileSrvActions} from "../../state/actions";

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

	@HostBinding('class.selected')
	isSelected = false;

	public isRename: boolean = false;

	@Input() folder!: IFile;
	@Input() index!: number;


	constructor(private store: Store,
				public elementRef: ElementRef,
	){}




	@HostListener('document:keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (event.key === 'F2' && this.isSelected) {
			this.isRename = true;
		}
	}


	onTitleChange($event: Event) {
		const input = $event.target as HTMLInputElement;

		// this.folder = {...this.folder};
		// this.folder.path_p = {...this.folder.path_p};
		// this.folder.path_p.base = input.value;

		this.store.dispatch(FileSrvActions.rename({path: this.folder.path, newName: input.value}));

	}
}

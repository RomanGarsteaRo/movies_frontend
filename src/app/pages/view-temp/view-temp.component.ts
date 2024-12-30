import {Component, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {FileSrvActions} from "../../state/actions";
import {FileSrvSelectors} from "../../state/selectors";
import {filter} from "rxjs";
import {IFile} from "../../services/file/file.interface";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {FileSizeComponent} from "../../ui/file-size/file-size.component";
import {FileRowComponent} from "../../ui/file-row/file-row.component";

@Component({
  selector: 'view-temp',
  standalone: true,
	imports: [
		NgForOf,
		AsyncPipe,
		MatIconModule,
		NgIf,
		FileSizeComponent,
		FileRowComponent
	],
  templateUrl: './view-temp.component.html',
  styleUrl: './view-temp.component.scss'
})
export class ViewTempComponent implements OnInit {


	/*
	 *   1. Rename
	 *   2. Delete
	 *   3. Move
	 *
	 */


	public path: string = "\\\\NAS\\MoviesB\\TEMP";
	public folder: IFile[][] = [];

	private selectedRow!: FileRowComponent;
	private clickTimeout: any; 					// Timer pentru gestionarea diferenței între clic și dublu clic
	private doubleClickDelay: number = 200; 	// Intervalul pentru detectarea dublului clic (în ms)

	@ViewChildren(FileRowComponent) public rowChildren!: QueryList<FileRowComponent>;

	constructor(private store: Store,
	) {
	}

	ngOnInit(){
		this.store.dispatch(FileSrvActions.getFromFolder({path: this.path}));
		this.store.pipe(select(FileSrvSelectors.folder), filter(folder=> folder.length > 0)).subscribe(folder => {
			this.folder.push([...folder]);
		});
	}


/*  ................................................
    Listeners
    ................................................  */
	@HostListener('click', ['$event'])
	onSingleClick(event: MouseEvent) {
		if (!this.clickTimeout) {
			this.clickTimeout = setTimeout(() => {
				this.handleOnSingleClick(event);
				this.clickTimeout = null;
			}, this.doubleClickDelay);
		}
	}

	@HostListener('dblclick', ['$event'])
	onDoubleClick(event: MouseEvent) {
		clearTimeout(this.clickTimeout);
		this.clickTimeout = null;
		this.handleDoubleClick(event);
	}

	@HostListener('document:keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (event.key === 'Backspace') {
			this.handleBackspace();
		}
	}


/*  ................................................
    Listener Handlers
    ................................................  */

	private handleOnSingleClick(event: MouseEvent) {
		const component: FileRowComponent | undefined = this.getComponentFromEvent(event);

		if (component) {
			if(!this.selectedRow){
				// Primul clic
				component.isSelected = true;
				this.selectedRow = component;
			} else {

				// Al doilea clic pe acelasi rind
				if(this.selectedRow === component){
					this.selectedRow.isRename = true;
				} else {

				// Al doilea clic pe alt rind
					this.selectedRow.isSelected = false;
					this.selectedRow.isRename = false;

					component.isSelected = true;
					this.selectedRow = component;
				}
			}
		}
	}


	private handleDoubleClick(event: MouseEvent) {
		const component: FileRowComponent | undefined = this.getComponentFromEvent(event);
		if(component && component.folder.children){
			this.folder.push(component.folder.children);
		}
	}

	private handleBackspace() {
		if (this.folder.length > 1) {
			this.folder.pop();
			this.path = this.folder[this.folder.length - 1][0].path_p.dir;
		}
	}


/*  ................................................
    Helpers
    ................................................  */

	private getComponentFromEvent(event: MouseEvent): FileRowComponent | undefined {
		const target = event.target as HTMLElement;
		return this.rowChildren.find(child =>
			child.elementRef.nativeElement.contains(target)
		);
	}
}



















import {Component, Input} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {} from "../../app.component";
import {IFileSize} from "../../pages/view-list/view-list.component";

@Component({
  selector: 'ui-file-size',
  standalone: true,
	imports: [
		DecimalPipe
	],
  templateUrl: './file-size.component.html',
  styleUrl: './file-size.component.scss'
})
export class FileSizeComponent {
	@Input() size!: IFileSize;
}

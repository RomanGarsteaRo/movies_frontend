import {Component, Input} from '@angular/core';
import {DecimalPipe} from "@angular/common";
import {IFileSize} from "../../services/file/file.interface";


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

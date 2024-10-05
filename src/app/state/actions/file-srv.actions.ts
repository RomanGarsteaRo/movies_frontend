import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {IFile} from "../models/file.interface";


export const FileSrvActions = createActionGroup({
	source: 'FILE SRV',
	events: {
		'Get All': 		    	   emptyProps(),
		'Get All Success':  	   props<{ files:      IFile[] }>(),
		'Get All Failure':  	   props<{ error:      any     }>(),

		'Get From Folder':         props<{ path:       string  }>(),
		'Get From Folder Success': props<{ files:      IFile[] }>(),
		'Get From Folder Failure': props<{ error:      any     }>(),

		'Get Stats ':         	   props<{ path:       string  }>(),
		'Get Stats Success':  	   props<{ any:        any 	   }>(),
		'Get Stats Failure':  	   props<{ error:      any     }>(),

		'Get Meta ':         	   props<{ path:       string  }>(),
		'Get Meta Success':  	   props<{ any:        any 	   }>(),
		'Get Meta Failure':  	   props<{ error:      any     }>(),

		'Rename': 		    	   props<{ path:       string, newName: string }>(),
		'Rename Success':   	   props<{ oldName:    string, newName: string }>(),
		'Rename Failure':   	   props<{ error:      any 				       }>(),

		'Move': 	    		   props<{ sourcePath: string, destinationPath: string }>(),
		'Move Success': 		   props<{ sourcePath: string, destinationPath: string }>(),
		'Move Failure': 		   props<{ error:      any 							   }>(),

		'Delete': 		    	   props<{ path:       string }>(),
		'Delete Success':   	   props<{ path:       string }>(),
		'Delete Failure':   	   props<{ error:      any    }>()
	}
});

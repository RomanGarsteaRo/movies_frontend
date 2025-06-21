import {createReducer, on} from "@ngrx/store";
import {FileSrvActions} from "../actions";
import {IFile} from "../../services/file/file.interface";


export interface FileSrvState {
	file: IFile[];
	folder: IFile[];
	loading: boolean;
	error: any;
}

export const initialState: FileSrvState = {
	file: [],
	folder: [],
	loading: false,
	error: null,
};

export const fileSrvReducer = createReducer(

	initialState,

	// Get All ///////////////////////////////////////////////////////////////////
	on(FileSrvActions.getAll, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(FileSrvActions.getAllSuccess, (state, { files }) => ({
		...state,
		file: [...files],
		loading: false,
		error: null
	})),
	on(FileSrvActions.getAllFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),


	// Get From Folder ///////////////////////////////////////////////////////////////////
	on(FileSrvActions.getFromFolder, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(FileSrvActions.getFromFolderSuccess, (state, { files }) => ({
		...state,
		folder: [...files],
		loading: false,
		error: null
	})),
	on(FileSrvActions.getFromFolderFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),


	// Rename ///////////////////////////////////////////////////////////////////
	on(FileSrvActions.rename, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(FileSrvActions.renameSuccess, (state, { oldName, newName }) => {
		const updatedFiles = state.folder.map((file: IFile) => {
			if (file.path_p.base === oldName) {
				const newPath: string = file.path.replace(file.path_p.base, newName);
				const newPathP = {...file.path_p, base: newName}
				return { ...file, path: newPath, path_p: newPathP};
			}
			return file;
		});

		console.log("Reducer", updatedFiles);
		return {
			...state,
			folder: [...updatedFiles],
			loading: false,
			error: null
		};
	}),
	on(FileSrvActions.renameFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),


	// Delete ///////////////////////////////////////////////////////////////////
	on(FileSrvActions.delete, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(FileSrvActions.deleteSuccess, (state, { path }) => {
		const updatedFiles = state.file.filter(file => file.path !== path);
		return {
			...state,
			file: updatedFiles,
			loading: false,
			error: null
		};
	}),
	on(FileSrvActions.deleteFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),


	// Move ///////////////////////////////////////////////////////////////////
	on(FileSrvActions.move, (state) => ({
		...state,
		loading: true,
		error: null
	})),
	on(FileSrvActions.moveSuccess, (state, { sourcePath, destinationPath }) => {
		// TODO
		return {
			...state,
			loading: false,
			error: null
		};
	}),
	on(FileSrvActions.moveFailure, (state, { error }) => ({
		...state,
		loading: false,
		error
	})),



);

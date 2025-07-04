import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FileSrvState} from "../reducers/file-srv.reducer";

const fileSrvState = createFeatureSelector<FileSrvState>('fileSrv');

const fileSrv_files = createSelector(fileSrvState, (state: FileSrvState) => state.file);
const fileSrv_folder = createSelector(fileSrvState, (state: FileSrvState) => state.folder);
const fileSrv_loading = createSelector(fileSrvState, (state: FileSrvState) => state.loading);
const fileSrv_error = createSelector(fileSrvState, (state: FileSrvState) => state.error);

export const FileSrvSelectors = {
	files:   fileSrv_files,
	folder:  fileSrv_folder,
	loading: fileSrv_loading,
	error:   fileSrv_error,
};

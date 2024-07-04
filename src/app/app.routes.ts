import { Routes } from '@angular/router';
import {ViewListComponent} from "./pages/view-list/view-list.component";
import {ViewPosterComponent} from "./pages/view-poster/view-poster.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

export const routes: Routes = [
	{ path: 'list', title: 'List View', component: ViewListComponent },
	{ path: 'poster', title: 'Poster View', component: ViewPosterComponent },
	{ path: '',   redirectTo: '/list', pathMatch: 'full' }, // redirect to `list component`
	{ path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

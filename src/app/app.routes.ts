import { Routes } from '@angular/router';
import {ViewListComponent} from "./pages/view-list/view-list.component";
import {ViewPosterComponent} from "./pages/view-poster/view-poster.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {BookListComponent} from "./pages/book-list/book-list.component";

export const routes: Routes = [
	{ path: 'list', title: 'List View', component: ViewListComponent },
	{ path: 'books', title: 'Books', component: BookListComponent },

	{ path: 'poster', title: 'Poster View', component: ViewPosterComponent },
	{ path: '',   redirectTo: '/books', pathMatch: 'full' }, // redirect to `list component`
	{ path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

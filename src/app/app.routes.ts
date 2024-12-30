import {Routes} from '@angular/router';
import {ViewListComponent} from "./pages/view-list/view-list.component";
import {ViewPosterComponent} from "./pages/view-poster/view-poster.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {ViewPlayerComponent} from "./pages/view-player/view-player.component";
import {ViewTempComponent} from "./pages/view-temp/view-temp.component";

export const routes: Routes = [
	{ path: 'list', title: 'Movies list', component: ViewListComponent },
	{ path: 'temp', title: 'Temporary movies list', component: ViewTempComponent },
	{ path: 'poster', title: 'Poster View', component: ViewPosterComponent },
	{ path: 'player/:id', component: ViewPlayerComponent },
	{ path: '',   redirectTo: '/list', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];

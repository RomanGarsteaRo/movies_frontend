import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import {routes} from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from "@ngrx/store";
import {booksReducer} from "./state/books.reducer";
import {collectionReducer} from "./state/books.collection.reducer";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes,  withComponentInputBinding()),
		importProvidersFrom(HttpClientModule),
		provideAnimationsAsync(),
		provideStore({
			books: booksReducer,
			collection: collectionReducer
		}),


		// provideState()
		// provideEffects(ngrxFormsEffects),
	]
};

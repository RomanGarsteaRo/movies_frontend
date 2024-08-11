import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ViewListComponent} from "./pages/view-list/view-list.component";
import {UrlBase} from "./services/url/UrlBase";
import {environment} from "../environments/environment";
import {UrlOmdb} from "./services/url/UrlOmdb";
import {provideState, Store, StoreModule} from "@ngrx/store";
import {counterReducer} from "./state/app.reducer";
import {BrowserModule} from "@angular/platform-browser";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {BookListComponent} from "./pages/book-list/book-list.component";
import {BookCollectionComponent} from "./pages/book-collection/book-collection.component";
import {selectBookCollection, selectBooks} from "./state/books.selectors";
import {BooksActions, BooksApiActions} from "./state/books.actions";
import {GoogleBooksService} from "./state/books.service";
import {Book} from "./state/books.model";
import {booksReducer} from "./state/books.reducer";
import {collectionReducer} from "./state/books.collection.reducer";


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, BookListComponent, BookCollectionComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

	books$: Observable<readonly Book[]> = this.store.select(selectBooks);
	bookCollection$: Observable<Book[]> = this.store.select(selectBookCollection);


	constructor(private booksService: GoogleBooksService, private store: Store) {}


	ngOnInit() {
		UrlBase.url = environment.baseUrl;
		UrlOmdb.url = environment.omdbUrl;
		UrlOmdb.key = environment.omdbKey;

		this.booksService
			.getBooks()
			.subscribe((books) =>
				this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
			);
	}

	onAdd(bookId: string) {
		this.store.dispatch(BooksActions.addBook({ bookId }));
	}
	onRemove(bookId: string) {
		this.store.dispatch(BooksActions.removeBook({ bookId }));
	}
}





































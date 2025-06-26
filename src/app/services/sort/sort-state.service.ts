import {inject, Injectable, DestroyRef } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IMovie} from "../movie/movie.interface";
import {select, Store} from "@ngrx/store";
import {MoviesActions} from "../../state/actions";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {SortRule} from "./sort-rule.interface";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {getAccessor} from "./sort-accessor";


@Injectable({
	providedIn: 'any'
})
export class SortStateService {

	public movies: IMovie[] = [];
	public sortRules: SortRule<any>[] = [];
	public activeSortRules: BehaviorSubject<SortRule<any>[]> = new BehaviorSubject<SortRule<any>[]>([]);
	private readonly destroyRef = inject(DestroyRef);

	constructor(private store: Store) {
		this.store.pipe(
			select(MoviesSelectors.movies),
			takeUntilDestroyed(this.destroyRef)
		).subscribe(movies => {
			this.movies = [...movies];
		});
	}

	sort(rule: SortRule<any>) {
		this.updateRules(rule);
		this.updateMovies();
		this.updateStore();
		this.emitNewRules();
	}

	private updateRules(newRule: SortRule<any>) {
		if (!newRule.shift) {
			// Single-sort
			this.sortRules = [{ ...newRule }];
		} else {
			// Multi-sort
			const existing = this.sortRules.find(rule => rule.key === newRule.key);
			if (existing) {
				existing.direction = newRule.direction;
			} else {
				this.sortRules.push(newRule);
			}
		}
	}

	private updateMovies() {
		this.multiSort(this.movies, this.sortRules);
	}

	private updateStore() {
		this.store.dispatch(MoviesActions.updateMovies({ movies: this.movies }));
	}

	private emitNewRules() {
		this.activeSortRules.next(this.sortRules);
	}

	// Multi-key sort (Lexicographic sorting)
	private multiSort(data: IMovie[], rules: SortRule<IMovie>[]) {
		this.movies = [...data].sort((a, b) => {
			for (const rule of rules) {
				const accessor = getAccessor(rule.key);

				const aValue = accessor(a);
				const bValue = accessor(b);

				console.log(rule.key, aValue, bValue)

				if (aValue == null && bValue != null) return 1;
				if (bValue == null && aValue != null) return -1;
				if (aValue == null && bValue == null) return 0;

				if (aValue < bValue) return rule.direction === 'asc' ? -1 : 1;
				if (aValue > bValue) return rule.direction === 'asc' ? 1 : -1;
			}
			return 0;
		});
	}
}
































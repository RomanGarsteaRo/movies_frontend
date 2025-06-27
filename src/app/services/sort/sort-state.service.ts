import {Injectable } from '@angular/core';
import {BehaviorSubject, filter, take} from "rxjs";
import {IMovie} from "../movie/movie.interface";
import {select, Store} from "@ngrx/store";
import {MoviesActions} from "../../state/actions";
import {MoviesSelectors} from "../../state/selectors/movies.selectors";
import {SortRule} from "./sort-rule.interface";
import {getAccessor} from "./sort-accessor";


@Injectable({
	providedIn: 'any'
})
export class SortStateService {

	public sortRules: SortRule<any>[] = [];
	public activeSortRules: BehaviorSubject<SortRule<any>[]> = new BehaviorSubject<SortRule<any>[]>([]);


	constructor(private store: Store) {}

	sort(rule: SortRule<any>) {
		this.updateRules(rule);
		this.updateMovies();
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

		this.store.pipe(
			select(MoviesSelectors.movies),
			filter((movies: IMovie[]) => Array.isArray(movies) && movies.length > 0),
			take(1)
		).subscribe(movies => {
			const sorted: IMovie[] = this.multiSort(movies, this.sortRules);
			this.store.dispatch(MoviesActions.initMovies({ movies: sorted }));
		});
	}

	private emitNewRules() {
		this.activeSortRules.next(this.sortRules);
	}

	// Multi-key sort (Lexicographic sorting)
	private multiSort(movies: IMovie[], rules: SortRule<IMovie>[]): IMovie[] {
		const sortResult: IMovie[] = [...movies].sort((a, b) => {
			for (const rule of rules) {
				const accessor = getAccessor(rule.key);

				const aValue = accessor(a);
				const bValue = accessor(b);

				if (aValue == null && bValue != null) return 1;
				if (bValue == null && aValue != null) return -1;
				if (aValue == null && bValue == null) return 0;

				if (aValue < bValue) return rule.direction === 'asc' ? -1 : 1;
				if (aValue > bValue) return rule.direction === 'asc' ? 1 : -1;
			}
			return 0;
		});

		// console.log( "S SORT multiSort() -> movies: ", sortResult[0].title);
		return sortResult || [];
	}
}
































import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {SortStateService} from "../../services/sort/sort-state.service";
import {SortRule} from "../../services/sort/sort-rule.interface";
import {IMovie} from "../../services/movie/movie.interface";
import {filter} from "rxjs";



@Component({
	selector: 'ui-column-header',
	standalone: true,
	imports: [NgIf],
	templateUrl: './column-header.component.html',
	styleUrl: './column-header.component.scss'
})
export class ColumnHeaderComponent implements OnInit {

	@Input() label!: string;
	@Input() key!: string;
	@Input() direction: 'asc' | 'desc' | undefined;
	@Input() sortable!: boolean; // TODO
	public indexOfSortRule: number | undefined;

	constructor(private SortState: SortStateService) {}

	ngOnInit() {
		this.SortState.activeSortRules
			.pipe(filter(rules => !!rules && rules.length > 0),)
			.subscribe(rules => {
				this.updateUI(rules);
			});

		if (this.direction) {
			const newSortRule: SortRule<IMovie> = {
				key: this.key as keyof IMovie,
				direction: this.direction,
				shift: false
			}
			this.SortState.sort(newSortRule);
		}
	}

	private updateUI(rules: SortRule<any>[]): void {
		const rule = rules.find(rule => this.key === rule.key);

		if (rule) {
			this.indexOfSortRule = rules.indexOf(rule) + 1;
			this.direction = rule.direction;
		} else {
			this.indexOfSortRule = undefined;
			this.direction = undefined;
		}


		/*	TEST
		if (this.key === 'year' ) {
			console.log('ui-column-header.component | year | updateUI | rules, rule, index:', rules, rule, this.indexOfSortRule);
		}
		if (this.key === 'size') {
			console.log('ui-column-header.component | size | updateUI | rules, rule, index:', rules, rule, this.indexOfSortRule);
		}
		*/
	}

	toggleSort() {
		const newSortRule: SortRule<IMovie> = {
			key: this.key as keyof IMovie,
			direction: this.direction === 'asc' ? 'desc' : 'asc',
			shift: false
		}
		this.SortState.sort(newSortRule);
	}

	onSort(event: MouseEvent, direction: 'asc' | 'desc') {
		const newSortRule: SortRule<IMovie> = {
			key: this.key as keyof IMovie,
			direction: direction,
			shift: event.shiftKey
		}
		this.SortState.sort(newSortRule);
	}


	// TODO
	// resetSortRule() {}
	// removeSortRule() {}
}
























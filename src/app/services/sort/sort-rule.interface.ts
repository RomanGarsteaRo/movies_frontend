

export type SortDirection = 'asc' | 'desc' | undefined;

export interface SortRule<T> {
	key: keyof T;
	direction: SortDirection;
	shift: boolean;
	accessor?: (item: T) => any;
}

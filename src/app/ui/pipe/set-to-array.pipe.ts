import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setToArray',
  standalone: true
})
export class SetToArrayPipe implements PipeTransform {

	transform<T>(set: Set<T> | undefined | null, fallback: T[] = []): T[] {
		return set ? Array.from(set) : fallback;
	}

}

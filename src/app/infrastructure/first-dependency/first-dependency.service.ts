import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FirstDependencyService {

	returnValue(index: number) {
		const arr = ['first', 'second', 'third'];
		return arr[index]
	}
}
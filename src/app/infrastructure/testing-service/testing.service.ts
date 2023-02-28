import { Injectable } from '@angular/core';
import { FirstDependencyService } from '../first-dependency/first-dependency.service';

@Injectable({
	providedIn: 'root'
})
export class TestingService {
	constructor(private _firstDependency: FirstDependencyService) {
	}

	getValue(index: number) {
		return this._firstDependency.returnValue(index)
	}
}
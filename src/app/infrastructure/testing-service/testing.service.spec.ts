import { TestBed } from '@angular/core/testing';
import { TestingService } from './testing.service';
import { FirstDependencyService } from '../first-dependency/first-dependency.service';

describe('Testing service', () => {
	let service: TestingService;
	let firstDependency: FirstDependencyService
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TestingService,

			],
		})
		service = TestBed.inject(TestingService)
		firstDependency = TestBed.inject(FirstDependencyService);
	})

	it('should create an instance of class', () => {
		expect(service).toBeDefined()
	})

	it('should return value by index  with original method', () => {
		spyOn(firstDependency, 'returnValue').and.callThrough()
		const result = service.getValue(1);
		expect(result).toBe('second')
	})

	it('should return value by index with fake method', () => {
		spyOn(firstDependency, 'returnValue').and.callFake(() => 'second')
		const result = service.getValue(1);
		expect(result).toBe('second')
	})

	it('should return value by index with fake method (the second way)', () => {
		spyOn(firstDependency, 'returnValue').and.returnValue('second')
		const result = service.getValue(1);
		expect(result).toBe('second')
	})
})
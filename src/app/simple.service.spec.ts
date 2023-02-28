import { SimpleService } from './simple.service';
import { CheckValueService } from './check-value.service';
import { TestBed } from '@angular/core/testing';

describe('Simple service', () => {
	let service: SimpleService
	let fakeCheckValueService = {
		check: () => true
	} as CheckValueService

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SimpleService,
				{
					provide: CheckValueService,
					useValue: fakeCheckValueService
				}
			],
		})
		service = TestBed.get(SimpleService)

	})

	it('should create an instance of class', () => {
		expect(service).toBeTruthy()
	})

	it('should calculate sum of two numbers', () => {
		const sum = service.sum(2, 3);
		expect(sum).toBe(5);
	})

	it('should return undefined, if second number is undefined', () => {
		const sum = service.sum(2);
		expect(sum).toBe(undefined);
	})
})
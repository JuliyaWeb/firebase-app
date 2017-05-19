/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewService } from './new.service';

describe('NewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewService]
    });
  });

  it('should be created...', inject([NewService], (service: NewService) => {
    expect(service).toBeTruthy();
  }));

  it('Method should return the string', inject([NewService], (service: NewService) => {
    const getMethod = service.myTestMethod();
    expect(getMethod).toBe('string');
  }));


});

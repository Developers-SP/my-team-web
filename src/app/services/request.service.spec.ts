import { TestBed, inject } from '@angular/core/testing';

import { RequestService } from './request.service';

import { appModule } from '../../test.tool';

describe('RequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it('should be created', inject([RequestService], (service: RequestService) => {
    expect(service).toBeTruthy();
  }));
});

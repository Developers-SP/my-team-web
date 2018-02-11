import { TestBed, inject } from '@angular/core/testing';

import { GuardService } from './guard.service';

import { appModule } from '../../../test.tool';

describe('GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it('should be created', inject([GuardService], (service: GuardService) => {
    expect(service).toBeTruthy();
  }));
});

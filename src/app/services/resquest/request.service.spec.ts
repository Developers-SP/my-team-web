import { TestBed, inject } from '@angular/core/testing';
import { appModule } from '../../../test.tool';
import { RequestService } from './request.service';

describe('RequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it(
    'should be created',
    inject([RequestService], (service: RequestService) => {
      expect(service).toBeTruthy();
    })
  );
});

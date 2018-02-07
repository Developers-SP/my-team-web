import { TestBed, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';

import { appModule } from '../../test.tool';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('should be save value', inject([StorageService], (service: StorageService) => {
    service.save('TO_TEST', { test: true });
    expect(localStorage.getItem('TO_TEST')).toBeTruthy();
  }));

  it('should be select value', inject([StorageService], (service: StorageService) => {
    const value = service.select('TO_TEST');
    expect(value).toBeTruthy();
  }));
});

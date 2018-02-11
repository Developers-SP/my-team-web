import { TestBed, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';

import { appModule } from '../../../test.tool';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it('should be created', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('has method save', inject([StorageService], (service: StorageService) => {
    expect(typeof service.save).toBe('function');
  }));

  it('has method delete', inject([StorageService], (service: StorageService) => {
    expect(typeof service.delete).toBe('function');
  }));

  it('has method select', inject([StorageService], (service: StorageService) => {
    expect(typeof service.select).toBe('function');
  }));

  it('should save value', inject([StorageService], (service: StorageService) => {
    service.save('TO_TEST', { test: true });
    expect(localStorage.getItem('TO_TEST')).toBeTruthy();
  }));

  it('should select value', inject([StorageService], (service: StorageService) => {
    const value = service.select('TO_TEST');
    expect(value).toBeTruthy();
  }));

  it('should delete value', inject([StorageService], (service: StorageService) => {
    service.delete('TO_TEST');
    expect(localStorage.getItem('TO_TEST')).toBeFalsy();
  }));
});

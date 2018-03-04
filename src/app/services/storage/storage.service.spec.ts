import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { StorageService } from './storage.service';

import { appModule } from 'src/test.tool';

describe('StorageService', () => {
  let injector: TestBed;
  let service: StorageService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(appModule);

    injector = getTestBed();
    service = injector.get(StorageService);
    httpMock = injector.get(HttpTestingController);
  });

  it(
    'should be created',
    () => {
      expect(service).toBeTruthy();
    }
  );

  it(
    'has method save',
    () => {
      expect(typeof service.save).toBe('function');
    }
  );

  it(
    'has method delete',
    () => {
      expect(typeof service.delete).toBe('function');
    }
  );

  it(
    'has method select',
    () => {
      expect(typeof service.select).toBe('function');
    }
  );

  it(
    'should save value',
    () => {
      service.save('TO_TEST', { test: true });
      expect(localStorage.getItem('TO_TEST')).toBeTruthy();
    }
  );

  it(
    'should select value',
    () => {
      const value = service.select('TO_TEST');
      expect(value).toBeTruthy();
    }
  );

  it(
    'should delete value',
    () => {
      service.delete('TO_TEST');
      expect(localStorage.getItem('TO_TEST')).toBeFalsy();
    }
  );
});

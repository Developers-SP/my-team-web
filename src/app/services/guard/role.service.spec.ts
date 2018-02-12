import { TestBed, inject } from '@angular/core/testing';

import { RoleService } from './role.service';

import { appModule } from '../../../test.tool';

describe('RoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(appModule);
  });

  it('should be created', inject([RoleService], (service: RoleService) => {
    expect(service).toBeTruthy();
  }));
});

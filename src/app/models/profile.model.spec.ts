import { TestBed, inject } from '@angular/core/testing';
import { appModule, mocks } from '../../test.tool';
import { Profile } from './profile.model';

describe('ProfileModel', () => {
  it('should be created', () => {
    const profile = new Profile();
    expect(profile).toBeTruthy();
  });
});

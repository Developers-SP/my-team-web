import { async } from '@angular/core/testing';
//
// helpers
//
import { JsonToUrl } from './request.helper';

describe('ResquestHelper', () => {
  it('should convert params to url', () => {
    const params = { test: 'testing' };
    expect(JsonToUrl(params).toString()).toBe('test=testing');
  });
});

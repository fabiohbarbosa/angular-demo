import { TestBed } from '@angular/core/testing';

import { HttpClientInterceptor } from './http.interceptor';

describe('HttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientInterceptor = TestBed.get(HttpClientInterceptor);
    expect(service).toBeTruthy();
  });
});

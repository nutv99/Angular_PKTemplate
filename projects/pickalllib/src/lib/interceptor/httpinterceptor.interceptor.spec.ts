import { TestBed } from '@angular/core/testing';

import { MyHttpInterceptor } from './httpinterceptor.interceptor';

describe('HttpinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyHttpInterceptor = TestBed.inject(MyHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

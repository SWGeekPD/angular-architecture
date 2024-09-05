import { TestBed, inject } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderService = TestBed.inject(LoaderService);
    expect(service).toBeTruthy();
  });

  it('should emit a value', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inject([LoaderService], (loaderService:any) => {
      const isLoading = loaderService.inject('isLoading');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      isLoading.subscribe((message:any) => {
        expect(message).toBe(true);
      });
      loaderService.isShow(true);
    });
  });
});

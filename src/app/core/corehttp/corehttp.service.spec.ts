import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CorehttpService } from './corehttp.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('CorehttpService', () => {
  let service: CorehttpService;
  const baseUrl = environment.apiUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule],
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(CorehttpService);
  });

  it('should be created', () => {
    service = TestBed.inject(CorehttpService);
    expect(service).toBeTruthy();
  });
  it('should be call get HTTP call', () => {
    service = TestBed.inject(CorehttpService);

    const spy = spyOn(service, 'getApi');
    service.getApi(baseUrl);
    expect(spy).toHaveBeenCalled();
  });

  it('should be call get HTTP call with following arguments', () => {
    service = TestBed.inject(CorehttpService);

    const spy = spyOn(service, 'getApi');
    service.getApi(baseUrl);
    expect(spy).toHaveBeenCalledWith(baseUrl);
  });
  it('should be call post HTTP method', () => {
    service = TestBed.inject(CorehttpService);
    const spy = spyOn(service, 'postApi');
    const dummy = { uname: 'XYZ' };
    service.postApi(baseUrl, dummy);
    expect(spy).toHaveBeenCalled();
  });
});

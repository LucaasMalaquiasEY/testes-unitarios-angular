import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let apiUrl = 'http://localhost:3000'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve obter dados do usuario e fazer requisicao tipo GET', () => {
    service.getUser().subscribe(

    );
    const request = httpTestingController.expectOne(`${apiUrl}/user`)

    expect(request.request.method).toBe('GET')
    request.flush({})

  })
});

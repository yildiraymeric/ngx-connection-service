import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {ConnectionService} from './connection-service.service';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('ConnectionServiceService', () => {
  let injector: TestBed;
  let service: ConnectionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ConnectionService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    });
    injector = getTestBed();
    service = injector.get(ConnectionService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([ConnectionService], (testedService: ConnectionService) => {
    expect(testedService).toBeTruthy();
  }));

});

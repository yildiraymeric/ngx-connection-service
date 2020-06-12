import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {ConnectionService} from './connection-service.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ConnectionServiceService', () => {
  let injector: TestBed;
  let service: ConnectionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConnectionService]
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

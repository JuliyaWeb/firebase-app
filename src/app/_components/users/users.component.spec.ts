
import { TestBed, async, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { UserService } from '../../_services/user.service';
import { MockUsers } from './users.data.mock';

describe('Service: Users', () => {
  beforeEach(() => {
    const mockHttpProvider =
      {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) =>
        { return new Http(backend, defaultOptions); }
      }
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        UserService,
        MockBackend,
        BaseRequestOptions,
        mockHttpProvider
      ]
    });
  });

  it('should create a service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should return users', async(inject([UserService, MockBackend], (service, backend) => {

    backend.connections.subscribe(conn => {
      conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(MockUsers) })));
    });

     service.getUsers().subscribe(data => {
      expect(data.length).toBe(MockUsers.length);
    });
  })))

})

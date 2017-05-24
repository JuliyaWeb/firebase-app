
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

  // spyon angular

  it('should create a service', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should return users', async(inject([UserService, MockBackend, Http], (service: UserService, backend: MockBackend, http) => {
    let response = new ResponseOptions({
      body: JSON.stringify(MockUsers)
    });

    const baseResponse = new Response(response);

    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(baseResponse)
    );

    return service.getUsers().subscribe(data => {
      console.info('data=>', data);
      console.info('tests=>', MockUsers.length);
      expect(data.length).toBe(MockUsers.length);
    });
  })))
})

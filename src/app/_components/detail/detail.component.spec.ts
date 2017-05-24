//
// import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
// import { BaseRequestOptions, Response, ResponseOptions, Http, HttpModule } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
//
// import { UserService } from '../../_services/user.service';
// import { DetailComponent } from "./detail.component";
// import { MockUsers } from '../users/users.data.mock';
//
// const mockHttpProvider = {
//   provide: Http,
//   deps: [MockBackend, BaseRequestOptions],
//   useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) =>
//   { return new Http(backend, defaultOptions); }
// }
//
// describe('Service: Users', () => {
//
//   let component: DetailComponent;
//   let fixture: ComponentFixture<DetailComponent>;
//   let userService;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         DetailComponent
//       ],
//       imports: [
//         HttpModule
//       ],
//       providers: [
//         UserService,
//         MockBackend,
//         BaseRequestOptions,
//         mockHttpProvider
//       ]
//     });
//
//     fixture = TestBed.createComponent(DetailComponent);
//     component = fixture.componentInstance;
//   });
//
//   it('should create a service', inject([UserService], (service: UserService) => {
//     expect(service).toBeTruthy();
//   }));
//
//   it('should call loadDetails to load user details', inject([UserService, MockBackend, Http], (_httpService, backend, http) => {
//     backend.connections.subscribe(connection => {
//       let response = new ResponseOptions({ body: JSON.stringify(MockUsers) });
//       connection.mockRespond(new Response(response));
//     });
//
//     _httpService.getUsers().subscribe(
//       data => {
//         console.log('ccc',data);
//       }
//     )
//
//
//
//   }));
//
//   it('should return users', async(inject([UserService, MockBackend], (service: UserService, backend: MockBackend) => {
//     let response = new ResponseOptions({
//       body: JSON.stringify(MockUsers)
//     });
//
//     const baseResponse = new Response(response);
//
//     backend.connections.subscribe(
//       (c: MockConnection) => c.mockRespond(baseResponse)
//     );
//
//     console.log(service);
//     expect(service.randomUsers).toBe('https://randomuser.me/api/?results=3');
//
//     // return service.getTest().subscribe(data => {
//     //   console.info('data=>', data);
//     //   console.info('tests=>', MockUsers.length);
//     //   expect(data).toBe(MockUsers.length);
//     // });
//
//   })))
// })

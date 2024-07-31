import {NgModule} from '@angular/core';
import {ConnectionService} from './connection-service.service';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

@NgModule({
  providers: [ConnectionService, provideHttpClient(withInterceptorsFromDi())]
})
export class ConnectionServiceModule {
}

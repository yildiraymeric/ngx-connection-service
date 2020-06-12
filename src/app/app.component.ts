import {Component} from '@angular/core';
import {ConnectionService} from 'ngx-connection-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heartBeatState;
  private internetChance: number;

  constructor(private connectionService: ConnectionService) {
    this.heartBeatState = this.connectionService.options.enableHeartbeat;
  }

  setHeartBeatState(state: boolean) {
    this.heartBeatState = state;
    this.connectionService.updateOptions({enableHeartbeat: state});
  }

  useExecutor() {
    this.connectionService.updateOptions({
      heartbeatExecutor: options => new Observable<any>(subscriber => {
        this.internetChance = Math.round(Math.random() * 100);
        if (this.internetChance > 50) {
          subscriber.next();
          subscriber.complete();
        } else {
          throw new Error('Connection error');
        }
      })
    });
  }
}

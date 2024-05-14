import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServer = true;
  serverCreationStatus = 'server was offline';
  serverName = 'peter';
  constructor() {
    setTimeout(() => {
      this.allowServer = false;
    }, 1000);
  }
  onServerCreationStatusHandler() {
    this.serverCreationStatus = 'server was online';
  }
  onChangeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    /* template: '<app-server></app-server><app-server></app-server>', */
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = "No server was created!";
    serverCreated = false;
    servers = [];
    serverName = "";
    details = false;
    clicks = [];
    userName = "";

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = `The Server was created! Name being ${this.serverName}`;
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    displayDetails() {
        this.details = !this.details;
        // this.clicks.push(this.clicks.length + 1);
        this.clicks.push(new Date());
    }

}

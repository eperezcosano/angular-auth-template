import { Component } from '@angular/core';
import { OauthService } from '../../service/oauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    constructor(private auth: OauthService) {
    }

    logout() {
        this.auth.logout();
    }

    name() {
        return this.auth.getName();
    }
}

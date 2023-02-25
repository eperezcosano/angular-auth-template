import { Component } from '@angular/core';
import { OauthService } from '../../service/oauth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    constructor(private auth: OauthService) {
    }

    login() {
        this.auth.login();
    }
}

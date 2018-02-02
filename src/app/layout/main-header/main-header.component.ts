import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }

  login() {
    location.href =
      `https://steamcommunity.com/openid/login` +
      `?openid.ns=http://specs.openid.net/auth/2.0` +
      `&openid.mode=checkid_setup` +
      `&openid.return_to=${environment.url}` +
      `&openid.realm=${environment.url}` +
      `&openid.identity=http://specs.openid.net/auth/2.0/identifier_select` +
      `&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select`;
  }
}

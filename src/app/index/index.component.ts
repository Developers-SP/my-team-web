import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.Auth = params);
  }
  set Auth(params) {
    const url: string = params['openid.identity'] || params['openid.claimed_id'];
    if (!url) return;

    const id = url.substring(environment.openid.length);
    if (!id) return;
  }
}

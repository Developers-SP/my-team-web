import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  public selecting = false;

  constructor(private translate: TranslateService) { }

  get language(): string {
    return this.translate.defaultLang;
  }

  set language(value) {
    if (!this.selecting) return;
    localStorage.setItem('_lang', value);
    this.translate.setDefaultLang(value);
  }
}

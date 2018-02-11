import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { appModule } from '../../../test.tool';

import { LanguageComponent } from './language.component';

describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(appModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has selecting', () => {
    expect(component.hasOwnProperty('selecting')).toBeTruthy();
  });

  it('selecting should be false', () => {
    expect(component.selecting).toBeFalsy();
  });

});

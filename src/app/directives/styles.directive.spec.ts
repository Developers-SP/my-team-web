import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { PlayerComponent } from '../player/player.component';
import { appModule } from '../../test.tool';

describe('StylesDirective', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(appModule)
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('has background image', () => {
    const profile_cover = fixture.debugElement.query(By.css('.profile__cover'));
    expect(profile_cover.nativeElement.style.backgroundImage).toBe('url("")');
  });
});

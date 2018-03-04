import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlayerComponent } from 'app/pages/player/player.component';
import { appModule } from 'src/test.tool';

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
    const foto = 'http://cdn.akamai.steamstatic.com/steam/apps/730/'
              + 'ss_ccc4ce6edd4c454b6ce7b0757e633b63aa93921d.1920x1080.jpg?t=1513742714';
    expect(profile_cover.nativeElement.style.backgroundImage).toBe(`url("${foto}")`);
  });
});

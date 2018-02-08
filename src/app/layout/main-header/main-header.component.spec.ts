import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { appModule, mocks } from '../../../test.tool';
import { By } from '@angular/platform-browser';
//
// Component
//
import { MainHeaderComponent } from './main-header.component';
import { PlayerService } from '../../services/index';
import { Player } from '../../models/player.model';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('MainHeaderComponent', () => {
  let element: DebugElement;
  let elementDOM: HTMLElement | any;
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule(appModule).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    localStorage.clear();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has prop player', () => {
    expect(typeof component.player).toEqual('object');
  });

  it('has method login', () => {
    expect(typeof component.login).toEqual('function');
  });

  it('has method loggout', () => {
    expect(typeof component.loggout).toEqual('function');
  });

  it('should make loggout', () => {
    const playerService = fixture.componentRef.injector.get(PlayerService);
    playerService.player = mocks.player;
    component.loggout();

    fixture.detectChanges();

    expect(component.player.logged).toBeFalsy();
  });

  it('show button login', () => {
    element = fixture.debugElement.query(By.css('.main-header__sign'));
    expect(element).toBeTruthy();
  });

  it('show hidden profile', () => {
    element = fixture.debugElement.query(By.css('.main-header__profile'));
    expect(element).toBeFalsy();
  });

  it('show profile', () => {
    const playerService = fixture.componentRef.injector.get(PlayerService);
    playerService.player = mocks.player;

    fixture.detectChanges();

    element = fixture.debugElement.query(By.css('.main-header__sign'));
    expect(element).toBeFalsy();
  });

  it('show profile name', () => {
    const playerService = fixture.componentRef.injector.get(PlayerService);
    playerService.player = mocks.player;

    fixture.detectChanges();

    elementDOM = fixture.debugElement.query(By.css('.profile__name')).nativeElement;
    expect(elementDOM.textContent).toBe(mocks.player.steam_name);
  });


  it('show profile photo', () => {
    const playerService = fixture.componentRef.injector.get(PlayerService);
    playerService.player = mocks.player;

    fixture.detectChanges();

    elementDOM = fixture.debugElement.query(By.css('.profile__photo')).nativeElement;
    expect(elementDOM.src).toBe(mocks.player.avatar);
  });

  it('hidden button login', () => {
    const playerService = fixture.componentRef.injector.get(PlayerService);
    playerService.player = mocks.player;

    fixture.detectChanges();

    element = fixture.debugElement.query(By.css('.main-header__profile'));
    expect(element).toBeTruthy();
  });
});

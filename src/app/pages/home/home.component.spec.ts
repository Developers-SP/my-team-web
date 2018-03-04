import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'environments/environment';
import { appModule } from 'src/test.tool';
//
// Component
//
import { HomeComponent } from './home.component';

describe('IndexComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule(appModule).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('has method authenticate',  () => {
    expect(typeof component.authenticate).toBe('function');
  });

  it('has method getId', () => {
    expect(typeof component.getId).toBe('function');
  });

  it('should get id', () => {
    const params = {
      'openid.identity': `${environment.steam.id}76561198303910588`
    };
    const id = component.getId(params);
    expect(id).toEqual('76561198303910588');
  });
});

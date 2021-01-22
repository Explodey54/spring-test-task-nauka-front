import { LoginContainerComponent } from './login-container.component';
import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MockComponents} from "ng-mocks";
import {RegisterForm} from "@auth/components/register-form/register-form.component";
import {LoginFormComponent} from "@auth/components/login-form/login-form.component";
import {endsWith} from "@test/http-predicates";
import {AuthService} from "@core/auth/auth.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ApiModule} from "@api/api.module";

describe('LoginContainerComponent', () => {
  let spectator: Spectator<LoginContainerComponent>;
  let router: Router;
  let httpMock: HttpTestingController;
  const createComponent = createComponentFactory({
    component: LoginContainerComponent,
    providers: [AuthService],
    imports: [HttpClientTestingModule, RouterTestingModule, ApiModule],
    declarations: MockComponents(LoginFormComponent)
  });

  beforeEach(() => {
    spectator = createComponent();
    router = spectator.inject(Router);
    httpMock = spectator.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should login request on form submit', () => {
    const value = {username: 'username', password: 'pass123'} as RegisterForm;

    spectator.triggerEventHandler(LoginFormComponent, 'formSubmit', value);

    const req = httpMock.expectOne(endsWith({url: 'auth', method: 'POST'}));
    expect(req.request.body).toEqual(value);
  });

  it('should pass error to form on request fail', () => {
    spectator.triggerEventHandler(LoginFormComponent, 'formSubmit', {} as RegisterForm);
    httpMock.expectOne(endsWith({url: 'auth', method: 'POST'})).flush({reason: 'reason'}, {
      status: 401, statusText: 'Unauthorized'
    });
    spectator.detectChanges();

    console.log(spectator.query(LoginFormComponent)?.error);
    expect(spectator.query(LoginFormComponent)?.error).toEqual('reason');
  });

  it('should redirect on request success', () => {
    const navigateSpy = spyOn(router, 'navigate');

    spectator.triggerEventHandler(LoginFormComponent, 'formSubmit', {} as RegisterForm);
    httpMock.expectOne(endsWith({url: 'auth', method: 'POST'})).flush({});

    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});

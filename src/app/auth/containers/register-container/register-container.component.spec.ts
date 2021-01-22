import { RegisterContainerComponent } from './register-container.component';
import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {RegisterForm, RegisterFormComponent} from "@auth/components/register-form/register-form.component";
import {MockComponents} from "ng-mocks";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {endsWith, testId} from "@test/http-predicates";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {ApiModule} from "@api/api.module";
import {SharedModule} from "@app/shared/shared.module";

describe('RegisterContainerComponent', () => {
  let spectator: Spectator<RegisterContainerComponent>;
  let httpMock: HttpTestingController;
  let router: Router;
  const createComponent = createComponentFactory({
    component: RegisterContainerComponent,
    imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
    declarations: MockComponents(RegisterFormComponent)
  });

  beforeEach(() => {
    spectator = createComponent();
    httpMock = spectator.inject(HttpTestingController);
    router = spectator.inject(Router);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show form on init', () => {
    expect(spectator.query(RegisterFormComponent)).toBeTruthy();
  });

  it('should hide success block on init', () => {
    expect(spectator.query(testId('success-block'))).toBeNull();
  });

  it('should send register request on form submit output', () => {
    const value = {username: 'asd'} as RegisterForm;

    spectator.triggerEventHandler(RegisterFormComponent, 'formSubmit', value);

    const req = httpMock.expectOne(endsWith({url: 'auth/register', method: 'POST'}));
    expect(req.request.body).toEqual(value);
  });

  it('should not send register request on form submit while last one didnt resolved', () => {
    const value = {username: 'asd'} as RegisterForm;

    spectator.triggerEventHandler(RegisterFormComponent, 'formSubmit', value);
    spectator.triggerEventHandler(RegisterFormComponent, 'formSubmit', value);

    httpMock.expectOne(endsWith({url: 'auth/register', method: 'POST'}));
  });

  it('should pass error to form if register request failed', () => {
    const value = {username: 'asd'} as RegisterForm;

    spectator.triggerEventHandler(RegisterFormComponent, 'formSubmit', value);
    httpMock.expectOne(endsWith({url: 'auth/register', method: 'POST'}))
      .flush({reason: 'reason'}, {status: 400, statusText: 'Bad request'});

    spectator.detectChanges();
    expect(spectator.query(RegisterFormComponent)?.error).toEqual(['reason']);
  });

  it('should hide form on register success', () => {
    const value = {username: 'asd'} as RegisterForm;

    spectator.triggerEventHandler(RegisterFormComponent, 'formSubmit', value);
    httpMock.expectOne(endsWith({url: 'auth/register', method: 'POST'})).flush({});

    spectator.detectChanges();
    expect(spectator.query(RegisterFormComponent)).toBeNull();
  });

  it('should show success block on register success', () => {
    const value = {username: 'asd'} as RegisterForm;

    spectator.triggerEventHandler(RegisterFormComponent, 'formSubmit', value);
    httpMock.expectOne(endsWith({url: 'auth/register', method: 'POST'})).flush({});

    spectator.detectChanges();
    expect(spectator.query(testId('success-block'))).not.toBeNull();
  });

  it('goToLogin button should navigate to login on click', () => {
    const value = {username: 'asd'} as RegisterForm;
    const navigateSpy = spyOn(router, 'navigate');

    spectator.triggerEventHandler(RegisterFormComponent, 'formSubmit', value);
    httpMock.expectOne(endsWith({url: 'auth/register', method: 'POST'})).flush({});

    spectator.detectChanges();
    spectator.click(testId('go-to-login'));

    expect(navigateSpy).toHaveBeenCalledWith(['auth']);
  });
});

import {LoginForm, LoginFormComponent} from './login-form.component';
import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@app/shared/shared.module";

describe('LoginFormComponent', () => {
  let spectator: Spectator<LoginFormComponent>;
  const createComponent = createComponentFactory({
    component: LoginFormComponent,
    imports: [ReactiveFormsModule, SharedModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  const fullValidData: LoginForm = {
    username: 'defaultname123',
    password: 'qwerty123'
  };

  const invalidDataPatches = [{username: ''}, {password: ''}];

  test.each(invalidDataPatches)('should not submit on invalid data', i => {
    const spy = spyOn(spectator.component.formSubmit, 'emit');
    spectator.component.formGroup.patchValue(fullValidData);
    spectator.component.formGroup.patchValue(i);

    spectator.component.onFormSubmit();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should emit submit form on form submit', () => {
    const spy = spyOn(spectator.component.formSubmit, 'emit');
    spectator.component.formGroup.patchValue(fullValidData);

    spectator.query<HTMLFormElement>('form')?.submit();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

import {RegisterForm, RegisterFormComponent} from './register-form.component';
import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "@app/shared/shared.module";

describe('RegisterFormComponent', () => {
  let spectator: Spectator<RegisterFormComponent>;
  const createComponent = createComponentFactory({
    component: RegisterFormComponent,
    imports: [ReactiveFormsModule, SharedModule]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  const fullValidData: RegisterForm = {
    username: 'defaultname123',
    password: 'qwerty123',
    firstName: 'John',
    lastName: 'Doe',
    departmentId: 2
  };

  const validDataPatches = [{lastName: ''}, {departmentId: undefined}];
  const invalidDataPatches = [{username: ''}, {password: ''}, {firstName: ''}];

  test.each(validDataPatches)('should submit on valid data', i => {
    const spy = spyOn(spectator.component.formSubmit, 'emit');
    spectator.component.formGroup.patchValue(fullValidData);
    spectator.component.formGroup.patchValue(i);

    spectator.component.onFormSubmit();

    expect(spy).toHaveBeenCalled();
  });

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

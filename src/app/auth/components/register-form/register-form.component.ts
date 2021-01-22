import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {IFormBuilder, IFormGroup} from "@rxweb/types";
import {Empty} from "@app/shared/types/Empty";

export interface RegisterForm {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  departmentId: number;
}

@Component({
  selector: 'nauka-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {
  formGroup: IFormGroup<RegisterForm>;

  @Input() error: string | string[] | Empty;
  @Output() formSubmit = new EventEmitter<RegisterForm>();

  get errorList(): string[] {
    if (!this.error) return [];

    return ([] as string[]).concat(this.error);
  }

  constructor(fb: FormBuilder) {
    this.formGroup = this.createFormGroup(fb);
  }

  onFormSubmit() {
    const value = this.formGroup.value;
    if (this.formGroup.valid && value) {
      this.formSubmit.emit(value);
    }
  }

  private createFormGroup(fb: IFormBuilder) {
    return fb.group<RegisterForm>({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: [''],
      departmentId: [null],
    });
  }
}

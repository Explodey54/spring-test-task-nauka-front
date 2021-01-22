import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IFormBuilder, IFormGroup} from "@rxweb/types";
import {FormBuilder, Validators} from "@angular/forms";
import {Empty} from "@app/shared/types/Empty";

export interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'nauka-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  @Input() error: string | Empty;
  @Output() formSubmit = new EventEmitter<LoginForm>();
  formGroup: IFormGroup<LoginForm>;

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
    return fb.group<LoginForm>({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}

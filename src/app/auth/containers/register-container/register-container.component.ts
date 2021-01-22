import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RegisterForm} from "@auth/components/register-form/register-form.component";
import {BehaviorSubject, timer} from "rxjs";
import {Router} from "@angular/router";
import {RegisterRequest} from "@api/models/register-request";
import {AuthControllerService} from "@api/services";
import {HttpErrorResponse} from "@angular/common/http";
import {Empty} from "@app/shared/types/Empty";

@Component({
  selector: 'nauka-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterContainerComponent {
  loading$ = new BehaviorSubject(false);
  error$ = new BehaviorSubject<string[] | Empty>([]);
  info$ = new BehaviorSubject<string[]>([]);
  isRegisterSuccess$ = new BehaviorSubject(false);

  constructor(private auth: AuthControllerService, private router: Router) {
  }

  onFormSubmit(value: RegisterForm) {
    if (this.loading$.value) return;
    this.loading$.next(true);
    this.setError(null);

    this.register(value).subscribe(
      () => {
        this.info$.next([
          'Register successful!',
          'Go to login page to authorize'
        ]);
        this.isRegisterSuccess$.next(true);
        this.loading$.next(false);
      },
      (err: HttpErrorResponse) => {
        this.setError([err.error.reason]);
        this.loading$.next(false);
      },
    )
  }

  register(body: RegisterRequest) {
    return this.auth.createUserUsingPOST(body);
  }

  goToLogin() {
    this.router.navigate(['auth']);
  }

  private setError(value: string[] | null, delay = 3000): void {
    this.error$.next(value);
    if (value) {
      timer(delay).subscribe(() => this.error$.next(null));
    }
  }
}

import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginForm} from "@auth/components/login-form/login-form.component";
import {BehaviorSubject, timer} from "rxjs";
import {AuthService} from "@core/auth/auth.service";
import {Empty} from "@app/shared/types/Empty";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'nauka-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {
  error$ = new BehaviorSubject<string | Empty>(null);
  loading$ = new BehaviorSubject(false);

  constructor(private auth: AuthService, private router: Router) { }

  onFormSubmit({username, password}: LoginForm) {
    this.setError(null);
    if (this.loading$.value) return;

    this.loading$.next(true);
    this.auth.login(username, password).subscribe(
      () => this.router.navigate(['/']),
      (err: HttpErrorResponse) => {
        this.setError(err.error?.reason);
        this.loading$.next(false);
      }
    );
  }

  private setError(value: string | null, delay = 3000): void {
    this.error$.next(value);
    if (value) {
      timer(delay).subscribe(() => this.error$.next(null));
    }
  }
}

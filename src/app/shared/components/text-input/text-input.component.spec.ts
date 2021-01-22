import { TextInputComponent } from './text-input.component';
import {createHostFactory, Spectator} from "@ngneat/spectator";
import {ReactiveFormsModule} from "@angular/forms";

describe('TextInputComponent', () => {

  let spectator: Spectator<TextInputComponent>;
  const createComponent = createHostFactory({
    component: TextInputComponent,
    imports: [ReactiveFormsModule]
  });

  it('should create', () => {
    spectator = createComponent('<nauka-text-input></nauka-text-input>');
    expect(spectator.component).toBeTruthy();
  });

  it('should write to onChange on text input', () => {
    spectator = createComponent('<nauka-text-input></nauka-text-input>');
    const spy = spyOn(spectator.component, 'onChange');
    spectator.component.value.setValue('asd')

    expect(spy).toHaveBeenCalledWith('asd');
  });

  it('should show title input', () => {
    spectator = createComponent('<nauka-text-input [title]="title"></nauka-text-input>', {
      hostProps: { title: 'Input Test' }
    });

    expect(spectator.element.innerHTML).toContain('Input Test');
  });

  it('should show error input', () => {
    spectator = createComponent('<nauka-text-input [error]="error"></nauka-text-input>', {
      hostProps: { error: 'Wrong data' }
    });

    expect(spectator.element.innerHTML).toContain('Wrong data');
  });
});

import { ButtonComponent } from './button.component';
import {createHostFactory, SpectatorHost} from "@ngneat/spectator";

describe('ButtonComponent', () => {
  let spectator: SpectatorHost<ButtonComponent>;
  const createHost = createHostFactory(ButtonComponent);

  it('should create', () => {
    spectator = createHost(`<nauka-button></nauka-button>`);
    expect(spectator.component).toBeTruthy();
  });

  it('should show text content', () => {
    spectator = createHost(`<nauka-button>Submit content</nauka-button>`);
    expect(spectator.element.innerHTML).toContain('Submit content');
  });

  it('should emit press event on click', () => {
    spectator = createHost(`<nauka-button></nauka-button>`);
    const spy = spyOn(spectator.component.pressed, 'emit');
    spectator.element.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'nauka-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Output() pressed = new EventEmitter();
  @Input() type : 'button' | 'submit' = 'button';

  @HostListener('click')
  onClick() {
    this.pressed.emit();
  }
}

import {ChangeDetectionStrategy, Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'nauka-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextInputComponent),
    multi: true
  }]
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @Input() type = 'text';
  @Input() title = '';
  @Input() error = '';

  value = new FormControl('');
  onChange = (value: string) => {};

  ngOnInit() {
    this.value.valueChanges.subscribe(i => this.onChange(i));
  }

  writeValue(input: string): void {
    this.value.setValue(input);
    this.onChange(input);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
}

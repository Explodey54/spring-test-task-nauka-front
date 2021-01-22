import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';
import {ApiModule} from "@api/api.module";
import { TransformPipe } from './pipes/transform.pipe';

const declarations = [
  TextInputComponent,
  ButtonComponent,
  TransformPipe
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule,
    ...declarations
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdModalBasic } from './modal-basic';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule, ReactiveFormsModule, AutocompleteLibModule],
  declarations: [NgbdModalBasic],
  exports: [NgbdModalBasic],
  bootstrap: [NgbdModalBasic]
})
export class NgbdModalBasicModule {}

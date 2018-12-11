import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { TestInputComponent } from './test-input/test-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    TestInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

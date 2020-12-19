import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { MultiSelectListComponent } from './multi-select/multi-select-list/multi-select-list.component';
import {ScrollTrackerDirective} from './scroll-tracker.directive';

@NgModule({
    declarations: [
        AppComponent,
        MultiSelectComponent,
        MultiSelectListComponent,
        ScrollTrackerDirective
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

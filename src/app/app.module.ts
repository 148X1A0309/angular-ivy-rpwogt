import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {InterpolationComponent} from './interpolation/interpolation.component'
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,InterpolationComponent,TasksComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

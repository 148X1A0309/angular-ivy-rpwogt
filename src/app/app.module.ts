import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TasksComponent } from './tasks/tasks.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent ,InterpolationComponent,TasksComponent, PopUpComponent,FormsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlltaskComponent } from './alltask/alltask.component';
import { AppTaskRouteModule } from './app-task-routing.module';

import { TaskComponent } from './task.component';


@NgModule({
  declarations: [
   TaskComponent,
   AlltaskComponent
   
   
  ],
  imports: [
   RouterModule,
   AppTaskRouteModule,
   ReactiveFormsModule,
   HttpClientModule,
    CommonModule
  ]
  
})
export class TaskModule { }

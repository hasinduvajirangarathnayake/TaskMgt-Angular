import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [

  {path:'', redirectTo:'/task' , pathMatch:'full'},
  
  {path:'task', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
  {path:'forms', component: FormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {  NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlltaskComponent } from "./alltask/alltask.component";

import { TaskComponent } from "./task.component";

const alltaskrout: Routes = [
            {
        path: '',
        component: TaskComponent
            },
            {
                path:'alltask',
                component:AlltaskComponent
            }
        
        ]
        
@NgModule({
    imports: [RouterModule.forChild(alltaskrout)],
    exports: [RouterModule]
})

export class AppTaskRouteModule{}
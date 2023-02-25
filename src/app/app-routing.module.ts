import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./component/main/main.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

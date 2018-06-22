import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home',component:HomeComponent},
  {path:'pList',component:ListComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'new',component:CreateComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

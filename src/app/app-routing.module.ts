import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowallpositionsComponent } from './showallpositions/showallpositions.component'



const routes: Routes = [
  {path: '', component: ShowallpositionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

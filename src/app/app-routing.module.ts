import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
 ];
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true } ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

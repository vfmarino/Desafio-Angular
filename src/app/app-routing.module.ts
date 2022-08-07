import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './home/component-home/component-home.component';
import { ComponentListaComponent } from './lista/component-lista/component-lista.component';

const routes: Routes = [
  { path: '', component: ComponentHomeComponent },
  { path: 'home', component: ComponentHomeComponent },
  { path: 'lista', component: ComponentListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { FORM_ROUTING } from './form.routing';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = FORM_ROUTING;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormRoutingModule {}

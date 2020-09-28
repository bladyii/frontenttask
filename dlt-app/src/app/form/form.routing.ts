import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

export const FORM_ROUTING: Routes = [
  {
    path: ':id',
    component: FormComponent,
  },
];

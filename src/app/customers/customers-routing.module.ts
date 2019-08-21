import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNameComponent } from './customer-name/customer-name.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path : 'customername',
    component : CustomerNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CustomPreloading } from './common/CustomPreloading';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: 'customers',
    // component : CustomerListComponent
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule),
    data: {
      preload: true
    }
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //uncomment for custome preloading
      // preloadingStrategy: CustomPreloading
      // preloadingStrategy: PreloadAllModules

    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

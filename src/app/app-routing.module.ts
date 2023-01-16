import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { FarmerToolsSupplierComponent } from './components/farmer-tools-supplier/farmer-tools-supplier.component';
import { WholesellerComponent } from './components/wholeseller/wholeseller.component';
import { ShopkeeperComponent } from './components/shopkeeper/shopkeeper.component';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { IndexComponent } from './components/index/index.component';
import { MyordersComponent } from './components/myorders/myorders.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: IndexComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'addProduct', component: AddproductsComponent },
  { path: 'addToCart', component: MycartComponent },
  { path: 'viewProducts', component: ViewproductsComponent },
  { path: 'farmerdashboard', component: FarmerComponent },
  { path: 'supplierDashboard', component: FarmerToolsSupplierComponent },
  { path: 'wholeSellerDashboard', component: WholesellerComponent },
  { path: 'shopKeeperDashboard', component: ShopkeeperComponent },
  { path: 'consumerDashboard', component: ConsumerComponent },
  { path: 'myOrders', component: MyordersComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerComponent } from './components/farmer/farmer.component';
import { FarmerToolsSupplierComponent } from './components/farmer-tools-supplier/farmer-tools-supplier.component';
import { WholesellerComponent } from './components/wholeseller/wholeseller.component';
import { ShopkeeperComponent } from './components/shopkeeper/shopkeeper.component';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { IndexComponent } from './components/index/index.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './components/popup/popup.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    FarmerToolsSupplierComponent,
    WholesellerComponent,
    ShopkeeperComponent,
    ConsumerComponent,
    SignupComponent,
    SigninComponent,
    AddproductsComponent,
    ViewproductsComponent,
    MycartComponent,
    MyordersComponent,
    IndexComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from 'src/app/model/signup';
import { SignIn } from 'src/app/model/signin';
import { Observable } from 'rxjs';
import { Status } from '../model/status';
import { AddProducts } from '../model/addproducts';
import { Orderr } from '../model/orderr';
import { MyOrders } from '../model/myorders';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  SIGNUP_API = 'http://localhost:8585/farm/api/users/signUp/';
  SIGNIN_API = 'http://localhost:8585/farm/api/users/signIn/';
  SIGNOUT_API = 'http://localhost:8585/farm/api/users/logout/';
  ADD_PRODUCTS_API = 'http://localhost:8585/farm/api/users/addProducts/';
  VIEW_PRODUCTS_API = 'http://localhost:8585/farm/api/users/allProducts/';
  PROCESS_ORDER_API = 'http://localhost:8585/farm/api/users/placeOrder/';
  GET_ALL_ORDERS_API = 'http://localhost:8585/farm/api/users/myOrders/';
  GET_ALL_CUSTOMERS_API = 'http://localhost:8585/farm/api/users/customers/';

  constructor(private http: HttpClient) {}

  public signUp(signUp: SignUp) {
    return this.http.put(this.SIGNUP_API, signUp, {
      responseType: 'text' as 'json',
    });
  }

  public signIn(signIn: SignIn) {
    return this.http.post<Status>(this.SIGNIN_API, signIn);
  }

  public logOut(roleId: String) {
    return this.http.get<Status>(this.SIGNOUT_API + roleId + '/');
  }

  public addProducts(addProduct: AddProducts) {
    return this.http.post<Status>(this.ADD_PRODUCTS_API, addProduct);
  }

  public viewAllRelevantProducts(role: String) {
    return this.http.get<any[]>(this.VIEW_PRODUCTS_API + role + '/');
  }

  public processOrder(order: Orderr, type: String) {
    return this.http.post<Status>(this.PROCESS_ORDER_API + type + '/', order);
  }

  public getAllOrders(roleId: String, type: String) {
    return this.http.get<MyOrders[]>(
      this.GET_ALL_ORDERS_API + roleId + '/' + type + '/'
    );
  }

  public fetchAllCustomers(roleId: String) {
    return this.http.get<Status[]>(this.GET_ALL_CUSTOMERS_API + roleId + '/');
  }
}

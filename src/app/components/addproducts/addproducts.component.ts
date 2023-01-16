import { Component, OnInit } from '@angular/core';
import { AddProducts } from 'src/app/model/addproducts';
import { Status } from 'src/app/model/status';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css'],
})
export class AddproductsComponent implements OnInit {
  addProduct: AddProducts = new AddProducts();
  roleId = '';
  role = '';
  redirectedPage = '';
  status: Status = new Status();
  constructor(
    private service: ApiServiceService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public addProducts(addProduct: AddProducts) {
 
    this.role = localStorage.getItem('role')!;
    this.roleId = localStorage.getItem('roleId')!;
    addProduct.productAddedBy = this.role;
    addProduct.productAddedById = this.roleId;

    this.service.addProducts(addProduct).subscribe((data) => {
      this.status = data;
    
      if (this.status.code == '200') {
        if (this.role == 'SUPPLIER') {
          this.role = 'SUPPLIER';
          this.redirectedPage = '/supplierDashboard';
        }
        if (this.role == 'FARMER') {
          this.role = 'FARMER';
          this.redirectedPage = '/farmerdashboard';
        }
        if (this.role == 'WHOLE SELLER') {
          this.role = 'WHOLE SELLER';
          this.redirectedPage = '/wholeSellerDashboard';
        }
        if (this.role == 'SHOPKEEPER') {
          this.role = 'SHOPKEEPER';
          this.redirectedPage = '/shopKeeperDashboard';
        }
        if (this.role == 'CONSUMER') {
          this.role = 'CONSUMER';
          this.redirectedPage = '/consumerDashboard';
        }
      }
      this.openSnackBar(
        this.status.message,
        'OK',
        this.role,
        this.redirectedPage
      );
    });

  }

  public openSnackBar(
    message: any,
    close: any,
    userRole: String,
    redirectedPage: String
  ) {
    let s = this.matSnackBar.open(message, close);

    s.onAction().subscribe(() => {
      this.router.navigate([redirectedPage]);
    });
  }
}

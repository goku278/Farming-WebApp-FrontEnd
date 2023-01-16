import { Component, OnInit } from '@angular/core';
import { AddProducts } from 'src/app/model/addproducts';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css'],
})
export class ViewproductsComponent implements OnInit {
  role = '';
  redirectedPage = '';
  viewProducts: any;
  combinedProducts = '';
  constructor(
    private service: ApiServiceService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.viewAllProducts();
  }

  public prompt(p: AddProducts) {
    this.role = localStorage.getItem('roleId')!;
    p.productAddedBy = this.role;
    this.combinedProducts =
      p.productAddedBy + // buyerId
      ' # ' +
      p.productAddedById + // sellerId
      ' # ' +
      p.productId; // productId

    localStorage.setItem('combinedProducts', this.combinedProducts);
    this.processProduct();
  }

  public processProduct() {
    this.dialog.open(PopupComponent, {
      width: '22%',
      height: '25%',
      disableClose: false,
    });
  }

  public viewAllProducts() {
    this.role = localStorage.getItem('role')!;
    this.service.viewAllRelevantProducts(this.role).subscribe((data) => {
      this.viewProducts = data;
    });
  }

  public back() {
    this.role = localStorage.getItem('role')!;
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
    this.router.navigate([this.redirectedPage]);
  }
}
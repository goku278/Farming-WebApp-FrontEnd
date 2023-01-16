import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { AddproductsComponent } from '../addproducts/addproducts.component';
@Component({
  selector: 'app-farmer-tools-supplier',
  templateUrl: './farmer-tools-supplier.component.html',
  styleUrls: ['./farmer-tools-supplier.component.css'],
})
export class FarmerToolsSupplierComponent implements OnInit {
  roleId = '';
  constructor(
    private el: ElementRef,
    private router: Router,
    private dialog: MatDialog,
    private service: ApiServiceService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public logOut() {
    this.roleId = localStorage.getItem('roleId')!;
    localStorage.setItem('isLogin', 'false');
    this.service.logOut(this.roleId).subscribe((data) => {
        this.openSnackBar(data.message,'OK',"","/index");
    });
    this.router.navigate(['/index']);
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

  public addProducts() {
    this.dialog.open(AddproductsComponent, {
      width: '50%',
      height: '97%',
      disableClose: false,
    });
    // this.router.navigate(['/addProduct']);
  }

  public viewProducts() {
    this.router.navigate(['/viewProducts']);
  }
}

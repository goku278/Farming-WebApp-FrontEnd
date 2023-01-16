import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Status } from 'src/app/model/status';
import { MyordersComponent } from '../myorders/myorders.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-wholeseller',
  templateUrl: './wholeseller.component.html',
  styleUrls: ['./wholeseller.component.css'],
})
export class WholesellerComponent implements OnInit {
  roleId = '';
  status: Status[] = [];
  constructor(
    private router: Router,
    private service: ApiServiceService,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
      this.fetchAllCustomer();
  }

  public myOrders(type: string) {
    localStorage.setItem('orderOrcart',type);
    this.dialog.open(MyordersComponent, {
      width: '50%',
      height: '70%',
      disableClose: false,
    });
    // this.router.navigate(['/myOrders']);
  }

  public fetchAllCustomer() {
    this.roleId = localStorage.getItem('roleId')!;
    this.service.fetchAllCustomers(this.roleId).subscribe((data) => {
        this.status = data;
    });
  }

  public logOut() {
    localStorage.setItem('isLogin', 'false');
    this.roleId = localStorage.getItem('roleId')!;
    this.service.logOut(this.roleId).subscribe((data) => {
      this.openSnackBar(data.message, 'OK', '', '/index');
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

  public viewProducts() {
    this.router.navigate(['/viewProducts']);
  }
}

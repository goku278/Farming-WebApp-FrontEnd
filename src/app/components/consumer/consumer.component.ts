import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MyordersComponent } from '../myorders/myorders.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css'],
})
export class ConsumerComponent implements OnInit {
  roleId = '';
  constructor(
    private router: Router,
    private service: ApiServiceService,
    private dialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public logOut() {
    localStorage.setItem('isLogin', 'false');
    this.roleId = localStorage.getItem('roleId')!;
    this.service.logOut(this.roleId).subscribe((data) => {
      this.openSnackBar(data.message, 'OK', '', '/index');
    });
    this.router.navigate(['/index']);
  }

  public viewProducts() {
    this.router.navigate(['/viewProducts']);
  }

  public myOrders(type: string) {
    localStorage.setItem('orderOrcart',type);
    this.dialog.open(MyordersComponent, {
      width: '50%',
      height: '70%',
      disableClose: false,
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

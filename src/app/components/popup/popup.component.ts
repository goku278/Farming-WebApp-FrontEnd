import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProducts } from 'src/app/model/addproducts';
import { Status } from 'src/app/model/status';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderr } from 'src/app/model/orderr';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  order: Orderr = new Orderr();
  p1 = '';
  status: Status = new Status();
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private service: ApiServiceService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public processOrder(p: String) {
    this.p1 = localStorage.getItem('combinedProducts')!;
    this.parseProducts(this.p1);
    this.service.processOrder(this.order, p).subscribe((data) => {
      if (data.code == '200') {
        this.openSnackBar(data.message!, 'OK');
      } else if (data.code == '500') {
        this.errMsg(data.message!);
      }
    });
  }

  public openSnackBar(msg: string, closeMsg: string) {
    let s = this.matSnackBar.open(msg, closeMsg);

    s.onAction().subscribe(() => {
      this.router.navigate(['/viewProducts']);
    });
  }

  public errMsg(errMsg: String) {
    alert(errMsg);
  }

  public parseProducts(p: String) {
    let temProducts = p.split(' # ');
    this.order.buyerId = temProducts[0];
    this.order.sellerId = temProducts[1];
    this.order.productId = temProducts[2];
  }
}

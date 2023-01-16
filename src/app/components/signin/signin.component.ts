import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/model/status';
import { SignIn } from 'src/app/model/signin';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiServiceService } from 'src/app/service/api-service.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signin: SignIn = new SignIn();
  userRole = '';
  redirectedPage = '';
  // status?: Status[] = [];
  constructor(
    private router: Router,
    private service: ApiServiceService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  signIn(signin: SignIn) {
    this.service.signIn(signin).subscribe((data) => {
      localStorage.setItem('role', data.userRole + '');
      localStorage.setItem('roleId', data.userId + '');

      if (data.code == '200') {
        if (data.userRole == 'SUPPLIER') {
          this.userRole = 'SUPPLIER';
          this.redirectedPage = '/supplierDashboard';
        }
        if (data.userRole == 'FARMER') {
          this.userRole = 'FARMER';
          this.redirectedPage = '/farmerdashboard';
        }
        if (data.userRole == 'WHOLE SELLER') {
          this.userRole = 'WHOLE SELLER';
          this.redirectedPage = '/wholeSellerDashboard';
        }
        if (data.userRole == 'SHOPKEEPER') {
          this.userRole = 'SHOPKEEPER';
          this.redirectedPage = '/shopKeeperDashboard';
        }
        if (data.userRole == 'CONSUMER') {
          this.userRole = 'CONSUMER';
          this.redirectedPage = '/consumerDashboard';
        }
      }

      this.openSnackBar(
        'SignIn successful!',
        'OK',
        this.userRole,
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
      localStorage.setItem('isLogin', 'true');
      this.router.navigate([redirectedPage]);
    });
  }
}

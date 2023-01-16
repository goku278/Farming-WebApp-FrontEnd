import { Component, OnInit } from '@angular/core';
import { SignUp } from 'src/app/model/signup';
import { Status } from 'src/app/model/status';
import { ApiServiceService } from 'src/app/service/api-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: SignUp = new SignUp();
  // status: Status = new Status();
  roles: string[] = [
    'ADMIN',
    'SUPPLIER',
    'FARMER',
    'WHOLE SELLER',
    'SHOP KEEPER',
    'CONSUMER',
  ];
  selected: string = 'Choose Role';
  constructor(private service: ApiServiceService) {}

  ngOnInit(): void {}

  public signup(user: SignUp) {
    user.role = this.selected;
    let resp = this.service.signUp(this.user);
    resp.subscribe((data) => {
      // data;
    });
  }
}

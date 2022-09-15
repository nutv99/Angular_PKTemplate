//import { AuthService } from 'pickalllib';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from 'pickalllib';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '../../../../projects/pickalllib/src/lib/service/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  myForm!: FormGroup;
  username: string = '';
  passw: string = '';
  returnUrl!: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private route:Router
  ) {
    this.myForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  doLogin() {
    let url =
      'https://lovetoshopmall.com/dataservice/checkuser.php?username=' +
      this.myForm.value.username +
      '&password=' +
      this.myForm.value.password;
    this.http.get<any>(url).subscribe((result) => {
      let bb = JSON.parse(result);
      this.auth.setAuthuser(this.myForm.value.username, bb.jwt);
      this.route.navigate(['/'] );

      //setAuthUser(username : string ,jwt:string)
      //this.auth.setAuthUser(this.myForm.value.username,bb.jwt) ;
    });
  }
}

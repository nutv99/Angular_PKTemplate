import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  passw: string = '';
  returnUrl!: string;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  doLogin(sUserName : string,sPassword: string) {

      console.log(sUserName)

  }

}

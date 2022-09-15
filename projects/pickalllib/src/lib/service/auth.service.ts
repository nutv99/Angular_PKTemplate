import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable,map} from "rxjs";

import * as _ from 'lodash';

interface dataResult {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}


@Injectable({
  providedIn: 'root'
})



export class AuthService {

  constructor() { }

  getAuthUser() {

    let jwt = window.localStorage.getItem('jwt') ;
    if (jwt) {
      return true ;
    } else {
      return false;
    }
  }

  setAuthuser(username: string, jwt: string) {
    window.localStorage.setItem('jwt',jwt) ;
  }



}

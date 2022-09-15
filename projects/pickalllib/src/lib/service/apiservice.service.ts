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



export class ApiserviceService {

dataResult$!: Observable<any[]>;

  constructor(private http:HttpClient) { }

  getData(url:string):Observable<any> {
    return this.http.get<dataResult[]>(url)
  }

  postData() {

  }
  patchData() {

  }



}

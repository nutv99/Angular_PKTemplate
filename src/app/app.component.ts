import { ProjectconfigService,SERVER_ENDPOINT  } from './../../projects/pickalllib/src/lib/service/projectconfig.service';
// import { departmant } from './../../projects/pickalllib/src/lib/model/shopproject';
//import { PickalllibService } from './../../projects/pickalllib/src/lib/pickalllib.service';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { Component,isDevMode } from '@angular/core';
import { PickalllibService } from 'pickalllib';
import { Shopproject, departmant } from 'pickalllib';
import { ApiserviceService} from 'pickalllib';


import {} from 'pickalllib';
import { Observable, map } from 'rxjs';
import { Subscription, Subject, switchMap, debounceTime, pipe } from 'rxjs';
import { LoginComponent } from 'pickalllib';


import { environment } from '../environments/environment';
//import { MatInputModule } from 'pickalllib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testlib';
  compCode = '';
  departmentModel = {} as departmant;
  dataResult: any;
  subscription?: Subscription;

  constructor(
    private PickalllibService: PickalllibService,
    private aa: HttpClient,
    private myapiService: ApiserviceService
  ) {

    if (isDevMode()) {
      console.log('Mode Development!');
    } else {
      console.log('Mode Production!');
    }
    let assa = SERVER_ENDPOINT;
  }

  getData999() :any {
    if (this.subscription) {
      console.log('UnSubscribe');
      this.subscription.unsubscribe();
    }
    const aaa$ = this.myapiService.getData(
      'https://lovetoshopmall.com/dataservice/categoryTest.php'
    );
    this.subscription = aaa$.subscribe((dataResultA) => {
      console.log('DataResult ', dataResultA);
      this.dataResult = dataResultA;
    });
  }
}
//ng generate library common-utility-lib
//ng generate library pickalllib

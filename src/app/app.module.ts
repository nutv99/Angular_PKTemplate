//import { AuthService } from 'pickalllib';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from 'pickalllib';
import { MaterialModule } from 'pickalllib';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { ApiserviceService} from 'pickalllib';
import { AuthService } from './../../projects/pickalllib/src/lib/service/auth.service';

// import  *  as pklib from 'pickalllib';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';

import { FrmCategoryComponent } from './pages/frm-category/frm-category.component';
import { FrmDeparementComponent } from './pages/frm-deparement/frm-deparement.component';
import { FrmGroupItemComponent } from './pages/frm-group-item/frm-group-item.component';



@NgModule({
  declarations: [AppComponent, LoginpageComponent, FrmCategoryComponent, FrmDeparementComponent, FrmGroupItemComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    MatSliderModule,



  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

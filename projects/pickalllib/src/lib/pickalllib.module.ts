import { NgModule } from '@angular/core';
import { PickalllibComponent } from './pickalllib.component';
import { PkpipePipe } from './pipe/pkpipe.pipe';
import { GetDataDirective } from './directive/get-data.directive';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    PickalllibComponent,
    PkpipePipe,
    GetDataDirective,
    LoginComponent
  ],
  imports: [
  ],
  exports: [
    PickalllibComponent
  ]
})
export class PickalllibModule { }

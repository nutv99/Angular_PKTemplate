
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthguardGuard } from './guard/authguard.guard';

import { FrmGroupItemComponent } from './pages/frm-group-item/frm-group-item.component';
import { FrmCategoryComponent } from './pages/frm-category/frm-category.component';
import { FrmDeparementComponent } from './pages/frm-deparement/frm-deparement.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
// import { AuthguardGuard } from '



const routes: Routes = [
      {
        path: 'department',
        component: FrmDeparementComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'category',
        component: FrmCategoryComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'groupitem',
        component: FrmGroupItemComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'login',
        component: LoginpageComponent,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { UserComponent } from './Register/user/user.component';

const routes: Routes = [
  {path:'',redirectTo:'/user',pathMatch:'full'},
  {path:'user',component:UserComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

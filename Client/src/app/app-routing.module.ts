import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { NewUserComponent } from "./new-user/new-user.component";
import { AddPersonComponent } from "./add-person/add-person.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: 'user',
        component: NewUserComponent
      },
      {
        path: 'person',
        component: AddPersonComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

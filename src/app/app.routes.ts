import { Routes } from '@angular/router';
import {LoginFormComponentComponent} from "./login-form-component/login-form-component.component";
import {RegistrationFormComponentComponent} from "./registration-form-component/registration-form-component.component";
import {AppComponent} from "./app.component";
import {HomeComponentComponent} from "./home-component/home-component.component";

export const routes: Routes = [

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //login route
  {
    path:'login',
    component :LoginFormComponentComponent
  },

  //register route
  {
    path: 'register',
    component: RegistrationFormComponentComponent
  },

  //home route
  {
    path: 'home',
    component: HomeComponentComponent
  }
];

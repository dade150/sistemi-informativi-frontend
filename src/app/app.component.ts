import {Component, Input} from '@angular/core';
import {NavbarComponentComponent} from "./navbar-component/navbar-component.component";
import {LoginFormComponentComponent} from "./login-form-component/login-form-component.component";
import {RegistrationFormComponentComponent} from "./registration-form-component/registration-form-component.component";
import {
  NewsAdvertisementComponentComponent
} from "./news-advertisement-component/news-advertisement-component.component";
import {PubComponentComponent} from "./pub-component/pub-component.component";
import {CourseCaruselComponent} from "./course-carusel/course-carusel.component";
import {CourseCardComponent} from "./course-card/course-card.component";
import {FooterComponentComponent} from "./footer-component/footer-component.component";
import {LoginResponse} from "../models/LoginResponse";
import {NgIf} from '@angular/common';
import {CourseRegistrationComponent} from "./course-registration/course-registration.component";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {HomeComponentComponent} from "./home-component/home-component.component"; // Importa CommonModule


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponentComponent, LoginFormComponentComponent, RegistrationFormComponentComponent, NewsAdvertisementComponentComponent, PubComponentComponent, CourseCaruselComponent, CourseCardComponent, FooterComponentComponent, NgIf, CourseRegistrationComponent, RouterOutlet, HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'frontend';

  loginResponse :LoginResponse= new LoginResponse();
  showLoginForm: boolean = false;
  showRegisterForm: boolean = false;

  constructor(private router: Router ){

    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.showLoginForm = this.router.url==='/login';
        this.showRegisterForm= this.router.url==='/register';
      }
    })

  }

  handleLoginResponse(event: LoginResponse) {
    //console.log('Login response received:', event);
    //this.loginResponse = event;
    //this.showLoginForm = false;
    //this.showRegisterForm = false;
  }

  toggleLoginForm() {
    console.log('Toggling login form:', this.showLoginForm);
    this.showLoginForm = !this.showLoginForm;

    if (this.showLoginForm) {
      this.showRegisterForm = false;
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/home']);
    }

  }

  toggleRegisterForm() {
    console.log('Toggling register form:', this.showRegisterForm);
    this.showRegisterForm = !this.showRegisterForm;
    if (this.showRegisterForm) {
      this.showLoginForm = false;
      this.router.navigate(['/register']);
    }else {
      this.router.navigate(['/home']);
    }
  }
}

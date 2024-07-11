import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserRegistrationDto} from "../../models/UserRegistrationDto";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-registration-form-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './registration-form-component.component.html',
  styleUrl: './registration-form-component.component.css'
})

export class RegistrationFormComponentComponent {

  firstName: string= 'First Name';
  isButtonDisabled: boolean=true;
  userRegisterRequest : UserRegistrationDto = new UserRegistrationDto();

  constructor(private userService: UserService) {}

  checkFormValidity() {
    this.isButtonDisabled = !(
      this.userRegisterRequest.name &&
      this.userRegisterRequest.lastname &&
      this.userRegisterRequest.email &&
      this.userRegisterRequest.password &&
      this.userRegisterRequest.confirmPassword &&
      this.userRegisterRequest.password === this.userRegisterRequest.confirmPassword
    );
  }


  register(){

    this.userService.register(this.userRegisterRequest).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

}

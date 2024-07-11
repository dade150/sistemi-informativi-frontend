import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserLoginDto} from "../../models/UserLoginDto";
import {FormsModule} from "@angular/forms";
import {LoginResponse} from "../../models/LoginResponse";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login-form-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-form-component.component.html',
  styleUrl: './login-form-component.component.css'
})
export class LoginFormComponentComponent {

  loginRequest :UserLoginDto= new UserLoginDto();
  isButtonDisabled:boolean=true
  loginResponse :LoginResponse= new LoginResponse();

  @Output()
  onResponseLogin= new EventEmitter<LoginResponse>();

  constructor(private userService: UserService) {}

  checkFormValidity() {
    this.isButtonDisabled = !(
      this.loginRequest.email &&
      this.loginRequest.password
    );
  }

  submit() {

    //console.log(this.loginRequest)
    this.userService.login(this.loginRequest).subscribe({
      next: (response) => {
        console.log(response);
        console.log('User log successfully', response);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    })

  }
}

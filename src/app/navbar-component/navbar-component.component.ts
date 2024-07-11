import {Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {LoginResponse} from "../../models/LoginResponse";
import {NgIf} from "@angular/common";
import {NavigationEnd, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './navbar-component.component.html',
  styleUrl: './navbar-component.component.css'
})
export class NavbarComponentComponent {

  @Input('loginResponse') loginResponse: LoginResponse;
  @Output() onLoginClick = new EventEmitter<void>();
  @Output() onRegisterClick = new EventEmitter<void>();

  handleLoginClick() {
    this.onLoginClick.emit();
  }

  handleRegisterClick() {
    this.onRegisterClick.emit();
  }
}

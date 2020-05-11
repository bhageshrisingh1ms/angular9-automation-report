import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/_services';
import { User, Role } from '../_models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser: User;
  collapsed = true;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
  }

  get isUser() {
    return this.currentUser && this.currentUser.role == Role.User;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login'])
  }

}

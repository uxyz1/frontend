import {Component, OnInit} from '@angular/core';
import {SecurityService} from '../security.service';
import {Router} from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private securityService: SecurityService, private router: Router) {
  }

  sessionUser: User | null = null;
  loginData = {
    username: '', password: ''
  };
  flashMessage = '';

  ngOnInit() {
    this.securityService.getSessionUser().subscribe(
      u => this.sessionUser = u
    );
  }

  login() {
    this.securityService.login(this.loginData.username, this.loginData.password);
    this.securityService.getLoginErrorMessage().subscribe(message => this.flashMessage = message);
  }
}

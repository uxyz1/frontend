import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegistrationDTO} from '../../environments/registrationDTO';
import {User } from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationData: RegistrationDTO = {
    username: '',
    password1: '',
    password2: ''
  };
  flashMessage = {message: ''};

  private user: User;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    if (this.registrationData.password1 !== this.registrationData.password2) {
      this.setFlashMessage('Passwords do not match');
    } else if (this.registrationData.username.length < 3 || this.registrationData.username.length > 50) {
      this.setFlashMessage('The username must contain between 3 and 50 characters');
    } else if (this.registrationData.password1.length < 5) {
      this.setFlashMessage('The password must contain minimum 5 characters');
    } else {
      this.http.post<User>('/api/register', {
        username: this.registrationData.username,
        password1: this.registrationData.password1, password2: this.registrationData.password2
      })
        .subscribe(
          user => {
            this.user = user;
            if (user != null) {
              this.setFlashMessage(null);
              this.router.navigateByUrl('/login').then();
            } else {
             this.setFlashMessage('Registration failed');
            }
          });
    }
  }

  setFlashMessage(message: string) {
    this.flashMessage.message = message;
  }
}

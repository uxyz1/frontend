import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, config, Observable} from 'rxjs';
import {User} from './user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private sessionUser = new BehaviorSubject<User | null>(null);
  private loginErrorMessage: string;
  private messageSource = new BehaviorSubject(this.loginErrorMessage);
  private currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.http.get<User>('/api/sessionUser').subscribe(
      u => this.sessionUser.next(u)
    );
  }

  public getSessionUser(): Observable<User | null> {
    return this.sessionUser;
  }

  public getLoginErrorMessage() {
    return this.currentMessage;
  }

  public login(username: string, password: string) {
    this.http.get<User>('/api/sessionUser', {
      headers: {
        authorization: 'Basic ' + btoa(username + ':' + password)
      }
    }).subscribe(
      u => {
        this.sessionUser.next(u);
        this.messageSource.next('');
        this.router.navigateByUrl('/yourprofile');
      },
      () => {
        this.sessionUser.next(null);
        this.messageSource.next('Login unsuccessful');
      }
    );
  }

  public logout() {
    this.http.post('/api/logout', null).subscribe(
      () => {
        this.sessionUser.next(null);
      }
    );
  }
}

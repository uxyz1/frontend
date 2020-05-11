import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {SecurityService} from '../security.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit{
  title = 'frontend';
  sessionUser: User|null = null;

  constructor(private securityService: SecurityService,
              private router: Router) { }

  ngOnInit() {
    this.securityService.getSessionUser().subscribe(
      u => this.sessionUser = u
    );
  }

  logout() {
    this.securityService.logout();
    this.router.navigate(['/']);
  }


}

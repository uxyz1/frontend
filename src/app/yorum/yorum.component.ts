import { Component, OnInit } from '@angular/core';
import {Entry} from '../entry';
import {Yorum} from '../yorum';
import {HttpClient} from '@angular/common/http';
import {SecurityService} from '../security.service';
import {User} from '../user';
import {YorumDTO} from '../yorumDTO';
import {ActivatedRoute, Router} from '@angular/router';
import {EntryService} from '../entry.service';

@Component({
  selector: 'app-yorum',
  templateUrl: './yorum.component.html',
  styleUrls: ['./yorum.component.css']
})
export class YorumComponent implements OnInit {

  sessionUser: User | null = null;
  private id: number;
  private sub: any;
  private idString: string;

  yorumData: YorumDTO = {
    text: '',
  };

  flashMessage = {message: ''};


  private yorum: Yorum;

  constructor(private http: HttpClient,   private securityService: SecurityService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    this.idString = this.id.toString();

    /*this.http.get<Entry[]>('/api/entries')
      .subscribe(entries => this.entries = entries);*/

    /*    this.http.get<Yorum[]>('/api/yorums')
          .subscribe(yorums => {
            this.yorums = yorums;
          });*/
  }
  yorumschreiben(){

    if (this.yorumData.text.length < 1){
      this.setFlashMessage('you must enter something');
    }else{
      this.http.post<Yorum>('/api/yorum/' + this.idString, {
        text: this.yorumData.text,
        id: this.id
      })
        .subscribe(
          yorum => {
            this.yorum = yorum;
            if (yorum != null) {
              this.setFlashMessage(null);
              this.router.navigateByUrl('/').then();
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

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SecurityService} from '../security.service';
import {User} from '../user';
import {Entry} from '../entry';
import {Yorum} from '../yorum';
import {EntryDTO} from '../entryDTO';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  sessionUser: User | null = null;
  private id: number;
  private sub: any;
  private idString: string;

  entryData: EntryDTO = {
    name: '',
  };
   postedAt: Date = new Date();

  flashMessage = {message: ''};
  entries: Entry[] = [];
  entriesIds: number [] = [];
  private entry: Entry;
  private yorums: Yorum[];

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private securityService: SecurityService) {
  }

  ngOnInit(): void {
    this.securityService.getSessionUser().subscribe(
      u => {
        this.sessionUser = u;
        if (u != null) {
          const idUser = this.sessionUser.id.toString();
          this.http.get<Entry[]>('/api/entry/' + idUser)
            .subscribe(entries => {
              this.entries = entries;
              for (const entry of entries) {
                this.entriesIds.push(entry.id);
              }
            });
        }
      }
    );


/*    this.http.get<Entry[]>('/api/entries')
      .subscribe(entries => this.entries = entries);

    this.http.get<Yorum[]>('/api/yorums')
      .subscribe(yorums => {
        this.yorums = yorums;
      });*/
  }

    entryschreiben(){



      this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    // this.idString = this.id.toString();
      const idUser = this.sessionUser.id.toString();
      if (this.entryData.name.length < 1){
      this.setFlashMessage('you must enter something');
    }else{
      this.http.post<Entry>('/api/entry', {
        name: this.entryData.name,
        id: this.sessionUser.id,
        postedAt : this.postedAt
        // id: idUser
         // id: this.id
      })
        .subscribe(
          entry => {
            this.entry = entry;
            if (entry != null) {
              this.setFlashMessage(null);
              this.router.navigateByUrl('/').then();
            } else {
              this.setFlashMessage('entry==null');
            }
          });
/*      this.http.post<User>('/api/entry', {
        user: this.sessionUser
      })
        .subscribe(
          user => {
            this.sessionUser = user;
          }
        );*/

    }
  }

    setFlashMessage(message: string) {
    this.flashMessage.message = message;
  }
}

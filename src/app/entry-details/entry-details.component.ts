import { Component, OnInit } from '@angular/core';
import {Entry} from '../entry';
import {Yorum} from '../yorum';
import {HttpClient} from '@angular/common/http';
import {SecurityService} from '../security.service';
import {ActivatedRoute} from '@angular/router';
import {EntryService} from '../entry.service';
import {User} from '../user';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  private id: number;
  private sub: any;
  private idString: string;
  sessionUser: User | null = null;


  entry: Entry;
  yorums: Yorum[];

  constructor(private http: HttpClient, private securityService: SecurityService,
              private route: ActivatedRoute, private entryService: EntryService) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
    this.idString = this.id.toString();
    this.entryService.currentEntry.subscribe(entry => this.entry = entry);

    this.http.get<Entry>('/api/entries/' + this.idString)
      .subscribe(entry => { this.entry = entry; });

    this.http.get<Yorum[]>('/api/yorum/' + this.idString)
          .subscribe(yorums => {
            this.yorums = yorums;
          });
  }


}

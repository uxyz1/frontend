import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Entry} from '../entry';
import {HttpClient} from '@angular/common/http';
import {SecurityService} from '../security.service';
import {Yorum} from '../yorum';

@Component({
  selector: 'app-solframe',
  templateUrl: './solframe.component.html',
  styleUrls: ['./solframe.component.css']
})
export class SolframeComponent implements OnInit {
  entries: Entry[];
  yorums: Yorum[];

  constructor(private http: HttpClient, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.http.get<Entry[]>('/api/entries')
      .subscribe(entries => this.entries = entries);

/*    this.http.get<Yorum[]>('/api/yorums')
      .subscribe(yorums => {
        this.yorums = yorums;
      });*/
  }

}

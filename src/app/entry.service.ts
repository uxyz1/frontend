import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {Entry} from './entry';

@Injectable({
  providedIn: 'root'
})
export  class EntryService {

  private entry: Entry;
  private entrysource = new BehaviorSubject<Entry>(this.entry);
  currentEntry = this.entrysource.asObservable();

  constructor() {
  }
  setEntry(entry: Entry){
    this.entrysource.next(entry);
  }

}



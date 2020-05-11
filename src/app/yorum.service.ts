import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {Yorum} from './yorum';


@Injectable({
  providedIn: 'root'
})

export class YorumService {

  private yorum: Yorum;
  private yorumSource = new BehaviorSubject<Yorum>(this.yorum);


  constructor() {
  }

  setYorum(yorum: Yorum){
    this.yorumSource.next(yorum);
  }
}

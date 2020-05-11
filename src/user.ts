import {EntryComponent} from './app/entry/entry.component';
import {YorumComponent} from './app/yorum/yorum.component';


export interface User {
  id: number;
  username: string;
  password: string;
  admin: boolean;
  entryList: Set<EntryComponent>;
  yorumList: Set<YorumComponent>;
}

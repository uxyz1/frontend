import {User} from './user';
import {EntryComponent} from './entry/entry.component';


export interface Yorum{

  id: number;
  text: string;
  user: User;
  entry: EntryComponent;
}

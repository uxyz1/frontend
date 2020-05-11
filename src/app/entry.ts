


export interface Entry {
  id: number;
  name: string;
  entries: Set<Entry>;
  postedAt: Date;

}

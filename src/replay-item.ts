import { ReplaySubject } from 'rxjs';

import { ListObservable } from './list-observable';
import { ObjectObservable } from './object-observable';

export class ReplayItem<T> extends ReplaySubject<T> {
  constructor(private ref) { super(); }
  asListObservable(): ListObservable<T> {
    const observable = new ListObservable<T>(this.ref);
    (<any>observable).source = this;
    return observable;
  }
  asObjectObservable(): ObjectObservable<T> {
    const observable = new ObjectObservable<T>(this.ref);
    (<any>observable).source = this;
    return observable;
  }
}
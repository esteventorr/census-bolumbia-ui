import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private pageTitleSubject: BehaviorSubject<string> = new BehaviorSubject(
    'Census Bolumbia'
  );

  constructor() {}

  public setPageTitle(title: string) {
    this.pageTitleSubject.next(title);
  }

  public getPageTitle(): Observable<string> {
    return this.pageTitleSubject.asObservable();
  }
}

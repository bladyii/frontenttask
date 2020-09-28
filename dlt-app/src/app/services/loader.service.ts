import { trigger } from '@angular/animations';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader = new BehaviorSubject<boolean>(true);

  constructor() {}

  public showLoader(): void {
    this.loader.next(true);
  }

  public hideLoader(): void {
    this.loader.next(false);
  }

  public getLoaderStatus(): Observable<boolean> {
    return this.loader.asObservable();
  }
}

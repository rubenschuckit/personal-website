import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SpinnerService {
  private spinnerSubject: Subject<boolean> = new Subject<boolean>();
  spinner$ = this.spinnerSubject.asObservable();

  constructor() {
  }

  startSpinner(): void {
    this.spinnerSubject.next(true);
  }

  stopSpinner(): void {
    this.spinnerSubject.next(false);
  }
}

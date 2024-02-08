import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { USERS, User } from './user';

@Injectable()
export class TableDragService {
  getUsers(): Observable<User[]> {
    return of(USERS).pipe(delay(400));
  }
}

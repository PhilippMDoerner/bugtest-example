import { Injectable } from '@angular/core';
import { AbstractChildService } from './abstract-child-service';

@Injectable({
  providedIn: 'root'
})
export class SecondChildService extends AbstractChildService {
  childType = 'second';

  constructor() {
    super();
  }
}

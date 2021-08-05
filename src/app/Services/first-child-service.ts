import { Injectable } from '@angular/core';
import { AbstractChildService } from './abstract-child-service';

@Injectable({
  providedIn: 'root'
})
export class FirstChildService extends AbstractChildService {
  childType = 'first';

  constructor() {
    super();
  }
}

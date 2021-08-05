import { Injectable } from '@angular/core';
import { FirstChildObject, MyChild, SecondChildObject } from '../mymodels';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractChildService {
  childType: string | null = null;

  getChild(name: string): MyChild {
    if (this.childType === 'first') return new FirstChildObject(name);
    return new SecondChildObject(name);
  }
}

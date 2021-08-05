import { Component, OnInit } from '@angular/core';
import { FirstChildService } from '../Services/first-child-service';
import { ParentClass } from './parent';

@Component({
  selector: 'app-first-child',
  template: '<div> First Child Component </div>'
})
export class FirstChildComponent extends ParentClass implements OnInit {
  name: string = 'Tom';

  constructor(private firstChildService: FirstChildService) {
    super(firstChildService);
  }

  ngOnInit(): void {
    console.log('First Child Component uses this service:');
    console.log(this.firstChildService);

    console.log('Letting first child shout (This should be First Child Tom)');
    this.letChildShout();
  }
}

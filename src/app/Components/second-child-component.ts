import { Component, OnInit } from '@angular/core';
import { SecondChildService } from '../Services/second-child-service';
import { ParentClass } from './parent';

@Component({
  selector: 'app-second-child',
  template: '<div> Second Child Component </div>'
})
export class SecondChildComponent extends ParentClass implements OnInit {
  name = 'Marie';

  constructor(private secondChildService: SecondChildService) {
    super(secondChildService);
  }

  ngOnInit(): void {
    console.log('Second Child Component uses this service:');
    console.log(this.secondChildService);
    console.log(
      'Letting second child shout (this should be Second Child Marie)'
    );
    this.letChildShout();
  }
}

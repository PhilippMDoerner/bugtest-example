import { AbstractChildService } from '../Services/abstract-child-service';

export class ParentClass {
  name!: string;

  constructor(private childService: AbstractChildService) {}

  letChildShout() {
    console.log('Triggered letChildShout with this child: ');
    const child = this.childService.getChild(this.name);
    console.log(child);

    child.shoutYourName();
  }
}

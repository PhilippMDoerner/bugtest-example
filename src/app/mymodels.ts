export interface MyChild {
  name: string;
  shoutYourName(): void;
}

export class FirstChildObject implements MyChild {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  shoutYourName(): void {
    console.log(`I am the first child ${this.name}!`);
  }
}

export class SecondChildObject implements MyChild {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  shoutYourName(): void {
    console.log(`I am the second child ${this.name}!`);
  }
}

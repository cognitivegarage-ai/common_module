import { Main } from './main';

export class Library extends Main {
  constructor() {
    super();
  }
  name(){
    return "Browser: "+ this.getMyName();
  }
}

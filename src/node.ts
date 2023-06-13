import { Main } from './main';

export default class Library extends Main {
  constructor() {
    super();
  }


  name(){
    return "Node: "+ this.getMyName();
  }
}

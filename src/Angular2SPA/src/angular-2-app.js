import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'angular-2-app'
})

@View({
  templateUrl: 'angular-2-app.html'
})

export class Angular2App {

  constructor() {
    console.info('Angular2App Component Mounted Successfully');
  }

}

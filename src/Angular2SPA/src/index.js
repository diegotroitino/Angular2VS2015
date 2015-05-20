import {Component, View, bootstrap} from 'angular2/angular2';
import {Angular2App} from 'angular-2-app';

@Component({
  selector: 'main'
})

@View({
  directives: [Angular2App],
  template: `
    <angular-2-app></angular-2-app>
  `
})

class Main {

}

bootstrap(Main);

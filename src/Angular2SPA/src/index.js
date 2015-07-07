import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';
import {Angular2App} from 'angular-2-app';
import {DisplayComponent} from 'display';

@Component({
    selector: 'main'
})

@View({
    directives: [Angular2App, DisplayComponent],
    template: '<angular-2-app></angular-2-app><display></display>'
})

class Main {

}

bootstrap(Main);

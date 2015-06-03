import {ComponentAnnotation as Component, ViewAnnotation as View, NgFor as For, NgIf as If/*, InjectAnnotation as Inject*/} from 'angular2/angular2';

@Component({
    selector: 'display'//,
    /*injectables: [FriendsService]*/
})

@View({    
    templateUrl: 'display.html',
    directives: [For, If]
})

/*@Inject(FriendsService)*/
export class DisplayComponent {
    constructor(){//friend) {
        this.myName = "Diego";
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];//friend.names;
    }
}

/*export class FriendsService {
    constructor() {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
}*/
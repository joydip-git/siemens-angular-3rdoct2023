import { Component } from "@angular/core";

@Component({
    templateUrl: './app.component.html',
    selector: 'app-root'
})
export class AppComponent {
    title = 'Welcome to Angular'
    constructor() {
        console.log('app component created')
    }
    changeText(arg: string): void {
        this.title = arg
    }
}

// function x() {
//     document.createElement('h2').innerHTML = 'Welcome...'
// }
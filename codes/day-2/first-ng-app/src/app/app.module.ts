import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
    //registering - component, pipe, directive
    declarations: [AppComponent, DashboardComponent],

    //register services
    //providers: [],

    //register child (feature) modules and built-in angular modules
    imports: [BrowserModule],

    //mention bootstrapper component(s)
    bootstrap: [AppComponent],

    //mention the name of assets which can be accessed in other modules
    //exports: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('app module created')
    }
}
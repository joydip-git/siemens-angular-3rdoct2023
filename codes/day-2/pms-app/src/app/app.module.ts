import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  //components, directives, pipes
  declarations: [
    AppComponent
  ],
  //built-in and features modules
  imports: [
    BrowserModule, ProductsModule
  ],
  //services
  //providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

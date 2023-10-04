import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModuleRef, PlatformRef } from "@angular/core";
import { AppModule } from "./app/app.module";

const platformRef: PlatformRef = platformBrowserDynamic()
platformRef
  .bootstrapModule(AppModule)
  .then(
    (ref: NgModuleRef<AppModule>) => {
      console.log(ref.instance)
    },
    (e) => { console.log(e) }
  )
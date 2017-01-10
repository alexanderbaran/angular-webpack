import '../styles.scss';

import '../polyfills';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { enableProdMode } from '@angular/core';

import { AppModule } from "./app.module";

if (process.env.PRODUCTION) {
    enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule);
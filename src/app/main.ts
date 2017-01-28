import '../styles.scss';

import '../polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

// http://stackoverflow.com/questions/34868810/what-is-difference-between-production-and-development-mode-in-angular2
if (process.env.PRODUCTION) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(/*success => console.log(`Bootstrap success`)*/)
    .catch((reason: any) => console.error(reason));
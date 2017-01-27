import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
];

export const routing = RouterModule.forRoot(ROUTES);
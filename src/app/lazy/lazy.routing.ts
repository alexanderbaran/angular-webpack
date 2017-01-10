import { Routes, RouterModule } from "@angular/router";

import { LazyComponent } from "./lazy.component";

const LAZY_ROUTES: Routes = [
    { path: '', component: LazyComponent }
];

export const lazyRouting = RouterModule.forChild(LAZY_ROUTES);
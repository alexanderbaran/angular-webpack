import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

const lazyRoutes: Routes = [
    { path: '', component: LazyComponent }
];

export const lazyRouting = RouterModule.forChild(lazyRoutes);
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyComponent } from './lazy.component';
import { lazyRouting } from './lazy.routing';

@NgModule({
    imports: [
        CommonModule,
        lazyRouting
    ],
    declarations: [
        LazyComponent
    ]
})
export class LazyModule {

}
import { NgModule } from '@angular/core';
import { demo1Routes } from './test2.routing.config'
import { Test2Component } from './test2.component'
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        Test2Component
    ],
    imports: [
        RouterModule,
        RouterModule.forRoot(demo1Routes , {useHash: true})
    ],
  })
  export class Test2Module { }
  
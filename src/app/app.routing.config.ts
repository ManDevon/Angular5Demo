import { Test1Component } from './components/test1.component';
import { AppComponent } from './app.component'
import { Test2Component } from './features/demo1/test2.component'
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { 
    path: 'home',
    pathMatch:'full',
    component: AppComponent,
    // children:[
    //   { path: '', component: 'userComponent'
    //   }
    // ]
  },
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: 'test2',
    component: Test2Component
  }
 ];
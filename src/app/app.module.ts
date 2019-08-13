import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { appRoutes } from './app.routing.config';
import { DirectivesDirective } from './directives.directive';

import { AppComponent } from './app.component';
import { Test1Component } from './components/test1.component';
import { ValidatorComponent } from './components/validators/validators.component'

import { ArticleComponent } from './components/articleComponent/article.component'

import { Test2Module } from './features/demo1/test2.module'

import { HeroService } from './services/hero.service'


import { reducers, metaReducers } from './reducers/reducer';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    DirectivesDirective,
    ValidatorComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Test2Module,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    RouterModule.forRoot(appRoutes , {useHash: true})
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

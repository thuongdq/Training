import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { Config } from './app.config';

import { RouterModule, Routes } from '@angular/router';

//Component
import { CategoryListComponent } from './components/categories/category.component'

//services
import { CategoryService } from './components/categories/category.service'

const appRoutes: Routes = [
  { path: 'categories', component: CategoryListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Config,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

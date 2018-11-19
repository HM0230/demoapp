import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page01Component }  from './components/page01/page01.component';
import { Page02Component }  from './components/page02/page02.component';
import { Page03Component }  from './components/page03/page03.component';
import { HomepageComponent } from './components/homepage/homepage.component'
import { Test01Component } from './components/test01/test01.component'

const routes: Routes = [
  {
    path: 'page01',
    component: Page01Component
  },
  {
    path: 'page02',
    component: Page02Component
  },
  {
    path: 'page03',
    component: Page03Component
  },
  {
    path:"Homepage",
    component:HomepageComponent
  },
  {
    path:"test01",
    component:Test01Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

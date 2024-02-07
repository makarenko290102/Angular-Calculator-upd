import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmptyPage } from './components/empty-route/empty-route.component';
import { HomePage } from './home-page/home-page.component';


const routes: Routes = [
 {
  path: 'calculator',
  component: CalculatorComponent
 },
 {
  path: '', redirectTo: 'home', pathMatch: 'full'

 },
 {
 path: 'home',
 component: HomePage
 },
 {
  path: 'object-list',
  loadChildren: () => import('./object-list/components/object-list.module').then((e) => e.ObjectListModule)
 },
 {
  path: '**',
  component: EmptyPage,
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


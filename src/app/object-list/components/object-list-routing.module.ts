import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectList } from './list/object-list.component';
import { ObjectItem } from './item/object-item.component';


const routes: Routes = [
 {
  path: '',
  component: ObjectList
 },
 {
  path: ':id', component: ObjectItem,

 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectListRouting { }


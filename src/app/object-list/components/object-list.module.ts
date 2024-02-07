import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObjectList } from './list/object-list.component';
import { ObjectItem } from './item/object-item.component';
import { ObjectListRouting } from './object-list-routing.module';



@NgModule({
    imports: [CommonModule, ObjectListRouting],
    exports: [ObjectList, ObjectItem],
    declarations: [ObjectList, ObjectItem],
    providers: [],
})
export class ObjectListModule { }

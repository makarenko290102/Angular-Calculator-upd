import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Objects } from '../list/object-list.component';

@Component({
    selector: 'object-item',
    templateUrl: 'object-item.component.html',
    styleUrls: ['object-item.component.css']
})

export class ObjectItem implements OnInit{

    public object?: Object

    constructor(private route: ActivatedRoute){}
    ngOnInit(): void {
        this.route.params.subscribe((params: Params) =>{
            this.object = Object(params['id'] - 1); //тут проблема, пересмотреть obj-list.comp.ts
        })
    }

}
//выводится только по id в строке навигации, сделать по нажатию на объект
//доделать вывод item по действуйщей навигации 
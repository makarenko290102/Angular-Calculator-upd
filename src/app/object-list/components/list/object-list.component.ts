import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'object-list',
    templateUrl: './object-list.component.html',
    styleUrls: ['./object-list.component.scss']
})

export class ObjectList {

    constructor(private router: Router, private route: ActivatedRoute){}
  
    public Objects = Objects;
    public redirectTo(id:number): void{
        this.router.navigate(['${id'], {relativeTo: this.route})
        
    }

}

export const Objects: Object[] =[
        {
        title: 'first',
        content: 'Info',
        id: 1
        },
        {
        title: 'second',
        content: 'Info',
        id: 2
        },
        {
        title: 'third',
        content: 'Info',
        id: 3
        },
        {
        title: 'fourth',
        content: 'Info',
        id: 4
        },
        {
        title: 'fifth',
        content: 'Info',
        id: 5
        },
]

export interface Object{
    title: string;
    content: string;
    id: number;
}
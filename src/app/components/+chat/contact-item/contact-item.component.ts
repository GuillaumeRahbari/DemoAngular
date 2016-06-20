/**
 * Component ChatContactItemComponent
 */

import {Component,Input} from '@angular/core';

@Component({
    selector: 'contact-item',
    moduleId: module.id,
    templateUrl: './contact-item.component.html',
    styleUrls : ['./contact-item.component.css']
})
export class ContactItemComponent {

    @Input('firstName') firstName:string;
    @Input('lastName') lastName:string;
    @Input('lastMessage') lastMessage:string;

    constructor(){}


}
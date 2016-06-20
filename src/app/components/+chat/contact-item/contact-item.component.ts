/**
 * Component ChatContactItemComponent
 */

import {Component, Output, Input, EventEmitter} from '@angular/core';
import {ContactModelComponent} from "../../models/contact-model/contact-model.component";

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

    @Output() sendContact= new EventEmitter<ContactModelComponent>();

    constructor(){}


    emitContact(){
        this.sendContact.emit(new ContactModelComponent("1", this.firstName, this.lastName, this.lastMessage));
    }

}
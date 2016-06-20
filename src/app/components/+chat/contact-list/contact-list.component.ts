/**
 * Component ChatContactListComponent
 */

import {Component, Output, EventEmitter} from '@angular/core';
import {ContactModelComponent} from "../../models/contact-model/contact-model.component";
import {ContactItemComponent} from "../contact-item/contact-item.component";

@Component({
    selector: 'contact-list',
    moduleId: module.id,
    templateUrl: './contact-list.component.html',
    styleUrls : ['./contact-list.component.css'],
    directives: [ContactItemComponent]
})
export class ContactListComponent {

    private contactList:ContactModelComponent[];


    @Output() sendContact= new EventEmitter<ContactModelComponent>();

    constructor(){
        this.contactList=[new ContactModelComponent("-1", "Pierre", "Marcousi", "Je te dirai ça demain")];
    }

    emitContact(contact:ContactModelComponent){
        console.log("contact: "+contact.firstName);
        this.sendContact.emit(contact);
    }
}
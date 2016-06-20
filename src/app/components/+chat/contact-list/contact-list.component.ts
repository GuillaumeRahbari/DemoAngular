/**
 * Component ChatContactListComponent
 */

import {Component} from '@angular/core';
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

    constructor(){
        this.contactList=[new ContactModelComponent("-1", "Pierre", "Marcousi", "Je te dirai ça demain")];
    }

}
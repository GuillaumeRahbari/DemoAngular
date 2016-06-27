/**
 * Component ChatContactListComponent
 */

import {Component} from '@angular/core';
import {ContactModel} from "../../models/contact-model/contact.model";
import {ManageContactService} from "../../../shared/services/src/manage-contact.service";
import {ContactItemComponent} from "../contact-item/contact-item.component";

@Component({
    selector: 'contact-list',
    moduleId: module.id,
    templateUrl: './contact-list.component.html',
    styleUrls : ['./contact-list.component.css'],
    directives: [ContactItemComponent]
})
export class ContactListComponent {


    public contactList:ContactModel[];
    constructor(private _manageContactService:ManageContactService) {
        _manageContactService.getContacts().then(
            contacts => this.contactList = contacts
        );
    }
}
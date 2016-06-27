/**
 * Component ChatChatComponent
 */

import {Component} from '@angular/core';
import {ChatFormComponent} from '../core/chat/chat-form/index';
import {ContactListComponent} from '../core/chat/contact-list/index';
import {ContactModel} from '../models/contact-model/contact.model';
import {ManageContactService} from "../../shared/services/src/manage-contact.service";

@Component({
    selector: 'chat',
    moduleId: module.id,
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    directives: [ChatFormComponent,
        ContactListComponent
    ],
    providers:[ManageContactService]
})

export class ChatComponent {

    public contactList:ContactModel[];
    public contact:ContactModel;

    constructor(private _manageContactService:ManageContactService) {
        _manageContactService.getContacts().then(
            contacts => this.contactList = contacts
        );
        this.contact=new ContactModel("","","","","");
    }

    ngOnInit(){

    }

    displayChat(contact:ContactModel){
        console.log("current contact: "+contact.firstName);
        this.contact=contact;
    }

}
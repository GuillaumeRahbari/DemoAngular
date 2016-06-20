/**
 * Component ChatChatComponent
 */

import {Component} from '@angular/core';
import {ChatFormComponent} from './chat-form/index';
import {ContactListComponent} from './contact-list/index';
import {ContactModel} from '../models/contact-model/contact.model';

@Component({
    selector: 'chat',
    moduleId: module.id,
    templateUrl: './chat.component.html',
    styleUrls : ['./chat.component.css'],
    directives: [ChatFormComponent,
        ContactListComponent
    ]
})
export class ChatComponent {

    private contactList;
    private currentContact:ContactModel;

    //TODO TO REMOVE


    constructor(){
        this.currentContact=new ContactModel("11", "Jean", "Nice", "Hey man");
    }

    displayChat(contact: ContactModel){
        console.log("contact: "+contact.firstName);
        this.currentContact=contact;
    }

}
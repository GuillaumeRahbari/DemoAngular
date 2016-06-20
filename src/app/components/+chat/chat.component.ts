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


    constructor(){}

    displayChat(contact: ContactModel){

        this.currentContact=contact;
    }

}
/**
 * Component ChatChatComponent
 */

import {Component} from '@angular/core';
import {ChatFormComponent} from './chat-form/index';
import {ContactListComponent} from './contact-list/index';
import {ContactModelComponent} from "../models/contact-model/contact-model.component";

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
    private currentContact:ContactModelComponent;

    constructor(){}

    displayChat(contact: ContactModelComponent){
        this.currentContact=contact;
    }

}
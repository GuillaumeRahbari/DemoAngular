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

    constructor(){
        this.currentContact=new ContactModel("11", "Jean", "Nice", "Hey man", 'http://s13.postimg.org/ih41k9tqr/img1.jpg');
    }

    displayChat(contact: ContactModel){
        this.currentContact=contact;
    }

}
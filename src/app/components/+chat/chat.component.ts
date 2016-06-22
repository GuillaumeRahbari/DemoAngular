/**
 * Component ChatChatComponent
 */

import {Component} from '@angular/core';
import {ChatFormComponent} from '../core/chat/chat-form/index';
import {ContactListComponent} from '../core/chat/contact-list/index';
import {ContactModel} from '../models/contact-model/contact.model';


@Component({
    selector: 'chat',
    moduleId: module.id,
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    directives: []
})

export class ChatComponent {


    constructor() {
    }

}
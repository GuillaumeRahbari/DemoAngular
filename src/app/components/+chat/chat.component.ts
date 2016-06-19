/**
 * Component ChatChatComponent
 */

import {Component} from '@angular/core';
import {ChatFormComponent} from './chat-form/index';
import {ContactListComponent} from './contact-list/index';

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


}
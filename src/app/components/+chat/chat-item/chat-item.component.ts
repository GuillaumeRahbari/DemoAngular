/**
 * Component ChatChatItemComponent
 */

import {Component, Input} from '@angular/core';
import {ContactModel} from '../../models/contact-model/contact.model';
import {MessageModel} from "../../models/message-model/message.model";

@Component({
    selector: 'chat-item',
    moduleId: module.id,
    templateUrl: './chat-item.component.html',
    styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {

    @Input('message') message:string;
    @Input('from') from:string;

    constructor() {
    }

    ngOnInit() {
    }
}
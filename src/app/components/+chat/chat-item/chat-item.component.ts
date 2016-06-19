/**
 * Component ChatChatItemComponent
 */

import {Component, Input} from '@angular/core';
import {ContactModelComponent} from '../../models/contact-model/index';
import {MessageModelComponent} from '../../models/message-model/index';

@Component({
    selector: 'chat-item',
    moduleId: module.id,
    templateUrl: './chat-item.component.html',
    styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {

    private initials:string;

    @Input('message') message:MessageModelComponent;
    private contact:ContactModelComponent;

    constructor() {
    }

    ngOnInit() {
        console.log("this.message: "+this.message.contact);
        this.contact=this.message.getContact();
        this.initials=this.contact.firstName[0] + this.contact.lastName[0];
    }
}
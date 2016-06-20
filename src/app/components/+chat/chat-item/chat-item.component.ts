/**
 * Component ChatChatItemComponent
 */

import {Component, Input} from '@angular/core';
import {ContactModelComponent} from '../../models/contact-model/index';
import {MessageModelComponent} from "../../models/message-model/message-model.component";

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
        console.log("this.message: "+this.message.message);
        //console.log("this.message: "+this.message.getContact());
        //this.contact=this.message.getContact();
        //this.initials=this.contact.firstName[0] + this.contact.lastName[0];
    }
}
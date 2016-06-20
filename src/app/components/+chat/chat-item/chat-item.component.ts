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
    private from:string;

    @Input('message') message:string;
    @Input('from') from:string;

    constructor() {

    }

    ngOnInit() {
        console.log("from: "+this.from);
        console.log("message: "+this.message);
        //console.log("this.message: "+this.message);
        //console.log("this.message: "+this.message.getMessage());
        //console.log("this.message: "+this.message.getContact());
        //this.contact=this.message.getContact();
        //this.initials=this.contact.firstName[0] + this.contact.lastName[0];
    }
}
/**
 * Component ChatChatFormComponent
 */

import {Component, Input} from '@angular/core';
import {ChatItemComponent} from '../chat-item/index';
import {ContactModel} from '../../models/contact-model/contact.model';
import {MessageModelComponent} from '../../models/message-model/index';


@Component({
    selector: 'chat-form',
    moduleId: module.id,
    templateUrl: './chat-form.component.html',
    styleUrls: ['./chat-form.component.css'],
    directives: [ChatItemComponent]
})

export class ChatFormComponent {

    private contact:ContactModel;
    private messageList:MessageModelComponent[];
    private messageToSend:string;

    @Input('firstName') firstName:string;
    @Input('lastName') lastName:string;
    @Input('conversation') conversation:string;
    @Input('contact') currentContact:ContactModel;

    constructor() {
        this.messageToSend = "";
        this.messageList = [new MessageModelComponent("Hey", "server"), new MessageModelComponent("How are you ?", "server")];
    }

    ngOnInit() {
        console.log("current contact: name: "+this.currentContact.firstName)
    }

    addComment() {
        this.messageList.push(new MessageModelComponent(this.messageToSend, "client"));
        this.messageToSend = "";
    }
}
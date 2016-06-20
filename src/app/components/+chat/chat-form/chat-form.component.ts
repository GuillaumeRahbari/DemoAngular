/**
 * Component ChatChatFormComponent
 */

import {Component, Input} from '@angular/core';
import {ChatItemComponent} from '../chat-item/index';
import {ContactModel} from '../../models/contact-model/contact.model';
import {MessageModel} from '../../models/message-model/message.model';
import {ManageChatService} from "../../../shared/services/src/manage-chat.service";



@Component({
    selector: 'chat-form',
    moduleId: module.id,
    templateUrl: './chat-form.component.html',
    styleUrls: ['./chat-form.component.css'],
    directives: [ChatItemComponent],
    providers: [ManageChatService]
})

export class ChatFormComponent {

    private contact:ContactModel;
    private messageList:MessageModel[];
    private messageToSend:string;

    @Input('firstName') firstName:string;
    @Input('lastName') lastName:string;
    @Input('conversation') conversation:string;
    @Input('contact') currentContact:ContactModel;

    constructor(private _manageChatService: ManageChatService) {
        this.messageToSend = "";
        this.getConversation();
        //this.messageList = [new MessageModel("Hey", "server"), new MessageModel("How are you ?", "server")];
    }

    ngOnInit() {
        console.log("current contact: name: "+this.currentContact.firstName);
        console.log("firstName:" +this.firstName);
    }

    addComment() {
        this.messageList.push(new MessageModel(this.messageToSend, "client", "server"));
        this.messageToSend = "";
    }

    getConversation(){
        this._manageChatService.getMessages().then(
            conversation => this.messageList=conversation
        );
    }
}
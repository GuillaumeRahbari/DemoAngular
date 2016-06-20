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

    @Input("id") id:string;
    private previousId:string;

    constructor(private _manageChatService: ManageChatService) {
        this.messageToSend = "";
    }

    ngOnInit() {
        this.previousId=this.id;
        this.getContactFromID();
    }

    addComment() {
        this.messageList.push(new MessageModel(this.messageToSend, "client", "server"));
        this.messageToSend = "";
    }


    getContactFromID(){
        this._manageChatService.getContact(this.id).then(
                contact =>  this.getConversation(contact)
        );

    }
    getConversation(contact: ContactModel){
        this.contact=contact;
        console.log("contact: name: "+contact.firstName);
        this._manageChatService.getMessages(this.id).then(
            conversation => this.messageList=conversation
        );
    }

    ngDoCheck() {
        if(!(this.id===this.previousId)) {
            this.previousId = this.id;
            this.getContactFromID();
        }
    }
}
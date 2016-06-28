/**
 * Component ChatChatFormComponent
 */

import {Component, Input} from '@angular/core';
import {ManageChatService} from "../../../shared/services/src/manage-chat.service";
import {MessageModel} from "../../models/message-model/message.model";

@Component({
    selector: 'chat-form',
    moduleId: module.id,
    templateUrl: './chat-form.component.html',
    styleUrls : ['./chat-form.component.css'],
    providers: [ManageChatService]
})
export class ChatFormComponent {

    @Input('id') id:string;

    public messageList:MessageModel[];

    constructor(private manageChatService:ManageChatService){
        this.messageList=[];

    }

    ngOnInit(){
        this.getMessageFromId();
    }

    getMessageFromId(){
        console.log("id: "+this.id);
        this.manageChatService.getMessages(this.id).then(
            messages=> { this.messageList=messages}
        );
    }

}
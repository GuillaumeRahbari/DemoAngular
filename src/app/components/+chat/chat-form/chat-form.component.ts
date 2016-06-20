/**
 * Component ChatChatFormComponent
 */

import {Component} from '@angular/core';
import {ChatItemComponent} from '../chat-item/index';
import {ContactModelComponent} from '../../models/contact-model/index';
import {MessageModelComponent} from '../../models/message-model/index';


@Component({
    selector: 'chat-form',
    moduleId: module.id,
    templateUrl: './chat-form.component.html',
    styleUrls : ['./chat-form.component.css'],
    directives:[ChatItemComponent]
})
export class ChatFormComponent {

    private contact:ContactModelComponent;
    private messageList:MessageModelComponent[];
    private messageToSend:string;

    constructor(){
        this.messageToSend="";
        this.messageList=[new MessageModelComponent("Hey", "server")];
    }

    ngOnInit(){
        console.log("message list: length: "+ this.messageList.length);
    }

    addComment(){
        this.messageList.push(new MessageModelComponent(this.messageToSend,"client"));
        this.messageToSend="";
    }
}
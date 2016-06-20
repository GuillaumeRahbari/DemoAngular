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
    private from:string[];
    private messageToSend:string;

    constructor(){
        this.messageToSend="";
        this.messageList=[new MessageModelComponent("1","Mark"," Zuckerberg","coucou","19/06", "client")];
    }

    ngOnInit(){
        console.log("message list: length: "+ this.messageList.length);

        console.log("message list: id: "+ this.messageList[0].id);
        console.log("message list: id: "+ this.messageList[0].message);
        console.log("contact firstname: "+ this.contact.firstName);
    }

    addComment(){
        this.messageList;
        this.messageToSend="";
    }
}
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
        this.contact=new ContactModelComponent("-1", "Mark", "Zuckerberg");
        this.messageList=[new MessageModelComponent("1",this.contact,"coucou","19/06")];
        this.from=["server"];

    }

    ngOnInit(){
        console.log("message list: length: "+ this.messageList.length);

        console.log("message list: id: "+ this.messageList[0].id);
        console.log("message list: id: "+ this.messageList[0].message);
        console.log("contact firstname: "+ this.contact.firstName);
        console.log("message list: firstname: "+ this.messageList[0].getContact().firstName);
        console.log("message list: first naem with get: "+ this.messageList[0].getContact().firstName);
    }

    addComment(){
        this.messageList.push(new MessageModelComponent("0",new ContactModelComponent("-1", "Me", ""),this.messageToSend,"19/06"));
        this.messageToSend="";
    }
}
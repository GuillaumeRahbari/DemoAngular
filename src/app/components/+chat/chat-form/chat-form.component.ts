/**
 * Component ChatChatFormComponent
 */

import {Component} from '@angular/core';
import {ChatItemComponent} from '../chat-item/index';

@Component({
    selector: 'chat-form',
    moduleId: module.id,
    templateUrl: './chat-form.component.html',
    styleUrls : ['./chat-form.component.css'],
    directives:[ChatItemComponent]
})
export class ChatFormComponent {

    private chatItem:string[];
    private messageToSend:string;

    constructor(){
        this.messageToSend="Hello guys";
    }
}
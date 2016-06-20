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

    @Input('message') message:string;
    @Input('from') from:string;

    constructor() {
    }

    ngOnInit() {
    }
}
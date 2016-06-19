/**
 * Component ChatChatItemComponent
 */

import {Component, Input} from '@angular/core';
import {ContactModelComponent} from '../../models/contact-model/index';

@Component({
    selector: 'chat-item',
    moduleId: module.id,
    templateUrl: './chat-item.component.html',
    styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {

    private initials:string;

    @Input('message') message:string;
    @Input('contact') contact:ContactModelComponent;

    constructor() {
        this.contact=new ContactModelComponent("-1", "Mark", "Zuckerberg");
    }

    ngOnInit() {
        this.initials=this.contact.firstName[0] + this.contact.lastName[0];
    }
}
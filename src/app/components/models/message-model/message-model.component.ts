/**
 * Component ModelsMessageModelComponent
 */

import {Component} from '@angular/core';
import {ContactModelComponent} from '../contact-model/index';

@Component({
    selector: 'message-model',
    moduleId: module.id,
    templateUrl: './message-model.component.html',
    styleUrls: ['./message-model.component.css']
})
export class MessageModelComponent {

    public message:string;
    public from:string;

    constructor(message:string, from:string) {
        this.message = message;
        this.from = from;
    }

    public getMessage() {
        return this.message;
    }

}
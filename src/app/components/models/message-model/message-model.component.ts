/**
 * Component ModelsMessageModelComponent
 */

import {Component} from '@angular/core';
import {ContactModelComponent} from '../contact-model/index';

@Component({
    selector: 'message-model',
    moduleId: module.id,
    templateUrl: './message-model.component.html',
    styleUrls : ['./message-model.component.css']
})
export class MessageModelComponent {

    constructor(
        public id: string,
        public contact: ContactModelComponent,
        public message: string,
        public date: string
    ){}

    public getContact(){
        return this.contact;
    }

}
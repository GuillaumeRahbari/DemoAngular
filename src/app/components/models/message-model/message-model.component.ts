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

    public id:string;
    public firstName:string;
    public lastName:string;
    public message:string;
    public date:string;
    public from:string;

    constructor(id:string, firstName:string, lastName:string,
                message:string, date:string, from:string) {
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.message=message;
        this.date=date;
        this.from=from;
    }

    public getMessage() {
        return this.message;
    }

}
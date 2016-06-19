/**
 * Component ModelsContactModelComponent
 */

import {Component} from '@angular/core';

@Component({
    selector: 'contact-model',
    moduleId: module.id,
    templateUrl: './contact-model.component.html',
    styleUrls : ['./contact-model.component.css']
})
export class ContactModelComponent {

    constructor(
        public id: string,
        public firstName: string,
        public lastName: string
    ){ }
}
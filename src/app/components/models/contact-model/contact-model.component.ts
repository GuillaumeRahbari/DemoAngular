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
        private id: string,
        private firstName: string,
        private lastName: string,
        private image: string
    ){ }
}
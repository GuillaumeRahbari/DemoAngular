/**
 * Component ChatContactItemComponent
 */

import {Component,EventEmitter, Input, Output} from '@angular/core';
import {ContactModel} from "../../models/contact-model/contact.model";

@Component({
    selector: 'contact-item',
    moduleId: module.id,
    templateUrl: './contact-item.component.html',
    styleUrls : ['./contact-item.component.css']
})
export class ContactItemComponent { 
    
    @Input('prenom') firstName:string;
    @Input('nom') lastName:string;
    @Input('contactID') id:string;

    @Output() sendContact=new EventEmitter<ContactModel>();

    constructor(){

    }

    ngOnInit(){
        console.log("firstName: "+this.firstName);
    }

    changeName(){
        this.firstName="Toto";
    }

    getContact(){
        this.sendContact.emit(new COntact());
    }
}
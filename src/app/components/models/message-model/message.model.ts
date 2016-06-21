import {ContactModel} from '../contact-model/contact.model';

export class MessageModel {

    public message:string;
    public from:string;
    public to:string;
    public contactID:string;

    constructor(message:string, from:string, to:string, contactID:string) {
        this.message = message;
        this.from = from;
        this.to=to;
        this.contactID=contactID
    }

    public getMessage() {
        return this.message;
    }

}
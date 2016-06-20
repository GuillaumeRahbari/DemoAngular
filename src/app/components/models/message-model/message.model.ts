import {ContactModel} from '../contact-model/contact.model';

export class MessageModel {

    public message:string;
    public from:string;
    public to:string;

    constructor(message:string, from:string, to:string) {
        this.message = message;
        this.from = from;
        this.to=to;
    }

    public getMessage() {
        return this.message;
    }

}
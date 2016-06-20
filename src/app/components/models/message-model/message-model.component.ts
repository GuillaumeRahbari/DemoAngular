import {ContactModel} from '../contact-model/contact.model';

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
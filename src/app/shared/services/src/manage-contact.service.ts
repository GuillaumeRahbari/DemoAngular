/**
 * Service ManageContactService
 */
import {Injectable} from '@angular/core';
import {ContactModel} from "../../../components/models/contact-model/contact.model";
import {CONTACTS} from "../../../components/mocks/mock-contact";

@Injectable()
export class ManageContactService {

    private contactList:ContactModel[];

    getContacts(){
        return Promise.resolve(CONTACTS);
    }
}
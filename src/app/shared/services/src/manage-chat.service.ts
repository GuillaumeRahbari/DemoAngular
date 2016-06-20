/**
 * Service ManageChatService
 */
import {Injectable} from '@angular/core';
import {CONTACTS} from "../../../components/mocks/mock-contact";
import {MESSAGES} from "../../../components/mocks/mock-conversation";

@Injectable()
export class ManageChatService {

    /**
     *
     * @returns {Promise<ContactModelComponent[]>}
     */
    getContacts(){
        return Promise.resolve(CONTACTS);
    }

    getMessages(){
        return Promise.resolve(MESSAGES);
    }
}
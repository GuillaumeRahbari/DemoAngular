/**
 * Service ManageChatService
 */
import {Injectable} from '@angular/core';
import {CONTACTS} from "../../../components/mocks/mock-contact";

@Injectable()
export class ManageChatService {

    /**
     *
     * @returns {Promise<ContactModelComponent[]>}
     */
    getContacts(){
        return Promise.resolve(CONTACTS);
    }
}
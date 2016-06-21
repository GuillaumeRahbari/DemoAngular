/**
 * Service ManageChatService
 */
import {Injectable} from '@angular/core';
import {CONTACTS} from "../../../components/mocks/mock-contact";
import {ContactModel} from "../../../components/models/contact-model/contact.model";

import {MessageModel} from "../../../components/models/message-model/message.model";
import {MESSAGES} from "../../../components/mocks/mock-conversation";

@Injectable()
export class ManageChatService {

    private messageList:MessageModel[];
    /**
     *
     * @returns {Promise<ContactModelComponent[]>}
     */
    getContacts(){
        return Promise.resolve(CONTACTS);
    }

    /**
     *
     * @param id
     * @returns {Promise<ContactModel>}
     */
    getContact(id:string){
        console.log("yes je rentre, id:");
        for(let i=0;i<CONTACTS.length;i++){
            if(CONTACTS[i].id===id) return Promise.resolve(CONTACTS[i])
        }
        return Promise.resolve(new ContactModel("","","","",""));
    }

    getMessages(id:string){
        this.messageList=[];
        for(let i=0;i<MESSAGES.length;i++){
            if(MESSAGES[i].contactID===id) {
                this.messageList.push(MESSAGES[i]);
            }
        }
        return Promise.resolve(this.messageList);
    }

    getLastMessage(id:string){
        let index=[];
        for(let i=0;i<MESSAGES.length;i++){
            if(MESSAGES[i].contactID===id) {
               index.push(i);
            }
        }

        return Promise.resolve(MESSAGES[index[index.length-1]]);
    }
}
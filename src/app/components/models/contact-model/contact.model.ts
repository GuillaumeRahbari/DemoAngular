export class ContactModel {

    public id:string;
    public firstName:string;
    public lastName:string;
    public lastMessage:string;

    constructor(id:string, firstName:string, lastName:string, lastMessage:string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.lastMessage=lastMessage;
    }
}
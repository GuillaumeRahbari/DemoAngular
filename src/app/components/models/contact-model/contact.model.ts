export class ContactModel {

    public id:string;
    public firstName:string;
    public lastName:string;
    public lastMessage:string;
    public image : string;

    constructor(id:string, firstName:string, lastName:string, lastMessage:string, image : string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.lastMessage=lastMessage;
        this.image = image;
    }
}
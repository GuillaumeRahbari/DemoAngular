import { MessageModel } from '../models/message-model/message.model';


export var MESSAGES: MessageModel[] = [
    {message: 'Hey', from: 'server', to:"client", contactID:"11"},
    {message: 'How are you doing?', from: 'server', to:"client", contactID:"11"},
    {message: 'Fine and you?', from: 'client', to:"server", contactID:"11"},
    {message: 'Fine', from: 'server', to:"client", contactID:"11"},
];

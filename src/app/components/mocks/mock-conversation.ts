import { MessageModel } from '../models/message-model/message.model';


export var MESSAGES: MessageModel[] = [
    {message: 'Hey', from: 'server', to:"client"},
    {message: 'How are you doing?', from: 'server', to:"client"},
    {message: 'Fine and you?', from: 'client', to:"server"},
    {message: 'Fine', from: 'server', to:"client"},
];

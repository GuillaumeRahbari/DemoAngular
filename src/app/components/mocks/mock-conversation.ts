import { MessageModel } from '../models/message-model/message.model';


export var MESSAGES: MessageModel[] = [
    {message: 'Hey', from: 'server', to:"client", contactID:"11"},
    {message: 'How are you doing?', from: 'server', to:"client", contactID:"11"},
    {message: 'Fine and you?', from: 'client', to:"server", contactID:"11"},
    {message: 'Fine', from: 'server', to:"client", contactID:"11"},
    {message: 'Pouet', from: 'server', to:"client", contactID:"12"},
    {message: 'How are you pouet?', from: 'server', to:"client", contactID:"12"},
    {message: 'Im pointing fine and you?', from: 'client', to:"server", contactID:"12"},
    {message: 'Bijour', from: 'server', to:"client", contactID:"13"},
    {message: 'WESH TA VU CA MARCHE :D', from: 'server', to:"client", contactID:"14"},
    {message: 'Tu as ma tune ?', from: 'server', to:"client", contactID:"15"},
];

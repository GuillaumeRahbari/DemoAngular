import { MessageModel } from '../models/message-model/message.model';


export var MESSAGES: MessageModel[] = [
    {message: "Hey", from: "server", to:"client", contactID:"11"},
    {message: "How are you doing?", from: "server", to:"client", contactID:"11"},
    {message: "Fine and you?", from: "client", to:"server", contactID:"11"},
    {message: "Fine", from: "server", to:"client", contactID:"11"},
    {message: "Hey", from: "server", to:"client", contactID:"12"},
    {message: "What's up?", from: 'server', to:"client", contactID:"12"},
    {message: "Nothing", from: "client", to:"server", contactID:"12"},
    {message: "Don't say a word about GOT", from: 'server', to:"client", contactID:"13"},
    {message: ":D :D", from: "server", to:"client", contactID:"14"},
    {message: "When will you come ?", from: "server", to:"client", contactID:"15"}
];

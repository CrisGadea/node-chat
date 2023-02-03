const db = require('mongoose');

const Model = require('./model');

const uri = "mongodb://CrisGadea:3dHe6mNJH0FoCGpb@ac-yqwxx6y-shard-00-00.1fgxfpb.mongodb.net:27017,ac-yqwxx6y-shard-00-01.1fgxfpb.mongodb.net:27017,ac-yqwxx6y-shard-00-02.1fgxfpb.mongodb.net:27017/db_chat?ssl=true&replicaSet=atlas-r5jm5c-shard-0&authSource=admin&retryWrites=true&w=majority";

db.set('strictQuery', true);

db.Promise = global.Promise;

db.connect(uri, {
    useNewUrlParser: true,
});
console.log('[DB] Conectada con éxito');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(){
    //return list;
    const messages = await Model.find();
    return messages;
}

async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id,
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    // delete
}
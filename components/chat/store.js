const Model = require('./model');

function addChat(chat) {
    const newChat = new Model(chat);
    return newChat.save();
}

function listChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(userId){
            filter = {
                user: userId,
            }
        }
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if (error) {
                    return reject(error);
                }

                return resolve(populated);
            })
    });
}

module.exports = {
    add: addChat,
    list: listChats
}
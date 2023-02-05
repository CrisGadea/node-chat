const store = require('./store');

function addChat(users) {
    if (!users || !Array.isArray(users) || users.length < 2) {
        return Promise.reject(`Invalid user list`);      
    }

    const newChat = {
        users: users
    }

    return store.add(newChat);
}

async function listChats() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addChat,
    listChats
}

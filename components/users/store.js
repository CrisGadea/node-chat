const Model = require('./model');

function addUser(name){
    const user = new Model(name);
    return user.save();
}

async function getUsers(filterUser){
    let filter = {};
    if (filterUser != null) {
        filter = {user: filterUser};
    }
    const users = await Model.find(filterUser);
    return users;
}

module.exports = {
    add: addUser,
    get: getUsers,
}
const store = require('./store');

function addUser(name){
    return new Promise((resolve, reject) => {
        if(!name){
            console.error('[userController]: No hay Usuario.');
            reject('Los datos son incorrectos');
            return false;
        }
        const user = {
            name: name
        };
        store.add(user);
        resolve(user);
    });
}

function getUsers(filterUser){
    return new Promise((resolve, reject) => {
        resolve(store.get(filterUser));
    });
}

module.exports = {
    addUser,
    getUsers
}
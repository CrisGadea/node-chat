const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url){
    db.set('strictQuery', true);
    
    await db.connect(url, {
        useNewUrlParser: true,
    });
    
    console.log('[DB] Conectada con éxito');
}

module.exports = connect;
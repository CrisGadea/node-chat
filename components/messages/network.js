const express = require('express');

const response = require('../../network/response');

const router = express.Router();

const controller = require('./controller');
/**
 * Method that return the messages of all contacts
 * or only the filtered messages from an user filter
 */
router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
    .then((messageList) => {
        response.success(req, res, messageList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    });
});

router.post('/', (req,res) => {
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
        response.success(req,res,fullMessage, 201);
    })
    .catch( e => {
        response.error(req,res,'Información Inválida', 400, 'Error en el Controller');
    })
    
});

router.patch('/:id', function (req,res) {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=>{
        response.success(req,res,data,200);
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    })
    res.send('ok');
});

router.put('/', (req, res) => {
    res.send("El mensaje se ha modificado correctamente");
});

router.delete('/:id', (req,res) => {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req,res,`Usuario ${req.params.id} eliminado`, 200)
    })
    .catch(e => {
        response.error(req,res,'Error Interno', 500, e)
    })
    res.send("El mensaje ha sido eliminado correctamente");
});

module.exports = router;
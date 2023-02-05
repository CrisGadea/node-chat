const express = require('express');

const response = require('../../network/response');

const router = express.Router();

const controller = require('./controller');

router.get('/', (req, res) => {
    const filterUser = req.query.name || null;
    controller.getUsers(filterUser)
    .then((userList) => {
        response.success(req, res, userList, 200);
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    });
});

router.post('/', (req,res) => {
    controller.addUser(req.body.name)
    .then((user) => {
        response.success(req,res,user, 201);
    })
    .catch( e => {
        response.error(req,res,'Información Inválida', 400, 'Error en el Controller', e);
    })
    
});

module.exports = router;
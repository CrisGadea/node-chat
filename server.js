const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const response = require('./network/response');

const app = express();
app.use(bodyParser.json());
app.use(router);
app.use(express.urlencoded({extended : false}));

router.get('/message', (req, res) => {
    console.log(req.query);
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado"
    });
    response.success(req, res, "Lista de mensajes", 200);
});

router.post('/message', (req,res) => {
    console.log(req.body);
    response.success(req, res, "El mensaje se agregó correctamente", 201);
});

router.put('/message', (req, res) => {
    res.send("El mensaje se ha modificado correctamente");
});

router.delete('/message', (req,res) => {
    res.send("El mensaje ha sido eliminado correctamente");
});

app.listen(3000);
console.log("La aplicación está escuchando en el puerto http://localhost:3000");
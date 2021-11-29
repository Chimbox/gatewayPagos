const express = require('express');
const router = express.Router();
const config = require('../config/config.js');
const https = require('https');
const axios = require('axios');

/*
router
.route('/clientes')
.post(ClienteController.agregarCliente);

router
.route('/boletos')
.post(BoletoController.agregarBoleto)
.get(BoletoController.consultarBoletosApartadosCliente);*/

router
    .route('/boletos')
    .get((req, res) => {
        axios.get(config.endpoints.servicioNumPagos + 'boletos?idCliente=' + req.query.idCliente).then((response) => {
            if (response.status === 200) {
                res.status(200).send(response.data);
            } else {
                res.status(500).jsonp(false);
            }
        });
    });


router
    .route('/boletos')
    .get((req, res) => {
        axios.get(config.endpoints.servicioNumPagos + 'boletos?idCliente=' + req.query.idCliente).then((response) => {
            if (response.status === 200) {
                res.status(200).send(response.data);
            } else {
                res.status(500).jsonp(false);
            }
        });
    });

router.route('/boletos/comprobantes')
    .put((req, res) => {
        console.log(req.body);
        axios.put(config.endpoints.servicioNumPagos + 'boletos/comprobantes', { body: req.body }).then((response) => {

        });


    });

module.exports = router;
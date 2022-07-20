const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/detalle/:id', mainController.productDetail)

router.get('/login', mainController.login)

router.get('/carritoCompras', mainController.carritoCompras)

router.get('/register', mainController.register)


module.exports = router;
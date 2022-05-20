const { Router } = require('express');
const { getProducts, addProduct } = require('../controllers/productsController.js'); 


const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', addProduct);

module.exports = productsRouter;
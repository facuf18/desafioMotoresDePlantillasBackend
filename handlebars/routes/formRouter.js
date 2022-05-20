const { Router } = require('express');


const formRouter = Router();

formRouter.get('/', (req, res) => {
  res.render('layouts/form');
});

module.exports = formRouter;
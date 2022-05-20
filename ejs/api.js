const express = require('express');
const productsRouter = require('./routes/productsRouter.js');
const formRouter = require('./routes/formRouter.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use('/productos', productsRouter);
app.use('/form', formRouter);

app.get('/', (req, res) => {
  return res.render('index');
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
server.on("error", (err) => { console.log(err); });
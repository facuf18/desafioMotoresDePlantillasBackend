const express = require('express');
const { engine } = require('express-handlebars');
const productsRouter = require('./routes/productsRouter.js');
const formRouter = require('./routes/formRouter.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: `${__dirname}/views/index.hbs`,
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`
}));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'hbs');

app.use('/productos', productsRouter);
app.use('/form', formRouter);

app.get('/', (req, res) => {
  return res.render('layouts/main');
});

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
server.on("error", (err) => { console.log(err); });
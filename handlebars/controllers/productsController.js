let products = [];

const productsController = {
  getProducts: (req, res) => {
    res.render('layouts/productos', { products });
  },
  addProduct: (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      thumbnail: req.body.thumbnail
    };
    product.id = products.length + 1;
    products.push(product);
    return res.redirect('/form');
  }
};

module.exports = productsController;
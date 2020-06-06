/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get: function(req, res) {
    Product.find()
      .then(function(products) {
        if(!products || products <= 0) {
          return res.send({
            'success': false,
            'message': 'No se encontraron productos dentro de la BD'
          })
        }

        return res.send({
          'success': true,
          'message': 'Se encontraron productos registrados dentro de la BD',
          'data': products
        })

      })

      .catch(function(err) {
        sails.log.debug(err);

        return res.send({
          'success': false,
          'message': 'Verifica la conexión a la BD para resolver el problema'
        })
      })
      
  },

  create: function(req, res) {
    sails.log.debug(req.allParams);
    const addProduct = req.allParams();

    Product.create(addProduct)
      .then(function(product) {
        return res.send({
          'success': true,
          'message': 'Se encontraron productos registrados en la BD',
        })
      })

      .catch(function(err) {
        return res.send({
          'success': false,
          'message': 'No se encontraron productos en la BD'
        })
      })
  },

  update: function(req, res) {
    sails.log.debug(req.allParams());
    const updateProductId = req.param('id');
    const updatedProducts = req.allParams();

    Product.update(updateProductId, updatedProducts)
      .then(function(product) {
        return res.send({
          'success': true,
          'message': 'Se actualizaron satisfactoriamente los productos en la BD',
          'data': product
        })
      })

      .catch(function(err) {
        sails.log.debug(err);

        return res.send({
          'success': false,
          'message': 'No pudimos actualizar los productos de manera satisfactoria'
        })
      })
  },

  delete: function(req, res) {
    sails.log.debug(req.allParams());

    const productId = req.param('id');
    const deleteProduct = req.allParams();

    Product.destroy(productId, deleteProduct)
      .then(function(product) {
        return res.send({
          'success': true,
          'message': 'Se elimino correctamente el product',
          'data': product
        })
      })

      .catch(function(err) {
        sails.log.debug(erro);

        return res.send({
          'success': false,
          'message': 'No pudimos eliminar el producto correctamente'
        })
      })
  }

};


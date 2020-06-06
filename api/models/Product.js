/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'product',

  attributes: {
    
    name: {
      type: 'string'
    },

    quantity: {
      type: 'number'
    },
    
    date: {
      type: 'ref',
      columnType: 'datetime'
    },

    price: {
      type: 'number',
      columnType: 'FLOAT'
    },

    description: {
      type: 'string'
    },

  },

};


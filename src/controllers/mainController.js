const platos = require('../database/products');

/*
const about = require('../database/about');
*/

const mainController = {

    home: (req, res) => res.render('home', {
        products //es igual a products: products.
    }),

    productDetail: (req, res) => {
        
        const id = Nombre(req.params.id)

        const producto = producto.find(producto => producto.id === id)

        res.render('productDetail', {
            producto: producto
        })

    },

    carritoCompras: (req, res) => {
        
    }

}

module.exports = mainController;
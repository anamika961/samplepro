const ProductModel = require("../Model/product");

exports.getproductDetailst = (req, res) => {
    ProductModel.fetchProductData(Product => {
        res.render('Shop/shopDetails', {
            title: "shop details",
            productdata: Product
        })
    })
}
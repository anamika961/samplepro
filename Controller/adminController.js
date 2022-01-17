//const dataArray = [];
const path = require('path');
const ProductModel = require("../Model/product");

exports.getFormDisplay = (req, res) => {
    res.render('Admin/addProduct', {
        title_page: "My form"
    })
}

exports.postFormValue = (req, res) => {
    console.log("collected value form form: ", req.body);
    const productId = req.body.pid;
    const productname = req.body.pname;
    const productprice = req.body.pprice;
    // dataArray.push({ ProductID: productId, ProductName: productname, ProductPrice: productprice });
    // console.log(dataArray);
    const Product = new ProductModel(productId, productname, productprice);
    Product.saveData();
    res.redirect('/productDetAdmin');
}

exports.getAdminProduct = (req, res) => {
    ProductModel.fetchProductData(Product => {
        res.render('Admin/productDet', {
            title: "product details",
            productdata: Product
        })
    })
}

// exports.getDetails = (req, res) => {
//     res.render('Admin/productDet', {
//         title: "Details page",
//         data: dataArray
//     })
// }
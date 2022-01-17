const fs = require('fs');
const path = require('path');
module.exports = class Product {
    constructor(id, name, price) {
        this.productId = id;
        this.productname = name;
        this.productprice = price;
    }
    saveData() {
        const fileLocation = path.join(__dirname, '..', 'Data', 'product.json');

        fs.readFile(fileLocation, (err, fileContent) => {
            let productData = [];
            if (!err) {
                productData = JSON.parse(fileContent);
            }
            productData.push(this);

            fs.writeFile(fileLocation, JSON.stringify(productData), (err) => {
                console.log("error at saving data:", err);

            })
        })
    }

    static fetchProductData(callback) {
        const fileLocation = path.join(__dirname, '..', 'Data', 'product.json');

        fs.readFile(fileLocation, (err, fileContent) => {
            if (err) {
                callback([]);
            } else {
                callback(JSON.parse(fileContent));
            }
        })
    }
}
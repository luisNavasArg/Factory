"use strict";
exports.__esModule = true;
var Factory = /** @class */ (function () {
    function Factory() {
        this.id = 0;
        Factory.cantProdut++;
        this.id = Date.now();
    }
    Factory.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    Factory.prototype.setName = function (name) {
        this.name = name;
    };
    Factory.prototype.setDescription = function (description) {
        this.description = description;
    };
    Factory.prototype.setPrice = function (price) {
        var newprice = price + price * 0.3;
        this.price = newprice;
    };
    Factory.prototype.setSrc = function (src) {
        this.src = src;
    };
    Factory.prototype.getCantProduct = function () {
        return Factory.cantProdut;
    };
    Factory.prototype.getAlldetails = function () {
        return {
            id: this.id,
            code: this.codigo,
            description: this.description,
            price: this.price,
            src: this.src
        };
    };
    Factory.cantProdut = 0;
    return Factory;
}());
exports["default"] = Factory;

"use strict";
exports.__esModule = true;
var Factory_1 = require("./lib/Factory");
var auto = new Factory_1["default"]();
auto.setCodigo('BMW');
auto.setDescription('Un auto increible no se puede creer cuando se maneja como se siente una seda!');
auto.setPrice(12000000);
auto.setSrc('https://motor.elpais.com/wp-content/uploads/2021/07/2022-BMW-2-Series-Coupe-M240i-230i-80-1800x728.jpg');
console.log(auto.getAlldetails());
console.log(Factory_1["default"].cantProdut);
var react = new Factory_1["default"]();
react.setCodigo('react-01');
react.setDescription('Crear intefaces de usuario en el front con este framework');
react.setPrice(30000);
react.setSrc('https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg');
console.log(react.getAlldetails());
//Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), pastikan awali dengan menuliskan ./.
//jika lebih dari satu gunakan destructing object
//menggunakan format common js
// const {coffeeStock, isCoffeeMachineReady} = require('./export'); 
//jika menggunakan es6 maka perlu meneluskan type : module pada package json

import { coffeeStock, isCoffeeMachineReady } from "./export.js";

// import coffeeStock from "./export.js";
console.log(coffeeStock);
console.log(isCoffeeMachineReady);
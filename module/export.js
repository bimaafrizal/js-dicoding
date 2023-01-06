const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
const isCoffeeMachineReady = true;

//menggunakan common js
// module.exports = {coffeeStock, isCoffeeMachineReady};

//menggunakan es6
// export default coffeeStock; //jika satu
export {coffeeStock, isCoffeeMachineReady}; //jika lebih dari satu
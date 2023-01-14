//kita dapat menulislkan async seperti synch dengan keyword async dan await
//untuk menangani onRejected dan onResolved menggunakan try catch
// async function makeCoffe() {
//     try{
//         const coffe = await getCoffe();
//         console.log(coffe);
//     } catch(rejectedReason) {
//         console
//     }
// }

// makeCoffe();

const {checkAvailability, checkStock, brewCoffee, boilWater, grindCoffeeBeans} = require('./promise');
async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}

makeEspresso();
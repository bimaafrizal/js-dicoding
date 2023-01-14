//set time out 
//terdiri dari dua parameter yang kedua fungsi yang dijalankan dan nilai tunggu dalam mili second
console.log('Selamat Datang');
setTimeout(() => {
    console.log('Terima Kasih');
}, 3000);
console.log("Ada yang bisa saya bantu");
//fungsi timeout tidak akan menghentikan js untuk mengeksksekusi kode,

//callback function
//mengembalikan nilai pada sebuah fungsi async
const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
});

//callback hell terjadi ketika dalam satu fungsi terdapat banyak callback function
//hal ini terjadi karena fungsi berjalan secara asnc dan satu fungsi dengan yang lain tidak dapat saling mendahuli, contoh:
// function makeACake(...rawIngredients) {
//     collectIngredients(rawIngredients, function(ingredients) {
//         makeTheDough(ingredients, function(dough) {
//             pourDough(dough, function(pouredDough) {
//                 bakeACake(pouredDough, function(cake) {
//                     console.log(cake);
//                 })
//             })
//         })
//     });
// }
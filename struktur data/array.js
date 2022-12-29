let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[1]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

//menambah data ke array
myArray.push('JavaScript');
console.log(myArray);

//mengeluarkan data terakhir dari array
myArray.pop();
console.log(myArray);

//manipulasi data
myArray.shift(); //mengeluarkan data pertama
myArray.unshift("Apple"); //menambah data pertama
console.log(myArray);

//menghapus data menurut index
delete myArray[1];
console.log(myArray);

//mengahpus index tertentu sebanyak elemen
myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);


//spread operator
//digunakan untuk menyebarkan nilai array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites);

const others = ["Cake", "Pie", "Donut"];
const allFavorites = [...favorites, ...others];

console.log(allFavorites);


//desctructing array
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
//nama bis aterserah
 const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

const [, , thirdFood2 ] = favorites; //mengambil nilai salah satu array

//jika variabel sudah digunakan
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);

//menukar nilai
let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);


//default values
const favorites3 = ["Seafood"];
const [myFood2, herFood2 = "Salad"] = favorites3
console.log(myFood2);
console.log(herFood2);
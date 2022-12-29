//mitip dengan object tapi tidak hanya mengizinkan key bertipe string atau symbol
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);


const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));


//jangan gunakan karena data tidak akan disimpan di Map Query dan tidak bisa menggunakan fitur seperti .has .delete

// const wrongMap = new Map(); 
// wrongMap["My Key"] = "My Value";
// console.log(wrongMap["My Key"]);
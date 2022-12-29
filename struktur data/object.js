//inisialisasi
const user = {};

//key and value
const user2 = {
    firstName: "Luke", 
    lastName: "Skywalker", 
    age: 19, 
    isJedi: true
};

//mengakses properti object
console.log(`Halo, nama saya ${user2.firstName} ${user2.lastName}`);
console.log(`Umur saya ${user2.age} tahun`);
console.log(`Saya berasal dari ${user2["home world"]}`);

//merubah nilai 
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);


//sprad operator 
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);


//destructing object
//memecah object dengan cepat
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

//penamaan variabel harus sesuai dengan nama properti
// const {firstName, lastName, age} = profile;
// console.log(firstName, lastName, age);

//jika variabel sudah digunakan
// let firstName = "Dimas";
// let age = 20;
// ({firstName, age} = profile);
 
// console.log(firstName);
// console.log(age);


//default values
const {firstName, age, isMale = false} = profile;
console.log(firstName)


//assigning to different local variabel
const {firstName: localFirstName, lastName: localLastName, age: localAge} = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
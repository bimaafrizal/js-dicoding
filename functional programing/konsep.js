//functional Programming ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.

//pure function
//konsep dimana fungsi tidak bergantung pada nilai di luar fungsi atau parameter
//contoh nilai pi harus berada di dalam fungsi agar tidak bisa dirubah
const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96
//dilarang untuk merubah nilai yang berada di luar baik senaja atau tidak sengaja
//gunakan destructing object daripada mengubah objek secara langsung
//contoh salah
// const createPersonWithAge = (age, person) => {
//     person.age = age;
//     return person;
//   };
  
//   const person = {
//     name: 'Bobo'
//   };
  
//   const newPerson = createPersonWithAge(18, person);
  
//   console.log({
//     person,
//     newPerson
//   });

//contoh benar
const createPersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });

//perlu diperhatikan!!
//Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
// Hanya bergantung pada argumen yang diberikan.
// Tidak menimbulkan efek samping.

//immutability berartu object tidak boleh diubah setelah objek dibuat
//dibanding dengan merubah objek secara langsung, return objek baru
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

//rekrusif adalah teknik untuk memanggil dirinya sendiri
//bisa menggantikan operasi iterasi dengan rekursi
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
  };
  
  countDown(10);


//high order function
//fungsi yang dapat menerima fungsi lainnya pada argumen, mengembalikan fungsi, atau keduanya
// Teknik Higher-Order Function biasanya digunakan untuk:

// Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
// Membuat utilities yang dapat digunakan di berbagai tipe data.
// Membuat teknik currying atau function composition.
const hello = () => {
    console.log('Hello!')
  };
  
  const say = (someFunction) => {
    someFunction();
  }
  
  const sayHello = () => {
      return () => {
          console.log('Hello!');
      }
  }
  
  hello();
  say(hello);
  sayHello()();
//fungsi yang sudah ada di dalam js

//array map
//mengembalikan array
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);


//array filter
//digunakan untuk melakukan filtering pada nilai array
//mirip map tapi hasilnya boolean
//contoh ingin menghilangkan nilai false
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);
//contoh lain
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents);

//array reduce 
//mirip dengan array map tapi hanya mengembalikan satu nilai saja
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);


//array some
//menghasilkan array berdasar kriteria yang kita buat
//contoh ingin mengetahui apakah dalam deretan terdapat angka genap
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

//array find
//untuk mencari apakah di dalam deretan terdapat nilai yang sesuai dengan kriteria tapi mereturn sebuah nilai
const findJames = students.find(student => student.name === 'James');
console.log(findJames);

//array sort 
//mengurutkan nilai dalam deretan dalam bentuk string secara asc
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

//jika mengurutkan berdasar kriteria kita inginkan kita perlu membuat dompare function
const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);


//array every
//untuk mengecekk semua nilai dari sebuah array sesuai kriteria
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);


//foreach
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
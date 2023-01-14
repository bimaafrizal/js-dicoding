//fungsi ini berfungsi untuk membuat janji 
//promise digunakan untuk membuat kode yang ditangguhkan dan berjalan secara async

const executorFunction = (resolve, reject) => {
    const isCoffeeMachineReady = false;
    if(isCoffeeMachineReady) {
        resolve('Kopi berhasil dibuat');
    } else {
        reject('Mesin kopi tidak bisa digunakan');
    }
}


const makeCoffe = () => {
    return new Promise(executorFunction);
}

// const coffePromise = makeCoffe();
// console.log(coffePromise);

//didalam promise kita perlu resolver function, yaitu fungsi yang akan dijalankan ketika constructor Promise dipanggil

//executor function memiliki dua parameter yaitu resolve dan reject. ketika fungsi ini dijalankan maka kondisi promise akan berubah dari pending menjadi fulfilled. ketika fungsi ini dipanggil maka promise akan berubah dari pending menjadi rejected

//output yang dihalikan masih berupa promise, bukan nilai yang dibawa oleh fungsi resolve atau reject. untuk meakses nilai dapat menggunakan method then\
//.then adalah sebuah high-order function yang membutuhkan dua parameter yang keduanya callback function. hendler pertama ketika resolve yang kedua ketika reject

const stock = {
    coffeBeans: 250,
    water:1000,
}

//fungsi promise
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if(stock.coffeBeans >= 16 && stock.water >= 250) {
//             resolve("Stock cukup. Bisa membuat kopi");
//         } else {
//             reject("Stock tidak cukup");
//         }
//     });
// };

//fungsi handler yang digunakan ketika ketika promise resolve
const handleSuccess = resolvesValue => {
    console.log(resolvesValue);
}
//fungsi handler yang digunakan ketika handle then reject
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

// checkStock().then(handleSuccess, handleFailure);

//dalam aturan penulisan, lebih baik fungsi untuk menerima promise resolve dan reject dipisah, maka bisa menggunakan .catch() untuk handler onRejected
// checkStock()
// .then(handleSuccess)
// .catch(handleFailure);


//chaining promise
//digunakan untuk menghindari hell callback

const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }), 10000;
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then((value) => {
//             console.log(value);
//             state.isCoffeeMachineBusy =false
//         })
//         .catch((rejectionReason) => {
//             console.log(rejectionReason);
//             state.isCoffeeMachineBusy =false;
//         });
// }

// makeEspresso();


//promise all
//dapat menerima banyak promise dalam bentuk array kemudian akan mengembalikan nilai seluruh promise dalam bentuk array
const boilWater = () => {
    return new Promise((resolve, reject) => {
      console.log('Memanaskan air...');
      setTimeout(() => {
        resolve('Air panas sudah siap!');
      }, 2000);
    });
  };
   
  const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
      console.log('Menggiling biji kopi...');
      setTimeout(() => {
        resolve('Bubuk kopi sudah siap!');
      }, 1000);
    });
  };

  function makeEspresso() {
    checkAvailability()
      .then((value) => {
        console.log(value);
        return checkStock();
      })
      .then((value) => {
        console.log(value);
        const promises = [boilWater(), grindCoffeeBeans()];
   
        return Promise.all(promises);
      })
      .then((value) => {
        console.log(value)
        return brewCoffee();
      })
      .then((value) => {
        console.log(value);
        state.isCoffeeMachineBusy = false;
      })
      .catch((rejectedReason) => {
        console.log(rejectedReason);
        state.isCoffeeMachineBusy = false;
      });
  }
   
  makeEspresso();

  module.exports = {state,checkAvailability, checkStock, brewCoffee, boilWater, grindCoffeeBeans}  
  //pada saat boilwater dan grindCoffeBeans kit aperlu menunggu 1 setik. ini meneunjukan bahwa semua promise di dalam Promise.all() berjalan bersamaan dan ,enunggu sampai proses di dalamanya selesai dujalankan
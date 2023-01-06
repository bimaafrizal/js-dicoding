//try kode yang dijalankan jika tidak ada error
//catch kode yang dijalankan ketika error
//finally tetap dijalankan mengabaikan dari blok try catch

//membuat custom validasi
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

let json = '{ "age": 20 }';
// let json = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new ValidationError("'name' is required."); //melemparkan error pada program sehingga akan masuk pada blok catch
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
 
    errorCode;

    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
        //instanceOf digunakan untuk mendapatkan tipe dari error
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    }else if (error instanceof ReferenceError) { 
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
    // console.log(`JSON Error: ${error.message}`);
}



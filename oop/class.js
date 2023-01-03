//sintaks class di JavaScript hanyalah syntactic sugar atau cara alternatif dalam mendefinisikan constructor function
class Car {
  //membuat private properti dan method dengan #(harus deklarasi terlebih dahulu)
  #chassisNumber = null;
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      // this.chassisNumber = chassisNumber;
      // this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
      this.#chassisNumber = this.#generateChassisNumber();
    }
   
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn() {
      console.log(`${this.brand} ${this.color} is turning`);
    }

    get chassisNumber() {
      return this.#chassisNumber;
    }
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }

    #generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
   
  // Membuat objek mobil dengan constructor function Car
  // const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  // const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  // const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
  
  // console.log(car1);
  // console.log(car2);
  // console.log(car3);
   
  // car1.drive();
  // car2.drive();
  // car3.drive();

  const car = new Car('BMW', 'red', 200);
console.log(car.chassisNumber);
car.chassisNumber = 'BMW-1';
console.log(car.chassisNumber);
// console.log(car.#chassisNumber); //tidak bisa di deklarasikan

  class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);



  class Mail {
    constructor(sender, receiver, subject, body) {
      this.sender = sender;
      this.receiver = receiver;
      this.subject = subject;
      this.body = body;
    }
   
    // Methods
    send() {
      console.log(`Sending mail from ${this.sender} to ${this.receiver}`);
    }
   
    sendLater(delay) {
      console.log(`Sending after ${delay} ms`);
   
      setTimeout(() => {
        this.send();
      }, delay);
    }
   
    saveAsDraft() {
      console.log('Saving mail as draft');
    }
  }
   
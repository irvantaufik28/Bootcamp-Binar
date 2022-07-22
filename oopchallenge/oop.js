// 1. Buatlah object dalam javascript (tanpa menggunakan class) yang memiliki property:
// - first_name
// - last_name
// - email
// - umur

let profil = {
  first_name: "irvan",
  last_name: "Taufik",
  email: "irvantaufik@gmail.com",
  umur: 28,

  // 2. Buatlah method pada object yang telah dibuat di soal no.1 yang berfungsi untuk
  // mengembalikan full name (gabungan fist_name dan last_name)!

  full_name: () => {
    return `${profil.first_name} ${profil.last_name}`;
  },
};

console.log("NO 1 -----------------");
console.log(profil);
console.log("NO 2 -----------------");
console.log(profil.full_name());

// 3. Buatlah array of object dengan property objectnya seperti soal no.1!

let newProfil = [
  {
    firstName: "irvan",
    lastName: "Taufik",
    email: "irvantaufik28@gmail.com",
    umur: 28,
    full_name: () => {
      return `${newProfil.first_name} ${newProfil.last_name}`;
    },
  },
  {
    firstName: "cindy",
    lastName: "mutiara",
    email: "cindymutiara@gmail.com",
    umur: 27,
    full_name: () => {
      return `${newProfil.first_name} ${newProfil.last_name}`;
    },
  },
  {
    firstName: "qian",
    lastName: "alvaro sidik",
    email: "qian@gmail.com",
    umur: 5,
    full_name: () => {
      return `${newProfil.first_name} ${newProfil.last_name}`;
    },
  },
];

console.log("NO 3 -----------------");
console.log(newProfil);

// 4. Berdasarkan array pada soal no.3 buatlah function yang berfungsi untuk mengurutkan array
// pada soal no.3 berdasarkan property umur (ascending; umur lebih kecil di urutan awal)

const ageYoungestAge = (myArray) => {
  let age = myArray.map((e) => e.umur).sort((a, b) => a - b);
  return age;
};
console.log("NO 4 -----------------");
console.log(ageYoungestAge(newProfil));

// 5. Buatlah function untuk menghitung umur rata-rata pada soal no 3!

// Use for loop

const average = (myArray) => {
  sum = 0;
  for (i = 0; i < myArray.length; i++) {
    sum += myArray[i].umur / myArray.length;
  }
  return sum;
};
console.log(average(newProfil));

//  use Map & reduce

const averAge = (myArray) => {
  let sum = myArray.map((e) => e.umur).reduce((a, b) => a + b);
  sum = sum / myArray.length;
  return sum;
};
console.log("NO 5 -----------------");
console.log(averAge(newProfil));

// 6. Buatlah function untuk mengembalikan object yang memiliki full name paling Panjang pada

const fullname = (arr) => {
  let allFullName = arr.map((item) => `${item.firstName} ${item.lastName}`);
  let longFullname = "";
  for (i = 0; i < allFullName.length; i++) {
    if (longFullname.length < allFullName[i].length) {
      longFullname = allFullName[i];
    }
  }
  return longFullname;
};
console.log("NO 6 -----------------");
console.log(fullname(newProfil));

// 7. Pada array of object di no.3, buatkan function untuk mencari umur termuda dalam list
// object tersebut!

//  Use Funtion Sort
const ageYoungest = (myArray) => {
  let age = myArray.map((e) => e.umur).sort((a, b) => a - b)[0];
  return age;
};
console.log("NO 7 -----------------");
console.log(ageYoungest(newProfil));


// use For loop
const ageYoungestLoop = (myArray) => {
  let age = myArray.map((e) => e.umur)
  
  let young = age[0];
  for (i = 0; i < age.length; i++) {
    if ( age[i] < young) {
      young = age[i];
    }
  }
  return young;
};
console.log(ageYoungestLoop(newProfil));

// 8. Buatlah class dengan dengan nama Shape (bentuk), silahkan gunakan kreatifitas untuk
// membuat method dan propertynya. Class tersebut harus memenuhi kriteria berikut:

// a. Mengaplikasikan konsep inheritance, dengan menurunkan Class Shape ke dalam 3 sub-
// class/child class:

// - Rectangle
// - Triangle
// - Circle
// b. Harus mengaplikasikan konsep polymorphism
// c. Class Shape tidak boleh diinisiasi langsung menjadi instance

class Shape {
  constructor(color) {
    this.color = color;
  }
  keliling = () => {
    return "keliling";
  };
}

class Rectangle extends Shape {
  constructor(color, panjang, lebar) {
    super(color);
    this.panjang = panjang;
    this.lebar = lebar;
  }

  keliling = () => {
    return 2 * (this.panjang + this.lebar);
  };
}

class Triangle extends Shape {
  constructor(color, sisi) {
    super(color);
    this.sisi = sisi;
  }
  keliling = () => {
    return this.sisi + this.sisi + this.sisi;
  };
}

class Circle extends Shape {
  constructor(color, jariJari) {
    super(color);
    this.jariJari = jariJari;
  }
  keliling = () => {
    return 2 * 3, 14 * this.jariJari;
  };
}

let newReacangle = new Rectangle("Red", 10, 2);
let newTriangle = new Triangle("blue", 12);
let newCircle = new Circle("black", 14);

console.log("NO 8 -----------------");
console.log(newReacangle.color);
console.log(newReacangle.keliling());
console.log(newTriangle.color);
console.log(newTriangle.keliling());
console.log(newCircle.color);
console.log(newCircle.keliling());

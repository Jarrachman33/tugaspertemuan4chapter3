// function student( 
//     name,
//     address
// ) {
//     let greeting = `Hai, my name is ${name}, and my address is ${address}`
//     return greeting
// }
//  console.log(student("julio", "semarang");
 




// 1. rubah function calculator menjadi arrow function
const calculator = (operation, a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Input harus berupa angka";
    }
    if (operation === "add") {
        return a + b;
    } else if (operation === "substract") {
        return a - b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        return a / b;
    } else if (operation === "power") {
        return Math.pow(a, b);
    }else {
        ("operation tidak valid");
    }
};

let awd = "jarrachman" // buat testing validasi
let test = 7;
let test1 = 7;

console.log("Penjumlahan:", calculator("add", awd, test1));
console.log("Penjumlahan:", calculator("add", test, test1));
console.log("Pengurangan:", calculator("substract", test, test1));
console.log("Perkalian:", calculator("multiply", test, test1));
console.log("Pembagian:", calculator("divide", test, test1));
console.log("pangkat", calculator("power", test, test1));

// 2. rubah function konversi celcius ke fahrenheit menjadi function dan currying

// Arrow Function
const celciustofahrenheit = (celcius) => (celcius * 9) / 5 + 32;

// Currying
const req = 1.8; // 9/32
const req1 = 32;

const celciustofahrenheitCurried = (celcius) => {
    return function (x) {
        return function (y) {
            return celcius * x + y;
        };
    };
};

console.log(celciustofahrenheitCurried(30)(req)(req1));

console.log(celciustofahrenheit(90));

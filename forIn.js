// melakukan perbandingan 
let array = [1, 3, 5, 7, 9];
    // 1 = bilangan ganjil
    // 3 = bilangan genap karena sisa 0
    // 5 = bilangan genap karena sisa 2
    // 7 = bilangan ganjil karena sisa 1
    // 9 = bilangan genap karena sisa 0
let result;

for (result in array) {
    if (array[result] % 3 == 1) {
        console.log(`Bilangan Ganjil`);
    } else {
        console.log(`Bilangan Genap`);
    }
}

let objek2 = [2,4,6,8,10,12,14];
let hasil;

for (hasil in objek2) {
    console.log(`Bilangan yang ada di objek 2 yaitu : ` + objek2[hasil]);
}
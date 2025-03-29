// Belajar Looping | Part 5
// Looping berfungsi untuk mengulang suatu pernyataan atau blok kode
// Jenis looping yang ada di JavaScript adalah :
// for loop dan for of cocok digunakan untuk array
// for in cocok digunakan untuk object
// while loop cocok digunakan untuk kondisi tertentu

// Point yang dipahami
// 1. Pelajari Indexing pada String dan Array
// 2. Flow Looping
// Arah Looping
// Harus ada yang membuat looping berhenti (kecuali kebutuhan infinite loop khusus)
// Jauhi Infinite Loop kalau tidak perlu
// Permainan Kondisi pada looping
// Memahami Flow Nested Loop (KUNCI UTAMA)


// Konsep Dasar Looping
// Looping adalah proses mengulang eksekusi dari suatu blok kode selama kondisi tertentu terpenuhi.

// For Loop
// Digunakan saat jumah iterasi sudah diketahui sebelumnya
// contoh : 
// for (let i = 0: i < 5; i++){
//    console.log(i);
//}

// While Loop
// Digunakan saat jumlah iterasi tidak diketahui sebelumnya. Cocok untuk kasus dengan kondisi dinamis
// contoh :
// let password = "";
// while (password !== "1234") {
//     password = prompt("Masukkan password: ");
// }

// Do While Loop
// Mirip dengan while loop, tetapi blok kode dieksekusi setidaknya sekali sebelum kondisi diperiksa
// contoh :
// let password;
// do {
//     password = prompt("Masukkan password: ");
// } while (password !== "1234");

// For Of Loop
// Digunakan untuk iterasi pada array atau objek iterable lainnya (seperti string)
// contoh :
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// For In Loop
// Digunakan untuk iterasi pada properti objek
// contoh :
// const person = { name: "John", age: 30 };
// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


// Kontrol Loop: Break dan Continue
// Break digunakan untuk menghentikan loop sepenuhnya
// Continue digunakan untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya
// contoh :
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break; // menghentikan loop saat i = 5
//     }
//     console.log(i);
// }
// contoh :
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue; // melewati iterasi saat i = 5
//     }
//     console.log(i);
// }

// Latihan Soal 1
// Buatlah perulangan 1-100 dengan pertambahan counter 1. Di dalam perulangan:

// Jika angka kelipatan 4, tampilkan "FOUR"
// Jika angka kelipatan 7, tampilkan "SEVEN"
// Jika angka kelipatan 4 dan 7, tampilkan "FOURSEVEN"
// Jika tidak memenuhi kondisi di atas, tampilkan angka itu sendiri

// for(let i = 1; i < 100; i++){
//     if(i % 28 === 0){
//         console.log("FOURSEVEN")
//     } else if(i % 4 === 0){
//         console.log("FOUR")
//     } else if(i % 7 === 0){
//         console.log("SEVEN")
//     } else {
//         console.log(i)
//     }
// }

// Nested Looping
// Digunakan untuk melakukan looping di dalam looping
// Contoh :
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`i: ${i}, j: ${j}`);
//     }
// }


// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//         console.log("\n");
//     }
// }
  // 

// // b. P// ola Bintang

// Usecase Nested Looping
// a. Matriks

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

// Pola Bintang
// let bintang = '';
// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         bintang += '*';
//     }
//     bintang += '\n';
// }
// console.log(bintang);

// let angka = 0;
// for(let i = 1; i <= 5; i++){
//     for(let j = 1; j <= i; j++){
//         angka++;
//         process.stdout.write(angka + ' ');
//     }
//     console.log();
// }

// Bubble Sort
// const arr = [5, 3, 8, 4, 2];
// for(let i = 0; i < arr.length - 1; i++){
//     for(let j = 0; j < arr.length - i - 1; j++){
//         if(arr[j] > arr[j + 1]){
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
//         }
//     }
// }

// Jenis Nested Looping
// For Loop di dalam For Loop
// While Loop di dalam For Loop
// Do While Loop di dalam While Loop

// Latihan Soal 2: Bilangan Prima menggunakan while
// let countPrime=0;
// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++) { // Hanya cek hingga √i
//       if (i % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       countPrime++;
//       console.log(i);
//     }
//   }
// console.log(`Jumlah bilangan prima dari 1-100 adalah ${countPrime}`);


// Bukan bilangan prima
// let countNotPrime=0;
// for (let i = 2; i <= 100; i++) {
//     let isNotPrime = false;
//     for (let j = 2; j < i; j++) { // Hanya cek hingga √i
//       if (i % j === 0) {
//         isNotPrime = true;
//         break;
//       }
//     }
//     if (isNotPrime) {
//       countNotPrime++;
//       console.log(i);
//     }
//   }
// console.log(`Jumlah bilangan bukan prima dari 1-100 adalah ${countNotPrime}`);

// Input pengguna isPrime?
// const readline = require('readline'); // Memanggil modul readline

// // Membuat interface untuk membaca input dari pengguna
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Meminta input dari pengguna
// rl.question("Masukkan angka: ", (angka) => {
//   console.log(`Anda memasukkan angka: ${angka}`);
  
//   rl.close(); 
//   let isPrime = true;
// for (let j = 2; j <= Math.sqrt(angka); j++) { 
//     if (angka % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if(angka < 2){
//     console.log(`${angka} bukan bilangan prima`)
//   }
//   else if (isPrime) {
//     console.log(`${angka} adalah bilangan prima`);
//   } else {
//     console.log(`${angka} bukan bilangan prima`);
//   } 
// }
// );

// Latihan Membuat Deret Fibonacci inputan pengguna
// const readline = require('readline'); // Memanggil modul readline

// // Membuat interface untuk membaca input dari pengguna
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Meminta input dari pengguna
// rl.question("Masukkan angka: ", (angka) => {
//   console.log(`Anda memasukkan angka: ${angka}`);
  
//   rl.close(); 
//   let n1 = 0, n2 = 1, nextTerm;

//   for (let i = 1; i <= angka; i++) {
//       console.log(n1);
//       if (i < angka) {
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//       }
//   }
//   console.log(`Deret Fibonacci hingga ${angka} adalah: ${n1}`);
// });


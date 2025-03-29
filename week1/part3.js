// JavaScript - Syntax Basic | Part 3

// Variable
// Variable adalah tempat untuk menyimpan data. Di JavaScript, variabel dideklarasikan dengan menggunakan kata kunci var, let, atau const.

// Deklarasi variabel dengan var 
var nama = "Bagus";
var umur = 23;

// Deklarasi variabel dengan let (direkomendasikan untuk variable yang nilainya bisa berubah)
let alamat = "Jakarta";
alamat = "Bandung";

// Deklarasi variabel dengan const (untuk variable yang nilainya tetap)
const gravitasi = 9.8;
// gravitasi = 10; // Error

//Hal penting tentang variable JavaScript:
//Variable bisa menyimpan berbagai tipe data: string, number, boolean, array, object, dll
let name = "Bagus";
let age = 23;
let isMarried = false;
let hobbies = ["membaca", "menulis", "menggambar"];
let person = {
    nama: "Bagus",
    umur: 23,
    isMarried: false,
    hobbies: ["membaca", "menulis", "menggambar"],
};
// Nama variable harus dimulai dengan huruf, underscore (_), atau dollar sign ($)
var _nama = "Bagus";
var $nama = "Bagus";
// Variable bersifat case-sensitive, artinya nama dan Nama adalah dua variable berbeda
let namaDepan = "Tria";
let namadepan = "Andini";
console.log(namaDepan); // Bagus  
// Gunakan nama yang bermakna untuk memudahkan pembacaan kode  
let namaAwal = "Bagus";
let namaAkhir = "Sandi";
console.log(namaAwal + " " + namaAkhir); // Bagus Sandi

console.log('---------------------------------');

// ------------------------------------------------------------------------------------------------------------

// Variable Scope -> konsep yang menentukan dimana sebuah variable bisa diakses dalam kode.
// Scope adalah ruang lingkup akses variabel. Ada tiga jenis scope: global, local/function, dan block.

// Global Scope
// Variable global bisa diakses dari mana saja dalam kode.
var globalVar = "Ini adalah global variable";
let globalLet = "Ini adalah global variable";

function myFunction() {
    console.log(globalVar);
    console.log(globalLet);
}

myFunction();


// Local/Function Scope
// Variable yang dideklarasikan dalam sebuah function hanya bisa diakses di dalam function tersebut.
function myFunction2() {
    var localVar = "Ini adalah local variable";
    let localLet = "Ini adalah local variable";
    console.log(localVar);
    console.log(localLet);
}
// console.log(localVar); // Error
// console.log(localLet); // Error
myFunction2();

console.log('---------------------------------');

// Block Scope
// Variable yang dideklarasikan dalam sebuah block hanya bisa diakses di dalam block tersebut.
if (true) {
    var blockVar = "Ini adalah block variable var"; // var tidak mengenal block scope
    let blockLet = "Ini adalah block variable let"; // let mengenal block scope
    const blockConst = "Ini adalah block variable const"; // const mengenal block scope
    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
}
console.log(blockVar);
// console.log(blockLet); // Error
// console.log(blockConst); // Error

// Perbedaan antara var, let, dan const dalam hal scope:
// var bisa diakses sebelum dideklarasikan (hoisting)
console.log(hoistingVar); // undefined
var hoistingVar = "Ini adalah hoisting var";
console.log(hoistingVar);
// let dan const tidak bisa diakses sebelum dideklarasikan
// console.log(hoistingLet); // Error
let hoistingLet = "Ini adalah hoisting let";
// console.log(hoistingConst); // Error
const hoistingConst = "Ini adalah hoisting const";

console.log('---------------------------------');


// LOGGING
//Logging dalam JavaScript adalah cara untuk menampilkan informasi, data, atau pesan untuk keperluan debugging dan monitoring.

// Console Log - Menampilkan log
console.log("Hello World");

// Console Error - Menampilkan error
console.error("Ini adalah error");

// Console Warn - Menampilkan peringatan
console.warn("Ini adalah peringatan");

// Console Info - Menampilkan informasi
console.info("Ini adalah informasi");

// Console Table - Menampilkan data dalam bentuk tabel
const users = [
    { nama: "Andini", umur: 20 },
    { nama: "Bagus", umur: 22 },
];
console.table(users);

// Console Group - Mengelompokkan log
console.group("User Detail");
console.log("Nama: Budi");
console.log("Umur: 25");
console.groupEnd();

console.log('---------------------------------');

// Data Types
// Tipe data dalam JavaScript dibagi menjadi dua kategori utama yaitu Primitive Types dan Reference Types.
// Primitive Types -> Menyimpan nilai secara langsung
// String - Tipe data untuk teks
let name2 = "Bagus";
// Number - Tipe data untuk angka
let age2 = 23;
// Boolean - Tipe data untuk nilai benar atau salah
let isMarried2 = false;
// Undefined - Tipe data untuk variable yang belum diberi nilai
let job;
// Null - Tipe data untuk nilai kosong
let address = null;
console.log(address); // null
// Symbol - Tipe data untuk nilai yang unik 
const id = Symbol("id");

// Reference Types
// Reference Types adalah tipe data yang menyimpan referensi ke nilai. Beberapa tipe data reference types di JavaScript adalah:
// Array - Tipe data untuk menyimpan kumpulan nilai
let hobbies2 = ["membaca", "menulis", "menggambar"];
// Object - Tipe data untuk menyimpan data dalam bentuk pasangan key-value
let person2 = {
    nama: "Bagus",
    umur: 23,
    isMarried: false,
    hobbies: ["membaca", "menulis", "menggambar"],
};
// Function - Tipe data untuk menyimpan kode yang bisa digunakan kembali
function sayHello() {
    console.log("Hello!");
}
sayHello();

// Type Checking
// Untuk mengecek tipe data dari sebuah variable, kita bisa menggunakan operator typeof.
console.log(typeof name2); // string
console.log(typeof age2); // number
console.log(typeof isMarried2); // boolean
console.log(typeof address); // object
console.log(typeof id); // symbol
console.log(typeof hobbies2); // object
console.log(typeof person2); // object
console.log(typeof sayHello); // function
console.log('---------------------------------');

// Type Conversion
// Type Conversion adalah proses mengubah tipe data dari satu tipe ke tipe lain.
// String to Number
let number = Number("10");
let string = String(10);

// ke boolean
let boolean = Boolean(1);
let boolean2 = Boolean("");

// Automatic Type Conversion
let hasil = 10 + "10"; // "1010"
let hasil2 = "10" - 5; // 5

// Best Practice
let produk = {
    nama: "Laptop",
    harga: 10000000,
    stok: 10,
    spesifikasi: ["Intel i5", "8GB RAM", "512GB SSD"],
    tersedia: true,
    getInfo: function () {
        return `${this.nama} - Rp${this.harga}`;
    },
};

if (produk.stok > 0 && produk.tersedia) {
    console.log(produk.getInfo());
    console.log("Spesiifikasi:" + produk.spesifikasi.join(", "));
}

// String Type Detailed
// String bersifat immutable, artinya setelah string dibuat, kita tidak bisa mengubah karakter di dalamnya.
let kata = "JavaScript";
// Mengakses karakter
console.log(kata[0]); // J
// Mengubah karakter
kata[0] = "j"; // Error
console.log(kata); // JavaScript

// String length
console.log(kata.length); // 10
// akses karakter terakhir
console.log(kata[kata.length - 1]); // t

let kalimat = "Belajar JavaScript";
// Mengambil substring
console.log(kalimat.substring(8, 18)); // JavaScript
// Mengubah case
console.log(kalimat.toUpperCase()); // BELAJAR JAVASCRIPT
console.log(kalimat.toLowerCase()); // belajar javascript
// Mencari posisi karakter
console.log(kalimat.indexOf("Script")); // 12

// Template Literals
// Template literals memungkinkan menambahkan variabel dan multiple line.
let nama3 = "Bagus";
let umur3 = 23;
let kalimat2 = `Nama saya ${nama3}
umur saya ${umur3}`;
console.log(kalimat2); // Nama saya Bagus, umur saya 23

// Iterasi checking / manipulating
let kalimat3 = "Belajar JavaScript!";
let jumlahKonsonan = 0;

for (let i = 0; i < kalimat3.length; i++) {
    let huruf = kalimat3[i].toLowerCase();
    if (!"aiueo".includes(huruf) && /[a-z]/.test(huruf)) {
        jumlahKonsonan++;
    }
}
console.log(`Jumlah konsonan: ${jumlahKonsonan}`);

// Number
// Deklarasi Number
let angka = 10;
let angkaDesimal = 10.5;
let angkaNegatif = -10;
let angkaEksponen = 2e3; // 2000
let angkaNegatifEksponen = 2e-3; // 0.002

// Operasi Aritmatika
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000

// Increment dan Decrement
let c = 10;
c++; // 11
console.log(c); // 11
c--; // 10
console.log(c); // 10

// Operasi Kompleks
console.log(Math.round(10.7)); // 11 pembulatan ke terdekat
console.log(Math.floor(10.5)); // 10 pembulatan ke bawah
console.log(Math.ceil(10.5)); // 11 pembulatan ke atas
console.log(Math.abs(-10)); // 10 nilai absolut
console.log(Math.sqrt(100)); // 10 akar kuadrat
console.log(Math.max(10, 5, 8)); // 10 nilai maksimum
console.log(Math.min(10, 5, 8)); // 5 nilai minimum
console.log(Math.random()); // nilai random antara 0 dan 1

// Nilai khusus Number
console.log(Infinity); 
console.log(-Infinity);
console.log(NaN);
// contoh NaN
let d = 10;
let e = "a";
console.log(d * e); // NaN
console.log(parseInt("Halo")); 

// Konversi ke number
let stringAngka = "10";
let desimalString = "10.5";

console.log(parseInt(stringAngka)); // 10
console.log(parseFloat(desimalString)); // 10.5
console.log(Number(stringAngka)); // 10
console.log(+stringAngka); // 10

// Masalah presisi floating point
// Solusi gunakan toFixed()
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2)); // 0.30

console.log('---------------------------------');

// Condicional Statement
// Conditional statement adalah struktur kontrol yang digunakan untuk membuat keputusan berdasarkan kondisi tertentu.
// If Statement
let nilai = 80;
if (nilai > 75) {
    console.log("Selamat Anda Lulus!");
}else if(nilai > 60){
    console.log("Anda Remedial!");
}
else{
    console.log("Anda Tidak Lulus!");
}
// Ternary Operator 
let keterangan = nilai > 75 ? "Lulus" : "Tidak Lulus";
console.log(keterangan);

// Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Senin");
        break;
    case 2:
        console.log("Selasa");
        break;
    case 3:
        console.log("Rabu");
        break;
    default:
        console.log("Hari tidak ditemukan");
}

// Logical Operator
// Logical AND (&&)
let nilai2 = 80;
let absensi = 80;
if (nilai2 > 75 && absensi > 75) {
    console.log("Selamat Anda Lulus!");
}
// Logical OR (||)
let nilai3 = 80;
let absensi2 = 70;
if (nilai3 > 75 || absensi2 > 75) {
    console.log("Selamat Anda Lulus!");
}
// Logical NOT (!)
let isMarried3 = false;
if (!isMarried3) {
    console.log("Belum Menikah");
}
// Short-circuit Evaluation
console.log(false && "Hello"); // false
console.log(true || "Hello"); // true

let user = {
    name: "Bagus",
    setting: null,
};

let tema = user.setting && user.setting.preference;
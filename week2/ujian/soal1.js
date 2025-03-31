//Soal 1
//```js
/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  // you can only write your code here!
  let indexX = [];
  let indexO = [];
  let minDist = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      indexX.push(i);
    } else if (arr[i] === 'o') {
      indexO.push(i);
    }
  }

  if (indexX.length === 0 || indexO.length === 0) {
    return 0; // Tidak ada 'x' atau 'o'
  }

  for (let i = 0; i < indexX.length; i++) {
    for (let j = 0; j < indexO.length; j++) {
      minDist = Math.min(minDist, Math.abs(indexO[j] - indexX[i]));
    }
  }

  return minDist;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
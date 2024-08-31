// function deklaration
function JumlahDuaBilangan(a, b) {
  var total;
  total = a + b;

  return total;
}

//function expression
var JumlahDuaBilangan = function (a, b) {
  var total;
  total = a + b;

  return total;
};

// // calling function
alert(JumlahDuaBilangan(12 + 67));

function menjumlahkanVolume(a, b) {
  return a * a * a + b * b * b;
}

alert(menjumlahkanVolume(8, 3));

// Variable scope (block scope and function scope)
// Block Scope biasanya diguanakan di bahasa C dan Java dan Javascript menggnakan fnction scope

a = 1; // global scope / variable global

function test() {
  var b = 2;
  console.log(b); // 2
  console.log(a); // didalam function bisa mengakses variable global
}

test();

// Rekursif (sebuah function yang memanggil diri sendiri)
function menampilkanAngka(n) {
  // Menambahkan base case agar tidak terjadi infinity loop
  if (n === 0) {
    return;
  }
  console.log(n);
  menampilkanAngka(n - 1);
}

menampilkanAngka(10);

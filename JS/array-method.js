//Method pada Array
// 1. Join (menampilkan array dengan string)
var nama = ["Rifki", "Andriyan", "Pratama"];

console.log(nama.join());

// 2. Push & Pop (menambah dan menghapus sebuah data dalam array)
var nama = ["Rifki", "Andriyan", "Pratama"];
nama.push("yuhuu", "yahahaha");
nama.pop();
console.log(nama);

// 3. Unsift & Shift (menambah data dengan posisi unsift di paling awal dan menghapus data dengan posisi paling awal dengan shift)
var nama = ["Rifki", "Andriyan", "Pratama"];
nama.unshift("hahahah");
nama.shift();

console.log(nama);

// 4. Splice (Splice digunakan untuk menghubungkan atau menyambngkan sebuah array)
// Rumus pada splice = splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ...)
var nama = ["Rifki", "Andriyan", "Pratama"];
nama.splice(2, 0, "huhu");

console.log(nama);

// 5. Slice (Slice digunakan untuk mengiris atau memisahkan sebuah array menjadi array yang baru )
//Rumus = slice(indexAwal(Akan terbawa), indexAkhir(Tidak Terbawa))
var nama = ["Rifki", "Andriyan", "Pratama", "hahaha"];
var nama2 = nama.slice(1, 3);

console.log(nama2);

// 6. forEach (Digunakan untuk membuat fungsi pada setiap elemen)
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
angka.forEach(function (n) {
  console.log(n);
});

var nama = ["Rifki", "Andriyan", "Pratama", "hahaha"];
nama.forEach(function (e, i) {
  console.log("Siswa terbaik no- " + (i + 1) + " adalah " + e);
});

// 7. Map (Mirip dengan foreach namun map bisa mengembalikan nilai array)
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var angka2 = angka.map(function (n) {
  return n * 3;
});

console.log(angka2);

// 8. Sort (Digunakan untuk mengurutkan data dalam sebuah array)
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4];
var angka2 = angka.sort();
console.log(angka2);

// 9. Filter (Digunakan untuk mencari nilai pada array dan mengembalikannya dalam bentuk array)
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var angka2 = angka.filter(function (x) {
  return x > 5;
});
console.log(angka2);

// 10. Find (Sama digunakan untuk mencari nilai dalam suatu array namun mengembalikanya hanya 1 nilai yang pertama kali ditemukan dan bukan dalam bentuk array)
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);

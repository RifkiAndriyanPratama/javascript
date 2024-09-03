// // Object Literal(Tidak efektif untuk object yang banyak)
// var siswa = {
//   nama: "Danu Wisesa",
//   umur: 198,
//   alamat: {
//     desa: "Tanjung Karang",
//     kecamatan: "Jetis",
//   },
// };

// var siswa2 = {
//   nama: "Rifki Andriyan Pratama",
//   umur: 1900,
//   alamat: {
//     desa: "Turi",
//     kecamatan: "Bambanglipuro",
//   },
// };

// // Function Declaration
// const MethodSiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan!`);
//   },
// };

// function Siswa(nama, energi) {
//   let siswa = Object.create(MethodSiswa);
//   siswa.nama = nama;
//   siswa.energi = energi;
//   return siswa;
// }

// let Rifki = Siswa("Rifki", 1000);
// // Constructor Function
// // function Siswa() {
// //   let Siswa = Object.create(buatObjectSiswa);
// //   return Siswa;
// // }

// var siswa3 = new Siswa("huhuhu", "19000");

// // Object.create()

// function Siswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Siswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan`;
// };

// Siswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat main`;
// };

// let rifki = new Siswa("Rifki", 100);

//versi class

class Siswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan`;
  }
}

let rifki = new Siswa("Rifki", 1000);

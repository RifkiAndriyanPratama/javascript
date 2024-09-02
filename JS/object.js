// Object Literal
var siswa = {
  nama: "Danu Wisesa",
  umur: 198,
  alamat: {
    desa: "Tanjung Karang",
    kecamatan: "Jetis",
  },
};

// Function Declaration
function buatObjectSiswa(nama, umur) {
  var siswa = {};
  siswa.nama = nama;
  siswa.umur = umur;
  return siswa;
}

var siswa2 = buatObjectSiswa("Yiho", "1900");

// Constructor Function
function Siswa(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

var siswa3 = new Siswa("huhuhu", "19000");
// Object.create()

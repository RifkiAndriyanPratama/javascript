var penumpang = [];

var tambahPenumpang = function (nama, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    penumpang.push(nama);
    return penumpang;
  } else {
    var checkPenumpang = penumpang.find(function (e) {
      if (e == nama) {
        return true;
      }
    });
    var ambilIndexPenumpang = penumpang.findIndex(function (e) {
      return e == undefined;
    });
    if (checkPenumpang === nama) {
      console.log(nama + " sudah ada didalam angkot");
      return penumpang;
    } else if (ambilIndexPenumpang < 0 && checkPenumpang == undefined) {
      penumpang.push(nama);
      return penumpang;
    } else if (checkPenumpang == undefined && penumpang.length > 0) {
      penumpang[ambilIndexPenumpang] = nama;
      return penumpang;
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("Angkot Masih Kosong!");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] == undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " Tidak ada didalam angkot");
        return penumpang;
      }
    }
  }
};

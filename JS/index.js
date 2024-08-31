// console.log(document.title)
// document.title = 'Rifki Andriyan'

// console.log(document.title)
// console.log(document.body)

// //Membuat element h1
// const h1 = document.createElement('h1') // <h1></h1>
// h1.textContent = "anjay ini h1" // <h1>anjay ini h1</h1>

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = "Rifki Andriyan Pratama"

// const namaKamu = document.createElement('b')
// namaKamu.innerText = "Hahaha"

// //Memasukkan h1 kedalam body
// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)

// const btn1 = document.getElementById('button1')
// const btn2 = document.querySelector('.button2')

// btn1.style.border = "none"
// btn1.style.padding = "24px"
// btn1.style.fontSize = "24px"
// btn1.style.backgroundColor = "red"
// btn1.style.cursor = "pointer"

// btn2.style.border = "none"

// function gantiWarna() {
//     console.log('aman')
//     btn1.style.backgroundColor = "blue"
// }

// function hover() {
//     btn1.style.backgroundColor = "green"
// }

const buah = ["anggur", "jeruk", "melon"];
const kopi = ["kopi kapal api", "kopi gula aren", "kopi susu"];
const newKopi = kopi;

newKopi[0] = "kopokopo";
console.log(kopi);
console.log(newKopi);

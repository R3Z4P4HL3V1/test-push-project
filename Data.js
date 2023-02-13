// Tipe data const = tipe data yang konstan
// Tipe data let = tipe data yang bisa berubah
const namaSaya = "Reza Pahlevi"
let usiaSaya = 6

// Memasukan javascript ke html
let biodata = document.getElementById('biodata');
console.log(biodata);

// {
// Salah satu cara menulis console
//console.log(`Nama Saya ${namaSaya} dan usia saya ${usiaSaya} tahun`)
//
// Cara Lain
// Hilangkan Comment codingan di bawah ini
// console.log("Nama Saya "+namaSaya+" dan usia saya "+usiaSaya+" tahun")
//
// Cara Lain
// Hilangkan Comment codingan di bawah ini
//console.log('nama saya adalah ',namaSaya,' Usia saya adalah ',usiaSaya,' Tahun')
// }

function generateBiodata() {
    let generation;

    if (usiaSaya > 10 && usiaSaya <= 28){
        generation = "generasi remaja"
    }
    else if (usiaSaya >=6 && usiaSaya< 11){
        generation = "generasi Anak-anak"
    }
    else if (usiaSaya >0 && usiaSaya<5){
        generation = 'generasi Bayi'
    }
    else {
        generation = 'generasi manula'
    }
    return biodata.innerHTML = generation
}

console.log(namaSaya)
console.log(usiaSaya)
generateBiodata()
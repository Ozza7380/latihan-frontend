// objek dan value
let manusia = {
    nama: "Raihan",
    namalengkap: "Muhammad Raihan Hidaytullah",
    usia: 16,
    status: "pelajar",
    pekerjaan: "pelajar"
};
console.log(manusia.nama)
console.log(manusia.namalengkap.toLowerCase())
console.log(manusia.usia)
console.log("lima tahuan yang akan datang",manusia.usia+5)
console.log(manusia.alamat)

// tanda array = []
let buah = ["apel", "jeruk", "pisang"];
buah.push("nanas");  // menambahkan nama buah
console.log(buah[0]); // buah 1 = jeruk
// filter = mencari data yang dingikan
let buahpanjang = buah.filter(item => item.length > 5); // hasil = jeruk, pisang, nanas

// if else (benar tidak)
let nilaiUjian =100;
if (nilaiUjian >= 101) {
    console.log("nilai tidak valid")
} else if (nilaiUjian >= 90) {
    console.log("nilai memuaskan")
} else if (nilaiUjian >= 75) {
    console.log("selamat, anda lulus");
} else if (nilaiUjian >= 60) {
    console.log("anda perlu perbaikan")
} else if (nilaiUjian >= 0) {
    console.log("nilai tidak mencukupi")
} else {
    console.log("nilai tidak valid")
}
// for (looping)
for (let i = 0; i < 1; i++) {
    console.log(i + ". Saya akan giat belajar.")
}
for (let i = 0; i < 5; i++) {
    let text = ""
    for (let s=0; s < i+1;  s++) {
        text=text+"*"
    } 
    console.log(text)
}
for (let i = 0; i < 5; i++) {
    let text = ""
    for (let s= 0;  s < 4-i; s++) {
        text=text+"*"
    }
    console.log(text)
}
for (let i = 0; i < 100; i++)
    if (i%0===0) {
        console.log(i)
    }
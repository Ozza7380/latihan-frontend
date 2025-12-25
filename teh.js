console.log("jalan")
let cangkirTeh = {
    suhuAir: 0,
    isAdaTeh: false,
    gula: 0,
    isSiap: false
};
const suhuIdeal = 90;
let langkah = ["Memanaskan Air", "Memasukan Teh", "Menambahkan Gula"];

for (let i = 0; i < langkah.length; i++) {
    console.log(`langkah ${i + 1}: ${langkah[i]}`);

    if (langkah[i] === "Memanaskan Air") { 
        cangkirTeh.suhuAir = suhuIdeal;
    } else if (langkah[i] === "Memasukan Teh") {
        cangkirTeh.isAdaTeh = true;
    } else if (langkah[i] === "Menambahkan gula") {
    cangkirTeh.gula = 2;
    } 
}
if (cangkirTeh.suhuAir >= 80 && cangkirTeh.isAdaTeh) {
    cangkirTeh.isSiap = true;
    console.log("\n Teh siap disajikan!")
} else {
    console.log("\n Teh belum siap, ada langkah yang terlewat.");
}
    
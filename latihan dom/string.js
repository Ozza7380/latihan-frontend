let teks = "belajar string";
document.getElementById('root').textContent = teks; 

const arab = " بِسْمِ اللّٰهِ ";
document.getElementById('arab').textContent = arab; 

const kalimat = "belajar string itu penting"
const kata = kalimat.split(" ") // mengubah string ke array. memisahkan kalimat berdasarkan spasi

const cek = "belajar string di js"

const ul = document.createElement("ul"); // membuat element ul

// kata.foreach = mengulangi perkata
kata.forEach(ka => { // kata=ka, ka hanya bisa di gunakan dalam kurawal
    const li = document.createElement("li");
    li.textContent = ka; // menambahkan 'ka' ke 'li' 
    ul.appendChild(li); // menambahkan 'li' ke 'ul'
});
document.body.appendChild(ul); // menambah ul ke body yang ada di html

console.log(kata);// menampilkan "kata" di console
console.log(teks.length);// menampilkan jumlah huruf di console
console.log(arab.length);// menampilkan jumlah huruf di console

//teks = cek.includes('string') // mengecek apakah string ada atau tidak (true false)
teks = arab.trim() // memotong spasi depan dan belakang " kata " menjadi "kata"
teks = teks.replace('belajar', 'memahami') // mengganti kata yang di pilih, teks.replaceAll mengganti semua kata di teks
teks = teks.toUpperCase();// membesarkan "teks"
teks = teks.slice(3, 4);  // memotong kata berdasarkan lokasi dan panjang kata, 'belajar' menjadi 'ajar'
teks = teks.substring(3, 6) // memotong kata berdasarkan lokasi awal dan akhir, 'belajar' menjadi 'ajar'

const hasil = arab + "" + teks // menggabungkan variable satu dengan variable lainya
const literal = `${teks} ${arab}` //menggabungkan variable satu dengan variable lainya

document.getElementById('gabungan'). textContent = literal // menampilkan varible literal ke html

console.log(hasil) // menampilkan "hasil" di console
console.log(literal) // menampilkan "literal" di console
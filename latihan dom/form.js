document.getElementById('buttonHello').onclick=function() {
    alert('hello Raihan');
}

document.getElementById('btnNama').onclick=function() { // memanggil document 'btnNama'
    const nama = document.getElementById('nama').value;
let massage = ""
    if (nama == '') {
        massage=('maaf masukan nama terlebih dahulu');
    }
    else if (nama.trim() == 'Raihan'||nama.trim() == 'raihan') {
        massage=('Assalamualaikum Raihan');
    }
    else {
        massage=('hello' + ' ' + nama);
    }
    document.getElementById('outPut').innerText = massage
}
document.getElementById('btnSimpan').onclick = function() {
    const nama = document.getElementById('namaSimpan').value;
    localStorage.setItem('nama', nama);
}
document.getElementById('btnAmbil').onclick=function() {
    const nama = localStorage.getItem('nama')
    document.getElementById('hasil').innerText = nama;
}
document.getElementById('cek').onclick = function() {
    // 1.mengambil data dari inputan
    const scoreInput = document.getElementById('score').value;
    const scoreInputint = parseInt(scoreInput)
    // 2. mengambil data score dari localstorage
const skorSimpan = localStorage.getItem('score')
const skorSimpanint = parseInt(skorSimpan)
    // 3. membandingkan nilai score dari inputan dengan di localstorage lalu di simpan ke variabel local score
const scoreCek = scoreInputint > skorSimpanint
console.log (scoreCek)
    // 4. jika inputan paling besar maka score tersebut di simpan dan menampilkan score terbesar
   if(scoreCek) {
    localStorage.setItem('score', scoreInput)
    alert('selamat anda mencetak score baru!')
}
    // 5. jika inputan lebih kecil maka menapilkan teks nilai kurang besar
   else {alert('nilai kurang besar')}
}


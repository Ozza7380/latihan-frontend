const form = document.getElementById('registration');

form.addEventListener('submit', function (event) { // form di cek ketika mengclick "submit" dan menjalankan function yang berisi "event" atau data yang telah di isi
    event.preventDefault(); // menghilangkan event bawaan seperti reload ketika di pencet

    const name = document.getElementById("name").value;
    const whatsapp = document.getElementById("WhatsApp").value;
    const alamat = document.getElementById("Alamat").value;
    const barang = document.getElementById("barang").value;
    console.log("Nama:", name)
    console.log("WhatsApp:", whatsapp); 
    console.log("alamat:", alamat)
    console.log("barang pesanan:", barang)
    if (!whatsapp.startsWith("62")) {
        alert("No  WhatsApp harus di awali 62!");
        return;
    }
    console.log("wa sesuai")
    const massage = ` assalamualaikum Admin, 
saya ingin melakukan pesanan atas nama *${name.trim()}*
dengan alamat *${alamat.trim()}*
dan pesanan sebagai berikut:
*${barang.trim()}*

terimakasih.`;
    console.log("peasan:", massage)
    const endcodeMassage = encodeURIComponent(massage);
    console.log("encoded:", endcodeMassage)
    const waUrl = `https://wa.me/6285747798750?text=${endcodeMassage}`;
    console.log('whatsapp url:', waUrl)
    window.open(waUrl, "_blank");
}) 
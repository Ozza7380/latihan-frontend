const form = document.getElementById('registration');

form.addEventListener('submit', function (event) { // form di cek ketika mengclick "submit" dan menjalankan function yang berisi "event" atau data yang telah di isi
    event.preventDefault(); // menghilangkan event bawaan seperti reload ketika di pencet

    const name = document.getElementById("name").value;
    const whatsapp = document.getElementById("WhatsApp").value;
    console.log("Nama:", name)
    console.log("WhatsApp:", whatsapp); 
    if (!whatsapp.startsWith("62")) {
        alert("No  WhatsApp harus di awali 62!");
        return;
    }
    console.log("wa sesuai")
    const massage = `assalamualaikum Admin, 
    saya ingin melakukan registrasi atas nama ${name} dan no wa ${whatsapp}, terimakasih.`;
    console.log("peasan:", massage)
    const endcodeMassage = encodeURIComponent(massage);
    console.log("encoded:", endcodeMassage)
    const waUrl = `https://wa.me/6285747798750?text=${endcodeMassage}`;
    console.log('whatsapp url:', waUrl)
    window.open(waUrl, "_blank");
}) 
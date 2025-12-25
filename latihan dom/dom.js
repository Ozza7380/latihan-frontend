// akses id dari html ke js
console.log("jalan")
let judul = document.getElementById("judul")
console.log(judul.textContent);
// akses class dari html ke js
let listItem = document.querySelector(".list")
listItem.style.color = 'purple';
listItem.style.background = 'cyan'

const paragraf = document.getElementById('deskripsi');
// mengubah content teks
paragraf.textContent = 'ini adalah deskripsi yang baru';
// mengubah content teks termasuk html
paragraf.innerHTML = 'ini <b>teks yang di-bold</b> menggunakan html';

const tautan = document.getElementById('link')
// mengubah nilai atribut 'htef'
//tautan.href = 'https://tadabbur-quran-r.web.app/';
tautan.setAttribute('href', 'https://afirmasi-dan-doa.web.app/')
tautan.setAttribute('target', '_blank');  // mengubah properti pada element

// buat element <li> baru
const newItem = document.createElement('li')
// content text
const textItem = document.createTextNode('item baru ditambahkan');
// gabungkn teks ke element <li>
newItem.appendChild(textItem); // menambahkan  textItem ke newItem
// cari element parent (misal <ul> dengan id 'list')
const daftarList = document.querySelector('.list');
// tambahkan element <li> baru ke parent <ul> (agar bisa di tampilkan)
daftarList.appendChild(newItem); // menambahkan new item ke dalam daftarList

// menghapus elemnt anak dengan removeChild()
const itemYangAkanDihapus = document.getElementById('item-1')
// contoh: daftarList.removeChild(itemYangAkanDihapus)
itemYangAkanDihapus.remove() // lebih simple

console.error("🍼 5 Studi Kasus Modularisasi")
//1.Bangun Datar
    //File persegi.js: fungsi luas persegi (sisi * sisi).
import { lingkaran } from "./lingkaran.js";
    //File lingkaran.js: fungsi luas lingkaran (π * r * r).
import { persegi } from "./persegi.js";
    //File main.js: import keduanya dan tampilkan hasil.
console.log(persegi(2,2));
console.log(lingkaran(7));


//2.Pengolahan String
    //File teks.js: fungsi besar(teks) → ubah semua huruf ke huruf besar
import { besar } from "./teks.js";
    //File main.js: pakai fungsi besar("belajar modular").
console.log(besar("belajar modular"));


//3.
    //File waktu.js: fungsi jamSekarang() → return jam saat ini (new Date().toLocaleTimeString()).
import { jamSekarang } from "./waktu.js";
    //File main.js: import dan tampilkan jam sekarang.
console.log(jamSekarang());


//4.Salam Default
    //File salam.js: export default fungsi sapa(nama) → return "Halo, nama!".
import salam from './salam.js';
    //File main.js: panggil dengan nama bebas.
console.log(salam("zaki"));


//5.Utility Campuran
    //File utils.js: default export fungsi versi() dan named export hitung(a, b).
import random, {hitung} from './utils.js'
    //File main.js: import keduanya dan tampilkan.
console.log(random);
console.log(hitung(10,20));


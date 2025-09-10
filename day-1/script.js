console.error("🎮 Latihan Mandiri");
//1.Buat array berisi 5 nama temanmu.
//2.Tambahin 1 nama di depan dan di belakang.
//3.Hapus 1 nama dari depan dan belakang.
//4.Selipin nama baru di posisi ke-2.
//5.Hitung berapa jumlah teman sekarang pakai .length.


//1.
let nama = ["reyhan", "faiz", "zidan", "ayash", "yamin"];


//2.
nama.unshift("lexy");
nama.push("zaki");
console.log(nama);


//3.
nama.pop();
nama.shift();
console.log(nama);


//4.
nama.splice(1,0,"dien");
console.log(nama);


//5.
console.log(nama.length);


//studi kasus
            console.error("1. push() & unshift() (Tambah Isi)");
//Kamu punya array buah, tambahin 2 buah baru di depan dan belakang.
//Kamu bikin array daftar belanja, masukin barang baru yang baru aja kamu ingat.
//Kamu punya array hewan peliharaan, tambahin hewan baru di depan.
//Kamu punya array film favorit, tambahin film terbaru.
//Kamu punya array angka, masukin angka 0 di awal.


//1.
let buah =[];
buah.push("mangga");
buah.unshift("stroberi");
console.log(buah);


//2.
let belanjaan =[];
belanjaan.unshift("figure", "dakimakura", "RTX 3060", "silicone doll");
console.log(belanjaan);


//3.
let peliharaan =["kucing"];
peliharaan.unshift("kuda");
console.log(peliharaan);


//4.
let animeFav = ["seishun buta yarou","princess connect RE-dive"];
animeFav.push("kakegurui");
console.log(animeFav);


//5.
let angka = [1,2,3,4];
angka.unshift(0);
console.log(angka);


            console.error("2. pop() & shift() (Hapus Isi)");
//1.Kamu punya array mainan, buang mainan terakhir karena rusak.
//2.Kamu punya array baju, buang baju paling depan karena kotor.
//3.Kamu punya array makanan, makan makanan terakhir (hapus terakhir).
//4.Kamu punya array tugas sekolah, hapus tugas pertama karena udah selesai.
//5.Kamu punya array daftar antrian, hapus orang pertama (udah dilayani).


//1.
let mainan =["gundam", "silicone doll"];
mainan.pop();
console.log(mainan);


//2.
let baju =["kaos","hoodie","baju bola"];
baju.shift();
console.log(baju);

//3.
let makanan =["sushi","ramen","taiyaki"];
makanan.pop();
console.log(makanan);


//4.
let tugasSekolah =["bahasa inggris","matematika","IPA"];
tugasSekolah.shift();
console.log(tugasSekolah);


//5.
let antrian = [1,2,3,4,5];
antrian.shift();
console.log(antrian);


console.error("3. length (Hitung Isi)");
//1.Hitung jumlah buah di array.
//2.Hitung jumlah teman di array.
//3.Hitung jumlah angka di array.
//4.Hitung jumlah barang di daftar belanja.
//5.Hitung jumlah hewan di array.


//1.
console.log(buah.length);
//variabelnya diatas

//2.
console.log(nama.length);
//variabelnya diatas

//3.
console.log(angka.length);
//variabelnya diatas

//4.
console.log(belanjaan.length);
//variabelnya diatas

//5.
console.log(peliharaan.length);
//variabelnya diatas


console.error("4. splice() (Sisip/Hapus di Tengah)");

//1.Kamu punya array warna ["merah", "kuning", "hijau"], sisipkan "biru" di posisi ke-2.
//2.Kamu punya array teman, hapus teman di posisi ke-3.
//3.Kamu punya array angka [1,2,3,4,5], hapus angka 3 dan ganti dengan 30.
//4.Kamu punya array makanan, tambahin makanan baru di tengah.
//5.Kamu punya array benda ["buku", "pensil", "penghapus"], ganti "pensil" jadi "pulpen".


//1.
let warna =["merah", "kuning", "hijau"];
warna.splice(1,0,"biru");
console.log(warna);


//2.
let teman =["hasbi","faishal","rahmat","azriel"];
teman.splice(2,1);
console.log(teman);


//3.
let angka2 =[1,2,3,4,5];
angka2.splice(2,1,30);
console.log(angka2);


//4.
let makanan2 =["ramen","pizza","kue","ayam bakar"];
makanan2.splice(2,0,"mie aceh");
console.log(makanan2);


//5.
let alatTulis =["buku", "pensil", "penghapus"];
alatTulis.splice(2,1,"pulpen");
console.log(alatTulis);

console.error("5. Kombinasi Semua");
//1.Buat array daftar belanja, tambahin barang, hapus barang, terus hitung jumlah barang.
//2.Buat array hewan peliharaan, masukin hewan baru, hapus hewan lama, lalu selipin hewan baru di tengah.
//3.Buat array angka, tambahin angka baru di akhir, buang angka awal, lalu cek jumlahnya.
//4.Buat array teman, tambahin teman baru di awal, hapus teman terakhir, lalu ganti teman ke-2 pakai nama lain.
//5.Buat array makanan, tambahin makanan, hapus makanan, selipin makanan, terus tampilkan semua.


//1.
let belanja = ["beras","gula","minyak"];

belanja.push("telur");
console.log(belanja);

belanja.pop();
console.log(belanja);

console.log("Jumlah barang:", belanja.length);


//2.
let hewan = ["kucing","anjing","burung"];

hewan.push("kuda");
console.log(hewan); 

hewan.shift();
console.log(hewan);

hewan.splice(1, 0, "kelinci");
console.log(hewan);


//3.
let angka3 = [10, 20, 30];

angka3.push(40);
console.log(angka3);

angka3.shift()
console.log(angka3); 

console.log(angka3.length);


//4.
let temanSekolah = ["adit","denis","ucup"];

temanSekolah.unshift("dodo");
console.log(temanSekolah); 

temanSekolah.pop();
console.log(temanSekolah)

temanSekolah.splice(1,1,"jojo");
console.log(temanSekolah); 

//5.
let makanan3 = ["Nasi", "Soto", "Bakso"];


makanan3.push("Mie Ayam");
console.log(makanan3);


makanan3.shift();
console.log(makanan3);

makanan3.splice(1, 0, "Rendang");
console.log(makanan3); 

console.table(makanan3);



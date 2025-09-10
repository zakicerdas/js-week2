console.log("Bab 2.3: Object & Manipulasi Properti");
        console.error("📝 Studi Kasus 1");
//1.Buat object mobil dengan properti merk dan warna. Tampilkan merk.
//2.Buat object siswa dengan properti nama dan kelas. Tampilkan kelas.
//3.Buat object hewan denga properti jenis dan umur. Tampilkan jenis.
//4.Buat object film dengan properti judul dan tahun. Tampilkan tahun.
//5.Buat object akun dengan properti username dan password. Tampilkan username.


//1.
let mobil ={
    merk: "lamborgini",
    warna: "hijau"
};
console.log(mobil.merk);


//2.
let siswa ={
    nama: "zaki",
    kelas: 12
};
console.log(siswa.kelas);


//3.
let hewan ={
    jenis: "kucing",
    umur: 4
};
console.log(hewan.jenis);


//4.
let film ={
    judul: "K-ON movie",
    tahun: 2015
};
console.log(film.tahun);


//5.
let akun ={
    username:"zakiA",
    password: 12345
};
console.log(akun.username);

        console.error("📝 Studi Kasus 2");
//1.Ubah warna mobil jadi "hitam".
//2.Ubah kelas siswa jadi "XI".
//3.Ubah umur hewan jadi 5.
//4.Ubah tahun film jadi 2024.
//5.Ubah password akun jadi "rahasia123".


//1.
mobil.warna = "hitam"
console.log(mobil.warna);

//2.
siswa.kelas = "XI"
console.log(siswa.kelas);

//3.
hewan.umur = 5;
console.log(hewan.umur);

//4.
film.tahun = 2024;
console.log(film.tahun);

//5.
akun.password = "rahasia123";
console.log(akun.password);


        console.error("📝 Studi Kasus 3");
//1.Tambahkan properti harga pada object mobil.
//2.Tambahkan properti alamat pada object siswa.
//3.Tambahkan properti makanan pada object hewan.
//4.Tambahkan properti genre pada object film.
//5.Tambahkan properti email pada object akun.


//1.
mobil.harga = 100000000;
console.log(mobil.harga);

//2.
siswa.alamat = "tanggerang";
console.log(siswa.alamat);

//3.
hewan.makanan  = "whiskas";
console.log(hewan.makanan);

//4.
film.genre = "music";
console.log(film.genre);

//5.
akun.email = "zakitoriq1@gmail.com";
console.log(akun.email);


        console.error("📝 Studi Kasus 4");
//1.Hapus harga dari mobil.
//2.Hapus alamat dari siswa.
//3.Hapus makanan dari hewan.
//4.Hapus genre dari film.
//5.Hapus email dari akun.


//1.
delete mobil.harga;
console.log(mobil);

//2.
delete siswa.alamat;
console.log(siswa);

//3.
delete hewan.makanan;
console.log(hewan);

//4.
delete film.genre;
console.log(film);

//5.
delete akun.email;
console.log(akun);


        console.error("📝 Studi Kasus 5");
//1.Loop semua isi mobil.
//2.Loop semua isi siswa.
//3.Loop semua isi hewan.
//4.Loop semua isi film.
//5.Loop semua isi akun.


//1.
for (let object in mobil) {
  console.log(object + " : " + mobil[object]);
}

//2.
for (let object in siswa) {
  console.log(object + " : " + siswa[object]);
}

//3.
for (let object in hewan) {
  console.log(object + " : " + hewan[object]);
}

//4.
for (let object in film) {
  console.log(object + " : " + film[object]);
}

//5.
for (let object in akun) {
  console.log(object + " : " + akun[object]);
}


        console.error("🎯 Latihan Mandiri (Gabungan)");
//1.Buat object buku dengan properti: judul, pengarang, tahunTerbit.
//2.Tambahkan properti penerbit.
//3.Ubah nilai tahunTerbit.
//4.Hapus pengarang.
//5.Tampilkan semua isi object dengan looping.


//1.
let buku ={
    judul: "RuriSinaga",
    pengarang: " Masaoki Shindo",
    tahunTerbit: 2022
};


//2.
buku.penerbit = "Shueisha"
console.log(buku.penerbit);


//3.
buku.tahunTerbit = 2024;
console.log(buku.tahunTerbit);


//4.
delete buku.pengarang;
console.log(buku);


//5.
for (let object in buku) {
  console.log(object + " : " + buku[object]);
}

console.error("🎮 Evaluasi Harian (Studi Kasus Besar)");
//Buat program bukuFavorit yang:

//Menyimpan judul, pengarang, tahunTerbit.
//Menambah properti penerbit.
//Mengubah tahunTerbit.
//Menghapus pengarang.
//Menampilkan semua isi object.


//hasil
let bukuFavorit ={
    judul: "Naruto shippuden",
    pengarang: " Masashi kisihimoto",
    tahunTerbit: 2000
};
bukuFavorit.penerbit = "Shueisha"
console.log(bukuFavorit.penerbit);

bukuFavorit.tahunTerbit = 2008;
console.log(bukuFavorit.tahunTerbit);

delete bukuFavorit.pengarang;
console.log(bukuFavorit);

for (let object in bukuFavorit) {
  console.log(object + " : " + bukuFavorit[object]);
}

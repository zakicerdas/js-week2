        console.error("🏋️ Latihan Main");
//1.Bikin array isi angka 1–10.
//2.Pakai map buat kaliin semua angka dengan 5.
//3.Pakai filter buat ambil angka genap.
//4.Pakai reduce buat jumlahin semua angka.
//5.Pakai find buat cari angka pertama yang lebih dari 8.

//1.
let angka4 =[1,2,3,4,5,6,7,8,9,10];


//2.
let kali = angka4.map(function(a) {
    return a * 5;
});
console.log(kali);


//3.
let genap = angka4.filter(function(b){
    return b %2 === 0;
});
console.log(genap);


//4.
let jumlah = angka4.reduce(function(total,c){
    return total + c;
}, 0);
console.log(jumlah);


//5.
let cari = angka4.find(angka => angka === 5);
console.log(cari);

        console.error("🎯 Studi Kasus (5 contoh)");
//1.Ada daftar nama buah, terus cetak semua pakai forEach.
//2.Ada daftar harga barang, kalikan semua harga dengan 10% pakai map.
//3.Ada daftar umur orang, ambil yang umurnya lebih dari 17 pakai filter.
//4.Ada daftar nilai ujian, jumlahkan semua nilai pakai reduce.
//5.Ada daftar nomor kursi, cari kursi pertama yang lebih dari nomor 20 pakai find.


//1.
let buahBuahan =["mangga","apel","jambu","nanas","zaqqum"];
let Cetak = buahBuahan.forEach(function(buah){
    console.log("ini buah " + buah);
});


//2.
let hargaBarang =[10000,15000,20000,25000];
let kalikan = hargaBarang.map(i => i * 0.10);
console.log(kalikan);


//3.
let umur =[15,23,43,16,99,12,10,9];
let tua = umur.filter(x => x > 17);
console.log(tua);


//4.
let nilai =[70,98,100,86,71];
let hitung = nilai.reduce(function (total,n) {
    return total + n;
}, 0);
console.log(hitung);


//5.
let noKursi =[21,23,45,99,44,20,19];
let search = noKursi.find(kursi => kursi === 20);
console.log(search);

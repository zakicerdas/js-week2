console.log("Bab 2.4: Destructuring & Spread/Rest Operator");
        console.error("📝 Studi Kasus 1");
//1.Ambil nilai dari array [10, 20, 30] jadi variabel x, y, z.
//2.Ambil nilai pertama dan kedua dari array ["apel", "jeruk", "mangga"].
//3.Ambil nilai pertama dan sisanya dari array [5, 6, 7, 8].
//4.Destructuring array [100, 200] jadi satu dan dua.
//5.Destructuring array [true, false, true] jadi t1, t2, t3.


//1.
let angka =[10,20,30];
let [x,y,z] = angka;
console.log(x,y,z);


//2.
let buah =["apel","jeruk","mangga"];
let [a,b] = buah;
console.log(a,b);


//3.
let array =[5, 6, 7, 8];
let [d] = array;
console.log(d);


//4.
let array2 =[100, 200];
let [satu,dua] = array2;
console.log(satu,dua);


//5.
let array3 =[true, false, true];
let [T1, T2, T3] = array3;
console.log(T1,T2,T3);


        console.error("📝 Studi Kasus 2");
//1.Destructuring object { nama: "Budi", umur: 17 }.
//2.Ambil judul dan pengarang dari object { judul: "Buku A", pengarang: "Andi" }.
//3.Ambil merk dari object { merk: "Honda", warna: "merah" }.
//4.Destructuring { username: "danz", password: "123" }.
//5.Ambil nama dan kelas dari { nama: "Siti", kelas: "XI" }.


//1.
let data ={ nama: "Budi", umur: 17 };
let {nama, umur} = data;
console.log(nama);
console.log(umur);


//2.
let buku2 = { judul: "Buku A", pengarang: "Andi" };
let  { judul, pengarang} = buku2;
console.log(judul);
console.log(pengarang);


//3.
let motor = { merk: "Honda", warna: "merah" };
let {merk} = motor;
console.log(merk);


//4.
let account ={ username: "danz", password: "123" };
let {username, password} = account;
console.log(username);
console.log(password);


//5.
let siswa2 ={ nama2: "Siti", kelas: "XI" };
let {nama2} = siswa2;
console.log(nama2);


        console.error("📝 Studi Kasus 3");
//1.Gabungkan [1, 2] dengan [3, 4].
//2.Copy array [10, 20, 30] ke array baru.
//3.Gabungkan object { a: 1 } dengan { b: 2 }.
//4.Spread array [5, 6, 7] ke console.log.
//5.Gabungkan array ["a", "b"] dan ["c", "d"].

//1.
let angka1 =[1,2];
let angka2 =[3,4];
let gabung =[...angka1, ...angka2];
console.log(gabung);


//2.
let arr1 =[10, 20, 30];
let arr2 =[40, 50, 60];
let gabung2 =[...arr1, ...arr2];
console.log(gabung2);


//3.
let object1 ={ a: 1 };
let object2 ={ b: 2 };
let gabung3 ={...object1, ...object2};
console.log(gabung3);


//4.
let angka3 = [5, 6, 7];
console.log(...angka3); 


//5.
let arr3 =["a", "b"];
let arr4 =["c", "d"];
let gabung4 =[...arr3, ...arr4];
console.log(gabung4);


        console.error("📝 Studi Kasus 4");
//1.Buat function tambah yang bisa nerima banyak angka.
//2.Buat function cetak yang nerima banyak string dan print satu-satu.
//3.Buat function kalikan semua angka yang masuk.
//4.Buat function gabungKalimat yang nerima banyak kata jadi 1 kalimat.
//5.Buat destructuring array [1,2,3,4,5] jadi awal dan ...sisa.


//1.
function tambah(...angka) {
      return angka.reduce((total, n) => total + n, 0);
    }
    console.log("totalnya : ", tambah(2, 3, 4, 5, 6, 7, 8, 9, 10));


//2.
function addText(...teks) {
     teks.forEach(t => console.log(t));
} 
addText("ohayou", "sekai", "good morning", "world!!");


//3.
function kalikan(...number){
    return number.reduce((jumlah, a) => jumlah * a);
}
console.log("totalnya", kalikan(12,23,1,3,5,4,33,0));


//4.
function gabungKalimat(...kata) {
      return kata.join(" ");
}
console.log(gabungKalimat("aku", "adalah", "seorang", "ksatria"));


//5.
let arr5 =[1,2,3,4,5];
let [first, ...sisa] = arr5;
console.log("awal : " + first);
console.log("sisanya : " + sisa);


console.error("🎯 Latihan Mandiri (Gabungan)");
//1.Gunakan destructuring array untuk ambil nilai [1, 2, 3, 4].
//2.Buat object mobil dan destructuring merek dan tahun.
//3.Gabungkan dua array pakai spread operator.
//4.Buat function yang nerima banyak angka lalu jumlahkan pakai rest.


//1.
let number =[1, 2, 3, 4];
let [one, two, three, four] = number;
console.log(one);
console.log(two);
console.log(three);
console.log(four);


//2.
let Mobil = {merek: "porsche", tahun: 1999};
let {merek, tahun} = Mobil;
console.log(merek);
console.log(tahun);


//3.
let car1 =["avanza", "inova", "pick up"];
let car2 =["porsche", "buggati", "ferarri"];
let fusion =[...car1, ...car2];
console.log(fusion);


//4.
function penjumlahan(...angka) {
      return angka.reduce((total, n) => total + n, 0);
    }
    console.log("totalnya : ", penjumlahan(10, 20, 30, 40, 50));


        console.error("🎮 Evaluasi Harian (Studi Kasus Besar)");
//Buat program dataSiswa:

//1.Object { nama: "Dewi", umur: 16, kelas: "XI" }.
//2.Pisahkan nama dan kelas dengan destructuring.
//3.Tambahkan properti baru hobi pakai spread.
//4.buat function yang menerima nilai ujian (banyak angka) lalu hitung totalnya dengan rest.
//5.Tampilkan hasil akhir ke console.


//1.
let bio1 ={ Nama: "Dewi", umur: 16, kelas: "XI" };

//2.
let {Nama, kelas} = bio1

//3.
let bio2 ={hobi: "main roblox"};
let biodata ={...bio1, ...bio2};

//4.
function addNilai(...nilai) {
      return nilai.reduce((total, a) => total + a, 0);
    }
   

//5.
console.log(bio1);//1
console.log(nama);//2
console.log(kelas);
console.log(biodata);
console.log("total nilainya : ", addNilai(72, 63, 84, 95, 96, 67, 78, 99, 100));


        
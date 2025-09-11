console.error("🎯 Studi Kasus: Sistem Pemesanan Restoran;");
//1.Buat sebuah array of object bernama menu yang berisi minimal 5 makanan.
//Tiap object punya property:
let menu =[
    {nama: "nasi goreng magelang", kategori: "makanan", harga: 10000},
    {nama: "ABCD", kategori: "minuman", harga: 7000},
    {nama: "ayam bakar cirebon", kategori: "makanan", harga: 12000},
    {nama: "es jeruk nipis", kategori: "minuman", harga: 5000},
    {nama: "es teh", kategori: "minuman", harga: 3000},
    {nama: "steak wagyu A5", kategori: "makanan", harga: 150000} ,
    {nama: "ratatouille", kategori: "makanan", harga: 500000},
    {nama: "Premiere Sparkling Red Grape Juice Drink ", kategori: "minuman", harga: 52000},
    {nama:"sweet madame", kategori: "makanan", harga: 31000}
    ];

//2.Gunakan forEach untuk menampilkan semua menu dengan format:
let daftarMenu = menu.forEach(item => console.log(`Nama: ${item.nama} | Kategori: ${item.kategori} | Harga: ${item.harga}`));

//3.Gunakan filter untuk mencari semua makanan/minuman dengan harga di bawah Rp30.000.
let filterMenu = menu.filter(item => item.harga < 30000);

let lihat = filterMenu.map(a => a.nama);
console.log("menu murah yang murah (< 30000): \n" + lihat.join(", "))
    
//4.Gunakan map untuk membuat array baru yang hanya berisi nama-nama menu.
let lihatMenu = menu.map(b => b.nama);
console.log(lihatMenu)

//5.Gunakan reduce untuk menghitung total harga semua menu.
let hitung = menu.reduce((jumlah,barang)=> jumlah + barang.harga, 0);
console.log(`Total Harga Semua Menu:\n ${hitung}`);

//6.Gunakan find untuk mencari satu menu dengan nama tertentu (misal: "Es Teh").
let search = menu.find(item => item.nama === "ratatouille");
console.log(`Menu ditemukan:\n ${search.nama}`);

//7.Gunakan destructuring array untuk mengambil 2 makanan pertama dari menu ke variabel makanan1 dan makanan2.
let [makanan1, makanan2] = menu;
console.log(`destructuring array : \n`, makanan1 , "\n", makanan2);

//8.Gunakan destructuring object untuk mengambil nama dan harga dari salah satu menu (misal menu[0]).
let {nama, harga} = menu[0];
console.log(`Destructuring Object:\n nama = ${nama}, harga = ${harga}`);



// Import data barang
import barang from "./barang.js";

// 1. Tambah barang baru
export function tambahBarang(barangBaru) {
  return [...barang, barangBaru];
}

// 2. Cari barang berdasarkan nama
export function cariBarang(nama) {
 return barang.find(a => a.nama.toLowerCase() === nama.toLowerCase());

}

// 3. Hitung total harga belanjaan
export function hitungTotal(belanjaan) {
 return belanjaan.reduce((total,id)=> {let item = barang.find(b => b.id === id);
    return item ? total + item.harga : total;
 }, 0);
}

// 4. Update stok barang
export function updateStok(id, jumlahBeli) {
  let listBarang = barang.find(item => item.id === id);
  if(listBarang){
    let {stok} =listBarang;
    listBarang.stok = stok - jumlahBeli;
    return listBarang;
  }else{
    return null;
  }
}

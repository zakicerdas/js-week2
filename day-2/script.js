let username =[];
let password =[];

function register() {
    let usernames = prompt("Masukkan username baru:");
    let passwords = prompt("masukkan password baru:");

    if (usernames && passwords){
        username.push(usernames);
        password.push(passwords);
        alert("data telah tersimpan!👍👍");
    }else{
        alert("mohon isi username dan password!");
    }

}
function login() {
     let usernames = prompt("Masukkan username:");
      let passwords = prompt("Masukkan password:");

      let index = username.indexOf(usernames);
      if (index !== -1 && password[index] === passwords) {
        alert("Login berhasil, selamat datang " + usernames + "-sama! ⸜(｡˃ ᵕ ˂ )⸝♡");
      } else {
        alert("Login gagal, username/password salah!");
      }
}
function seeUser(){

    if(username.length === 0){
        alert("tidak ada user");
        return;
    }
    let user = "daftar user:\n";
    username.forEach((a,b) => {
      user += (b + 1) + ". " + a + "\n";
    });
    alert(user);
}
function update() {
    let usernames = prompt("Masukkan username yang ingin di ganti:");
      let index = username.indexOf(usernames);

      if (index === -1) {
        alert("User tidak ditemukan!");
        return;
}
    let newPass = prompt("masukkan password baru");
    password[index] = newPass;
       alert("Passwordnya " + username + " berhasil diperbarui!, silahkan login ulang!");
}
function deleteUser() {
      let usernames = prompt("Masukkan username yang mau dihapus:");
      let index = username.indexOf(usernames);

      if (index === -1) {
        alert("User tidak ditemukan!");
        return;
      }

      username.splice(index, 1);
      password.splice(index, 1);
      alert("User berhasil dihapus!");
    }


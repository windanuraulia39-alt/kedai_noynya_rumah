function register(){

let nama_pengguna = document.getElementById("nama").value.trim()
let email = document.getElementById("ponsel").value.trim()
let password = document.getElementById("password").value.trim()

// validasi kosong
if(!nama_pengguna|| !email || !password){
    alert("Semua data harus diisi")
    return false
}

// ambil akun
let akun = JSON.parse(localStorage.getItem("akun")) || []

// cek duplikat ponsel
let cek = akun.find(user => user.nama_pengguna === nama_pengguna && user.password === password)

if(cek){
    alert("Email sudah terdaftar")
    return false
}

// simpan user
let user = {
    nama_pengguna,
    email,
    password
}

akun.push(user)
localStorage.setItem("akun", JSON.stringify(akun))

alert("Registrasi berhasil")

//pindah ke halaman login setelah registrasi
window.location.href = "login.html"

return false
}
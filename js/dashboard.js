// cek login
let userLogin = JSON.parse(localStorage.getItem("userLogin"))

if(!userLogin){
    alert("Silakan login terlebih dahulu")
    window.location.href = "login.html"
}

// tampilkan nama user
let welcome = document.getElementById("welcome")

if(welcome){
    welcome.innerHTML =
    "Selamat datang, " + userLogin.nama
}

// key pesanan per akun
let keyPesanan = "pesanan_" + userLogin.ponsel

// fungsi pesan
function pesan(nama, harga){

    let qty = prompt(
    `Pesanan: ${nama}\nHarga: Rp ${harga}\n\nMasukkan jumlah (qty):`
    )

    if(qty === null) return

    qty = parseInt(qty.trim())

    if(isNaN(qty) || qty <= 0){
        alert("Qty tidak valid")
        return
    }

    // input nomor meja
    let meja = prompt("Masukkan nomor meja:")

    if(meja === null) return

    meja = meja.trim()

    if(meja === ""){
        alert("Nomor meja wajib diisi")
        return
    }

    // hitung total
    let total = qty * harga

    // notifikasi
    alert(
    `Pesanan Berhasil!\n\nMenu: ${nama}\nHarga: Rp ${harga}\nQty: ${qty}\nNomor Meja: ${meja}\nTotal: Rp ${total}`
    )

    // ambil data pesanan
    let pesanan =
    JSON.parse(localStorage.getItem(keyPesanan)) || []

    // simpan data
    pesanan.push({
        nama: nama,
        harga: harga,
        qty: qty,
        meja: meja,
        total: total
    })

    // simpan ulang
    localStorage.setItem(
        keyPesanan,
        JSON.stringify(pesanan)
    )

    // pindah halaman
    window.location.href = "riwayat.html"
}

// logout
function logout(){

    localStorage.removeItem("userLogin")

    alert("Anda berhasil logout")

    window.location.href = "login.html"
}
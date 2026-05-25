// ambil user login
let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href = "login.html"
}

// key pesanan per akun
let keyPesanan = "pesanan_" + user.ponsel
let keyCheckout = "checkout_" + user.ponsel

// ambil data pesanan
let data = JSON.parse(localStorage.getItem(keyPesanan)) || []

// ambil tbody
let tbody = document.getElementById("list")

function render(){

    tbody.innerHTML = ""

    let totalSemua = 0

    data.forEach((item,index)=>{

        totalSemua += item.total

        tbody.innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${item.nama}</td>
            <td>Rp ${item.harga}</td>
            <td>${item.qty}</td>
            <td>Rp ${item.total}</td>
            <td>
                <button onclick="hapus(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `
    })

    tbody.innerHTML += `
    <tr>
        <td colspan="4"><b>Grand Total</b></td>
        <td colspan="2"><b>Rp ${totalSemua}</b></td>
    </tr>
    `
}

// fungsi hapus
function hapus(index){

    let konfirmasi = confirm("Yakin hapus pesanan?")

    if(!konfirmasi) return

    data.splice(index,1)

    localStorage.setItem(keyPesanan, JSON.stringify(data))

    render()
}

// fungsi selesai pesanan
function selesaikan(){

    if(data.length === 0){
        alert("Belum ada pesanan")
        return
    }

    let meja = prompt("Masukkan nomor meja")

    if(!meja){
        alert("Nomor meja wajib diisi")
        return
    }

    // simpan checkout
    localStorage.setItem(keyCheckout, JSON.stringify({
        meja: meja,
        pesanan: data,
        user: user.nama
    }))

    window.location.href = "pembayaran.html"
}

render()
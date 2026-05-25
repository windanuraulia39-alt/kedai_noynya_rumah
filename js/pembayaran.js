// ambil user login
let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href = "login.html"
}

// key per Akun
let keyCheckout = "checkout_" + user.ponsel


// ambil data checkout per akun
let checkout = JSON.parse(localStorage.getItem(keyCheckout))

if(!checkout){
    alert("Data tidak ditemukan")
    window.location.href = "dashboard.html"
}

// tampilkan info Akun
document.getElementById("infoUser").innerHTML =
"Orderer Name: " + user.nama + " (" + user.ponsel + ")"

document.getElementById("infoMeja").innerHTML =
"Table Number: " + checkout.meja


let tbody = document.getElementById("listPesanan")
let total = 0

checkout.pesanan.forEach(item => {
    total += item.total

        tbody.innerHTML += `
        <tr>
        <td>$ ${item.nama}</td>
        <td>$ ${item.qty}</td>
        <td>$ ${item.total}</td>
        </tr>
    `
    })

document.getElementById("totalAkhir").innerHTML =
"TOTAL PAYMENT : Rp " + total
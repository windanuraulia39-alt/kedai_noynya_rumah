// ambil user login
let user = JSON.parse(localStorage.getItem("userLogin"))

// cek login
if(!user){

    alert("Silakan login terlebih dahulu")

    window.location.href = "login.html"
}

// key pesanan
let keyPesanan = "pesanan_" + user.ponsel

// ambil data
let data = JSON.parse(localStorage.getItem(keyPesanan)) || []

// tbody
let tbody = document.getElementById("list")

// tampil data
function render(){

    tbody.innerHTML = ""

    let totalSemua = 0

    // cek jika kosong
    if(data.length === 0){

        tbody.innerHTML = `
            <tr>
                <td colspan="6">
                    Belum ada pesanan
                </td>
            </tr>
        `

        return
    }

    // looping data
    data.forEach((item,index)=>{

        let total = item.harga * item.qty

        totalSemua += total

        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>Rp ${item.harga}</td>
                <td>${item.qty}</td>
                <td>${item.meja || "-"}</td>

                <td>
                    <button 
                    class="btn btn-danger btn-sm"
                    onclick="hapus(${index})">
                    Hapus
                    </button>
                </td>
            </tr>
        `
    })

    // grand total
    tbody.innerHTML += `
        <tr>
            <td colspan="6">
                <b>Grand Total : Rp ${totalSemua}</b>
            </td>
        </tr>
    `
}

// fungsi hapus
function hapus(index){

    let konfirmasi = confirm(
    "Yakin ingin menghapus pesanan ini?"
    )

    if(!konfirmasi){
        return
    }

    // hapus data
    data.splice(index, 1)

    // simpan ulang localStorage
    localStorage.setItem(
        keyPesanan,
        JSON.stringify(data)
    )

    // render ulang
    render()
}

// jalankan
render()
// Daftar nama anggota KIR
const namaAnak = ["Selvy", "Arum", "Septi", "Naila", "Indah", "Nabila", "Putri"];

// Ambil element tabel
const tabel = document.getElementById("tabelAbsensi");

// Buat baris otomatis berdasarkan daftar nama
namaAnak.forEach((nama, index) => {
    const tr = document.createElement("tr");

    // Ambil status kehadiran dari localStorage
    const status = localStorage.getItem(nama) === "hadir";

    tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${nama}</td>
        <td>
            <button class="btn ${status ? "hadir" : ""}" onclick="tandaiHadir('${nama}', this)">
                ${status ? "Hadir ✓" : "Hadir"}
            </button>
        </td>
    `;

    tabel.appendChild(tr);
});

// Fungsi untuk menandai kehadiran
function tandaiHadir(nama, btn) {
    const sudahHadir = btn.classList.contains("hadir");

    if (!sudahHadir) {
        btn.classList.add("hadir");
        btn.textContent = "Hadir ✓";
        localStorage.setItem(nama, "hadir");
    } else {
        btn.classList.remove("hadir");
        btn.textContent = "Hadir";
        localStorage.removeItem(nama);
    }
}

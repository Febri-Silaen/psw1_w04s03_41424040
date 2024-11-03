
const dataPengunjung = [
    { no: 1, nama: 'Neure', tanggalKunjungan: '2024-10-01', tempatWisata: 'Pantai Pasir Putih' },
    { no: 2, nama: 'febri', tanggalKunjungan: '2024-10-02', tempatWisata: 'Pulau Samosir' },
    { no: 3, nama: 'ganda', tanggalKunjungan: '2023-10-03', tempatWisata: 'Air Terjun Sipiso-piso' },
    { no: 4, nama: 'nahesson', tanggalKunjungan: '2023-10-03', tempatWisata: 'Air Terjun Sipiso-piso' },
    { no: 5, nama: 'naldi', tanggalKunjungan: '2023-10-03', tempatWisata: 'Air Terjun Sipiso-piso' },
    { no: 6, nama: 'irfan', tanggalKunjungan: '2023-10-03', tempatWisata: 'bakkara' },
    { no: 7, nama: 'aldo', tanggalKunjungan: '2023-10-03', tempatWisata: 'bakkara' },
    { no: 8, nama: 'aldi', tanggalKunjungan: '2023-10-03', tempatWisata: 'bakkara' },
    { no: 9, nama: 'rehan', tanggalKunjungan: '2023-10-03', tempatWisata: 'sibea bea' },
    { no: 10, nama: 'gandum', tanggalKunjungan: '2023-10-03', tempatWisata: 'paropo' },
    { no: 11, nama: 'ompreng', tanggalKunjungan: '2023-10-03', tempatWisata: 'pantai putih' }
    
];


function tampilkanDataPengunjung(data) {
    const tabelBody = document.getElementById('data-tabel');
    tabelBody.innerHTML = '';

    data.forEach((pengunjung) => {
        const baris = document.createElement('tr');
        baris.innerHTML = `
            <td>${pengunjung.no}</td>
            <td>${pengunjung.nama}</td>
            <td>${pengunjung.tanggalKunjungan}</td>
            <td>${pengunjung.tempatWisata}</td>
        `;
        tabelBody.appendChild(baris);
    });
}

tampilkanDataPengunjung(dataPengunjung);
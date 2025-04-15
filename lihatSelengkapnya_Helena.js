<script>
    document.getElementById("read-more").addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah aksi default link
        const moreLyrics = document.getElementById("more-lyrics");
        if (moreLyrics.style.display === "none") {
            moreLyrics.style.display = "block"; // Tampilkan lirik
            this.textContent = "Sembunyikan"; // Ubah teks tombol
        } else {
            moreLyrics.style.display = "none"; // Sembunyikan lirik
            this.textContent = "Lihat selengkapnya"; // Kembalikan teks tombol
        }
    });
</script>
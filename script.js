// Fungsi untuk menghilangkan Popup Onboarding saat tombol X diklik
function closePopup() {
    const popup = document.getElementById('onboarding-popup');
    popup.style.opacity = '0'; // Animasi fade out
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Menunggu animasi selesai sebelum hilang sepenuhnya
}

// Fungsi untuk mengganti Halaman
function showPage(pageId, clickedButton) {
    // 1. Sembunyikan semua halaman
    let pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // 2. Tampilkan halaman yang dituju
    document.getElementById(pageId).classList.add('active');
    
    // 3. Hapus warna aktif dari semua tombol navigasi
    let buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active-btn');
    });

    // 4. Berikan warna aktif pada tombol yang sedang diklik (jika diklik dari navigasi)
    if (clickedButton) {
        clickedButton.classList.add('active-btn');
    }

    // 5. Scroll ke bagian atas (berguna jika di perangkat mobile)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
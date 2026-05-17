## Scope
- `css/global.css`: CSS Variables, Fonts, Animation utilities (Sudah selesai sebagian)
- `index.html`: Hero Section, Statistik Section, Service Cards
- `about.html`: Profil Praktisi (Alternating layout, styling)
- `solutions.html`: Service Cards (Struktur card baru)
- `portfolio.html`: Navbar, Footer, Mobile view
- `ebook.html`: Navbar, Footer, Mobile view

## Urutan eksekusi
1. Update `css/global.css` untuk memastikan semua variabel Slate & Sage, font import, dan layout styling sudah 100% sesuai. (Selesai)
2. Update Navbar dan Footer di semua halaman agar identik dan konsisten. (Selesai)
3. Fix issues layout seperti spasi `about.html` menggunakan `flex flex-col min-h-screen`. (Selesai)
4. Redesign Hero Section & Statistik Section di `index.html` (Dark overlay, motion, stat layout).
5. Redesign Service Cards di `index.html` dan `solutions.html` (Ubah struktur HTML sesuai ascii di redesign.md).
6. Redesign Profil Praktisi di `about.html` (Alternating layout, typography).
7. Cross-browser testing, mobile responsiveness, dan audit akhir.

## Checklist per file
- [x] **Global CSS**: Variabel warna, tipografi, scroll reveal utilities.
- [ ] **index.html**: Hero overlay gelap, typography Hero, button CTA.
- [ ] **index.html**: Background stat section slate-900, text slate-300, counter animation.
- [ ] **index.html**: Service Cards struktur baru (label uppercase, border-left accent).
- [x] **about.html**: Navbar & Footer konsisten.
- [ ] **about.html**: Alternating editorial layout (Praktisi ganjil kiri, genap kanan), initial circle, quote.
- [x] **solutions.html**: Navbar & Footer konsisten.
- [ ] **solutions.html**: Service Cards struktur baru.
- [x] **portfolio.html**: Desain sudah disamakan untuk Navbar dan Footer.
- [x] **ebook.html**: Desain sudah disamakan untuk Navbar dan Footer.

## Design decisions
- Menggunakan `&middot;` dan `flex-wrap` untuk tagline di Hero section agar responsif tanpa memakan banyak height di mobile.
- Menambahkan `flex flex-col min-h-screen` pada body dan `mt-auto` pada footer di semua file HTML agar ketika konten dihapus, footer tidak naik dan tetap berada di bawah (menjawab masalah layout yang naik).
- Menghindari penggunaan regex sed karena keterbatasan cross-platform, dan memilih script Node.js sederhana untuk mass replacement DOM string manipulation secara aman.
- Akan merombak ulang Service Cards dari scratch untuk `index.html` dan `solutions.html` karena `replace_file_content` sebelumnya hanya menimpa warna, belum mengubah struktur box dan border-left sepenuhnya.

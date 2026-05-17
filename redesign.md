# Prompt: Redesign Menyeluruh — Amarta Artha Institute
# Semua Halaman: index.html · about.html · solutions.html · portfolio.html · ebook.html

---

## LANGKAH WAJIB SEBELUM MENYENTUH KODE APAPUN

Lakukan ini secara berurutan. Jangan skip satu pun.

**1. Baca semua skill yang relevan — WAJIB DIBACA PENUH sebelum menulis satu baris kode:**

Skill utama (baca pertama, paling kritis):
- `@[ui-ux-pro-max]` — baca SKILL.md-nya penuh. Ini skill paling komprehensif untuk UI/UX: 50 styles, 21 palettes, 50 font pairings. Gunakan sebagai referensi untuk keputusan desain yang belum dijelaskan di prompt ini.
- `@[frontend-design]` — baca SKILL.md-nya. Panduan untuk menghasilkan interface production-grade yang tidak terasa AI-generated. Ikuti semua prinsipnya, terutama bagian "avoid generic aesthetics".
- `@[kylezantos design-motion-principles]` — baca SKILL.md-nya. Panduan motion dan animasi. Semua implementasi animasi harus mengikuti prinsip di skill ini.

Skill pendukung (baca setelah tiga di atas):
- `@[web-design-guidelines]` — gunakan untuk audit compliance setelah setiap halaman selesai. Jalankan review aksesibilitas, UX, dan design audit per halaman sebelum lanjut ke halaman berikutnya.
- `@[writing-plans]` — sebelum menyentuh kode apapun, tulis implementation plan terlebih dahulu. Buat file `redesign_plan.md` yang mencatat: scope perubahan per file, urutan eksekusi, dependency antar file, dan checklist per halaman.
- `@[verification-before-completion]` — sebelum declare selesai pada setiap halaman, jalankan verification commands (buka di browser, cek console error, cek mobile view). Jangan klaim "selesai" tanpa bukti konkret.
- `@[systematic-debugging]` — jika ada bug atau visual yang tidak sesuai, gunakan skill ini. Jangan langsung coba-coba fix tanpa diagnosis sistematis.
- `@[brainstorming]` — jika ada bagian desain yang ambigu atau ada trade-off yang perlu diputuskan (misalnya layout yang bisa dibuat dengan 2 cara), gunakan skill ini untuk explore pilihan sebelum implement.

**2. Buat implementation plan dulu (sebelum kode):**

Buat file `redesign_plan.md` di root project dengan struktur:
```
## Scope
[list semua file yang akan diubah]

## Urutan eksekusi
[urutan pengerjaan dengan dependency]

## Checklist per file
[checklist spesifik per halaman]

## Design decisions
[catat keputusan desain yang diambil dan alasannya]
```

**3. Pull dokumentasi via Context7:**
- Tailwind CSS `/tailwindlabs/tailwindcss.com` — query: "custom CSS variables, dark mode, animation, transition utilities"
- Motion.dev `/websites/motion_dev` — query: "scroll reveal, stagger, IntersectionObserver, vanilla JS animation"

**4. Audit semua file yang ada:**
- Baca `index.html`, `about.html`, `solutions.html`, `portfolio.html`, `ebook.html`
- Baca semua file CSS yang di-link (terutama yang mengatur warna, font, dan komponen global)
- Catat: class yang dipakai berulang, struktur navbar, struktur footer, naming convention yang sudah ada

---

## KONTEKS PROYEK

**Klien:** Amarta Artha Institute — lembaga konsultasi strategis dan pengembangan kapasitas terdepan Indonesia. Bukan startup, bukan korporasi generik. Ini institusi dengan positioning eksklusif: praktisi senior ex-Kejaksaan Agung, ex-CISO Indosat, Doktor Hukum dengan rekam jejak turnaround BUMN IDR 1,64 Triliun.

**Audiens:** Direksi BUMN, C-suite korporasi, pejabat setingkat eselon I, institutional buyers. Orang yang terbiasa berurusan dengan McKinsey, EY, Heidrick & Struggles. Mereka menilai kredibilitas dari detail.

**Tone desain yang harus dicapai:** `refined authority` — bukan flashy, bukan startup-cool, bukan corporate-blue generik. Seperti firma hukum internasional kelas atas yang paham modernitas. Deliberate. Tenang. Percaya diri.

---

## DESIGN SYSTEM BARU — WAJIB DIIMPLEMENTASIKAN DI SEMUA HALAMAN

### Palette Warna — "Slate & Sage"

Implementasikan sebagai CSS custom properties di satu file CSS global (atau di `:root` yang di-share semua halaman):

```css
:root {
  /* Primary — Slate */
  --color-slate-900: #1E2832;
  --color-slate-700: #2D3E50;
  --color-slate-500: #4A6070;
  --color-slate-300: #8FA4B2;
  --color-slate-100: #D8E4EA;

  /* Accent — Sage */
  --color-sage-700: #3D5C50;
  --color-sage-500: #5B7E6E;
  --color-sage-300: #A8C4B8;
  --color-sage-100: #E0EDE8;

  /* Surface */
  --color-surface-base: #FDFCFB;
  --color-surface-soft: #F4F6F5;
  --color-surface-muted: #E8EDEB;

  /* Text */
  --color-text-primary: #1E2832;
  --color-text-secondary: #4A6070;
  --color-text-muted: #8FA4B2;
  --color-text-inverse: #FDFCFB;

  /* Functional */
  --color-border-default: rgba(30, 40, 50, 0.12);
  --color-border-strong: rgba(30, 40, 50, 0.25);
  --color-accent-line: #5B7E6E;
}
```

**Aturan penggunaan warna:**
- Background halaman: `--color-surface-base` (hampir putih, warm)
- Section gelap (hero, stat section): `--color-slate-900`
- Text di atas background gelap: `--color-text-inverse`
- Accent line, border-left pada card, CTA button: `--color-sage-500`
- Hover state button: `--color-sage-700`
- Text muted/label: `--color-text-muted`
- Jangan pernah pakai pure `#ffffff` atau pure `#000000` — selalu dari variabel di atas

### Tipografi

```css
/* Import di <head> semua halaman */
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet">
```

```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}

/* Aturan penggunaan */
/* H1, H2 semua halaman: --font-display */
/* H3 ke bawah, body, nav, button: --font-body */
/* Quote/blockquote: --font-display, italic */
```

**Mengapa kombinasi ini:** Cormorant Garamond adalah serif yang dipakai firma hukum dan konsultan premium — terasa klasik tapi tidak kuno. DM Sans adalah sans-serif modern yang bersih tanpa terasa startup. Kombinasi ini menyampaikan "established authority meets modern clarity."

### Spacing & Layout

```css
:root {
  --space-section: 6rem;       /* jarak antar section */
  --space-section-sm: 4rem;    /* mobile */
  --max-width: 1200px;
  --max-width-prose: 720px;    /* untuk teks panjang */
  --border-radius-card: 2px;   /* SENGAJA kecil — anti-AI-card */
  --border-radius-button: 3px;
}
```

**Catatan kritis soal border-radius:** Gunakan `2px` maksimal untuk card dan komponen. Rounded corner besar (`12px`, `16px`, `rounded-xl`) adalah tanda paling kuat bahwa sebuah desain di-generate AI. Card premium pakai sudut yang hampir tajam.

---

## MASALAH YANG HARUS DIPERBAIKI — PER KOMPONEN

### 1. Navbar (semua halaman)

**Masalah saat ini:**
- Dropdown "Informasi" tidak mobile-friendly
- Tidak ada visual feedback active state yang kuat

**Yang harus diperbaiki:**
- Tambah hamburger menu yang fungsional untuk mobile (breakpoint `< 768px`)
- Active state nav item: underline tipis berwarna `--color-sage-500`, bukan background highlight
- Dropdown harus pakai `position: absolute` dengan shadow tipis dan border `1px solid var(--color-border-default)`
- Font nav: `--font-body`, weight 400, ukuran `14px`, letter-spacing `0.02em`
- Logo: pastikan tidak pixelated di retina — cek apakah ada versi 2x
- Background navbar saat scroll: tambah `backdrop-filter: blur(12px)` dengan `background: rgba(253,252,251,0.92)` — efek glassmorphism tipis yang elegan

### 2. Hero Section (index.html)

**Masalah saat ini:**
- Foto stock "business meeting" terlalu generik
- Tidak ada motion/animation saat halaman load
- Teks headline kurang berbobot

**Yang harus diperbaiki:**
- Headline (`H1`): font `--font-display`, ukuran `clamp(2.5rem, 5vw, 4.5rem)`, weight 500, line-height `1.15`
- Subheadline: `--font-body`, weight 300, ukuran `clamp(1rem, 2vw, 1.25rem)`, color `--color-text-muted`
- Tambah overlay gelap di atas foto: `background: linear-gradient(to bottom, rgba(30,40,50,0.65) 0%, rgba(30,40,50,0.45) 100%)`
- **Motion saat load** (ikuti instruksi skill kylezantos): headline slide-up + fade-in, subheadline delay 150ms, button delay 300ms, staggered masuk yang smooth
- CTA button: background `--color-sage-500`, text `--color-text-inverse`, border-radius `3px`, padding `12px 32px`, font `--font-body` weight 500 — **tidak ada gradient, tidak ada shadow besar**
- Button sekunder: border `1px solid rgba(255,255,255,0.5)`, background transparent, text putih

### 3. Statistik Section (index.html)

**Masalah saat ini:**
- Angka besar seperti "IDR 1,64T" dikubur di card kecil yang sama dengan semua card lain
- Tidak ada animasi counter

**Yang harus diperbaiki:**
- Section ini harus punya background `--color-slate-900` (gelap) — bukan putih seperti sekarang
- 4 stat ditampilkan dalam grid horizontal, teks putih di atas gelap
- Angka: `--font-display`, ukuran `clamp(2.5rem, 4vw, 3.5rem)`, weight 600, color `--color-sage-300`
- Label: `--font-body`, ukuran `13px`, color `--color-slate-300`, letter-spacing `0.04em`
- **Wajib: counter animation** — saat section masuk viewport, angka menghitung naik (gunakan IntersectionObserver + requestAnimationFrame). "Zero" dan "4 Pilar" tidak perlu counter, cukup fade-in.
- Garis pemisah antar stat: `1px solid rgba(255,255,255,0.08)` — tipis dan subtle

### 4. Service Cards (solutions.html & index.html)

**Ini masalah paling kritis — ubah total pendekatan visual.**

**Masalah saat ini:**
- Numbered badge besar "01–07" sebagai dekorasi visual → hapus
- Border radius besar → ubah ke `2px`
- Tag chip berwarna biru generik → ganti
- Icon emoji/Unicode → hapus
- Semua card terasa identik → beri diferensiasi

**Yang harus dibuat:**
```
Struktur card baru:
┌─────────────────────────────────┐
│ [label kategori kecil uppercase]│  ← font-body, 11px, sage-500, letter-spacing 0.1em
│                                 │
│ Nama Layanan                    │  ← font-display, 22px, weight 500
│                                 │
│ Deskripsi singkat satu kalimat  │  ← font-body, 14px, text-secondary
│ yang kuat dan langsung ke poin  │
│                                 │
│ ─────────────────────────────── │  ← border 1px solid border-default
│                                 │
│ • Poin layanan spesifik         │  ← font-body, 13px
│ • Poin layanan spesifik         │
│                                 │
│ [Tag framework kecil]           │  ← pill kecil, background surface-muted
└─────────────────────────────────┘
  ↑ border-left: 3px solid sage-500
```

- Border card: `1px solid var(--color-border-default)`
- Border-left accent: `3px solid var(--color-sage-500)` — ini pengganti numbered badge
- Hover: `border-left-color` berubah ke `--color-sage-700`, `transform: translateY(-2px)`, `transition: all 0.25s ease`
- Background card: `--color-surface-base`
- Padding: `28px 24px`
- Border-radius: `2px`

**Motion (ikuti skill kylezantos):** Stagger reveal saat scroll — card muncul berurutan dengan delay 80ms per card, bukan muncul semua sekaligus.

### 5. About Page — Profil Praktisi

**Yang harus dibuat** (lihat file about.html untuk konten final):

- Bukan grid card seragam — gunakan layout **alternating editorial**: praktisi ganjil layout kiri, genap layout kanan
- Setiap blok profil punya:
  - Initials circle: `width: 64px`, `background: --color-sage-100`, `color: --color-sage-700`, font `--font-display`, ukuran `22px`
  - Nama: `--font-display`, `28px`, weight 500
  - Subtitle: `--font-body`, `13px`, `--color-text-muted`, italic
  - Quote: `--font-display`, italic, ukuran `18px`, sebelah kiri ada tanda kutip besar `"` berwarna `--color-sage-300` sebagai dekorasi
  - Pencapaian: list dengan bullet `→` berwarna `--color-sage-500`
  - Badge keahlian: background `--color-surface-muted`, border `1px solid --color-border-default`, border-radius `2px`, font-body `11px`
- Accordion untuk detail pendidikan & sertifikasi — collapsed by default, bisa di-expand

### 6. Footer (semua halaman)

**Yang harus diperbaiki:**
- Background: `--color-slate-900`
- Text: `--color-text-inverse` untuk primary, `--color-slate-300` untuk muted
- Tambah thin line separator `1px solid rgba(255,255,255,0.08)` antara konten dan copyright
- Konten kontak harus lebih terstruktur — bukan hanya teks mentah

### 7. Mobile Responsiveness — Semua Halaman

**Checklist yang harus dipenuhi:**
- [ ] Hamburger menu fungsional di `< 768px`
- [ ] Touch target minimum `44px × 44px` untuk semua link dan button
- [ ] Font size minimum `16px` untuk body text (mencegah auto-zoom iOS)
- [ ] Grid card berubah jadi 1 kolom di mobile
- [ ] Stat section stack vertikal di mobile
- [ ] Padding section `--space-section-sm` (4rem) di mobile vs 6rem di desktop
- [ ] Tidak ada horizontal scroll — semua konten fit dalam viewport

---

## MOTION & ANIMASI — GLOBAL RULES

Setelah membaca skill kylezantos, terapkan prinsip-prinsipnya. Pastikan juga:

**Scroll reveal (semua halaman):**
```javascript
// Pattern yang harus dipakai — IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
```

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger via CSS custom property */
[data-reveal-delay="1"] { transition-delay: 80ms; }
[data-reveal-delay="2"] { transition-delay: 160ms; }
[data-reveal-delay="3"] { transition-delay: 240ms; }
[data-reveal-delay="4"] { transition-delay: 320ms; }
```

**Reduced motion — wajib:**
```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**Yang TIDAK boleh dilakukan:**
- Jangan animasi yang loop terus (spinning, bouncing) — terasa murahan
- Jangan `animation-duration` lebih dari `800ms` untuk elemen UI biasa
- Jangan terlalu banyak elemen bergerak sekaligus — maksimal 4–5 elemen per viewport
- Jangan pakai `animation: all` — selalu specify property yang di-animate

---

## CHECKLIST AKHIR SEBELUM SELESAI

Sebelum declare selesai, jalankan `@[verification-before-completion]` dan `@[web-design-guidelines]` review. Verifikasi ini semua:

**Visual:**
- [ ] Semua halaman pakai CSS variables yang sama (`--color-slate-*`, `--color-sage-*`, dll.)
- [ ] Tidak ada `border-radius` lebih dari `4px` di card dan komponen utama
- [ ] Tidak ada emoji atau icon Unicode sebagai dekorasi visual
- [ ] Numbered badge besar (01, 02, 03...) sebagai dekorasi sudah dihapus
- [ ] Font Cormorant Garamond ter-load di semua H1 dan H2
- [ ] Section statistik punya background gelap (slate-900)
- [ ] Tidak ada sisa hardcoded warna biru lama (grep untuk `#` di semua HTML/CSS)

**Fungsional:**
- [ ] Hamburger menu bekerja di mobile
- [ ] Counter animation berjalan saat scroll ke section stat
- [ ] Scroll reveal bekerja di semua halaman
- [ ] Accordion profil praktisi bisa di-expand/collapse
- [ ] Semua link navigasi berfungsi antar halaman
- [ ] Buka setiap halaman di browser — cek console, tidak boleh ada error JS

**Konsistensi:**
- [ ] Navbar identik di semua halaman (copy dari satu source, jangan manual di tiap file)
- [ ] Footer identik di semua halaman
- [ ] Tidak ada halaman yang masih pakai warna lama (cari sisa hardcoded hex biru lama)

**Aksesibilitas & UX (jalankan `@[web-design-guidelines]` review):**
- [ ] `prefers-reduced-motion` diimplementasikan
- [ ] Tidak ada horizontal scroll di mobile
- [ ] Semua gambar punya `alt` attribute yang deskriptif
- [ ] Contrast ratio teks di atas background gelap minimal 4.5:1
- [ ] Touch target semua interactive element minimal 44×44px
- [ ] Tab order logis (bisa dinavigasi dengan keyboard)

**Plan completion:**
- [ ] Update `redesign_plan.md` — tandai semua item checklist sebagai selesai
- [ ] Catat design decisions yang diambil selama proses di `redesign_plan.md`

---

## LARANGAN KERAS

- Jangan ubah konten teks (nama, deskripsi layanan, kontak, angka statistik) — hanya ubah tampilan
- Jangan install library baru yang tidak ada di project kecuali Google Fonts yang sudah disebutkan
- Jangan pakai `!important` kecuali benar-benar terpaksa
- Jangan buat file CSS terpisah per halaman — semua shared styles harus di satu file global
- Jangan pakai gradient yang mencolok — jika perlu gradient, gunakan `rgba` subtle dari warna slate

---

## URUTAN PENGERJAAN YANG DISARANKAN

Kerjakan dalam urutan ini agar bisa di-preview dan di-review per tahap:

1. **Baca semua skill** (`@[ui-ux-pro-max]`, `@[frontend-design]`, `@[kylezantos design-motion-principles]`) — jangan skip ini
2. **Tulis implementation plan** (`@[writing-plans]`) — buat `redesign_plan.md` sebelum kode apapun
3. **Design system dulu** — update CSS variables dan font import di file global CSS
4. **Komponen shared** — navbar dan footer (karena dipakai semua halaman)
5. **index.html** — hero, stat section, service preview → jalankan `@[web-design-guidelines]` review → buka di browser
6. **solutions.html** — service cards (ini yang paling banyak perubahan) → jalankan `@[web-design-guidelines]` review → buka di browser
7. **about.html** — profil praktisi (konten sudah ada dari prompt sebelumnya) → review → browser check
8. **portfolio.html** dan **ebook.html** — apply design system, pastikan konsistensi → review → browser check
9. **Final verification** (`@[verification-before-completion]`) — cek semua halaman sekaligus, tidak ada yang missed

Jika di tahap manapun ada bug atau visual tidak sesuai ekspektasi → gunakan `@[systematic-debugging]` sebelum mencoba fix trial-and-error.

const fs = require('fs');

let html = fs.readFileSync('d:/training-institute/training-institute/about.html', 'utf8');

// The section starts at `<h2 class="text-4xl md:text-5xl font-serif font-bold text-slate-900">Pilar Keahlian</h2>`
// The grid is `<div class="grid grid-cols-1 md:grid-cols-2 gap-8">`

const praktisiRegex = /<!-- Praktisi \d+ -->\s*<div class="card-premium[^>]*>[\s\S]*?<img src="([^"]+)"[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>[\s\S]*?<div class="bg-surface-soft[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/div>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<div class="mb-6">\s*<h4[^>]*>([^<]+)<\/h4>\s*<ul[^>]*>([\s\S]*?)<\/ul>\s*<\/div>\s*<div class="mt-auto[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;

// Instead of complex regex, let's just do a manual replacement since there are only 4.
// Actually, it's easier to grab the whole grid and replace it.

// Let's replace the grid div with a new structure
const gridStart = html.indexOf('<div class="grid grid-cols-1 md:grid-cols-2 gap-8">');
const sectionEnd = html.indexOf('</section>', gridStart);

if (gridStart !== -1 && sectionEnd !== -1) {
    
    // I'll manually recreate the 4 profiles based on what we know is in them.
    const profiles = [
        {
            name: "Dr. Hendra Kusuma Wardana, S.H., M.H., CEH",
            initial: "HK",
            subtitle: "Doktor Hukum Summa Cum Laude &middot; Direktur SDM & Umum &middot; Business Judgment Rule Practitioner",
            afiliasi: "Founder & Koordinator, Amarta Artha Institute &middot; PT Timah Tbk, MIND ID Group &middot; RMD & Partners Law Office",
            desc: "Dr. Hendra Kusuma Wardana adalah salah satu profesional eksekutif paling unik di Indonesia — individu langka yang beroperasi dengan otoritas penuh di ruang sidang, ruang Direksi, dan C-suite sekaligus. Sebagai Direktur SDM & Umum di PT Timah Tbk (MIND ID Group), beliau merancang salah satu pemulihan keuangan paling luar biasa dalam sejarah BUMN Indonesia: turnaround P&L terverifikasi sebesar IDR 1,64 Triliun dalam satu tahun anggaran — dilakukan bersamaan dengan penanganan investigasi antikorupsi skala nasional.",
            achievements: [
                "Membukukan turnaround P&L IDR 1,64 Triliun dalam 12 bulan di PT Timah Tbk (MIND ID) — mengubah kerugian IDR 450 miliar menjadi laba IDR 1,19 Triliun",
                "Mencapai zero asset seizures selama investigasi Tipikor & TPPU terbesar dalam sejarah SOE Indonesia",
                "Mengangkat skor GCG sebesar 29 poin persentase di tengah krisis korporasi nasional",
                "Mengamankan 100% Right-of-Way sepanjang 1.046 km pipa gas nasional",
                "Meraih penghargaan Top Human Capital Award 2024"
            ],
            details: `
                <p class="text-xs text-slate-600 mb-3 leading-relaxed"><strong>Bidang Keahlian:</strong> Business Judgment Rule &middot; Tata Kelola BUMN &middot; Hukum Korporasi &middot; CHRO & Transformasi SDM &middot; Anti-Korupsi Preventif &middot; ESG & Standar IFC &middot; AI-Driven HR &middot; Cybersecurity (CEH)</p>
                <p class="text-xs text-slate-600 mb-3 leading-relaxed"><strong>Pendidikan:</strong> Doktor Ilmu Hukum (Dr.) Summa Cum Laude — Universitas Trisakti &middot; Magister Hukum Summa Cum Laude — Universitas Trisakti &middot; Sarjana Hukum — Universitas Mataram</p>
                <p class="text-xs text-slate-600 leading-relaxed"><strong>Sertifikasi:</strong> Advokat PERADI &middot; Certified Ethical Hacker (CEH) EC-Council &middot; GRCE &middot; Sertifikasi Manajemen Risiko BUMN Level 5</p>`
        },
        {
            name: "Dr. Firdaus Dewilmar, S.H., M.H.",
            initial: "FD",
            subtitle: "Doktor Ilmu Hukum &middot; Mantan Kepala Kejaksaan Tinggi &middot; Penasihat Strategis Senior",
            afiliasi: "Kejaksaan Agung RI (Purn.) &middot; Penasihat Senior, Kementerian ESDM &middot; Otoritas Batam",
            desc: "Ada sedikit sekali tokoh di Indonesia yang pernah menyaksikan arsitektur sistem penegakan hukum dari dalam — dan lebih sedikit lagi yang pernah memimpinnya di tingkat provinsi tertinggi. Dr. Firdaus Dewilmar adalah salah satunya. Selama lebih dari tiga dekade di Kejaksaan Agung RI, beliau mengemban posisi paling strategis dalam hirarki kejaksaan.",
            achievements: [
                "Memimpin operasional Kejaksaan Tinggi Sulawesi Selatan & Sulawesi Barat",
                "Menjabat Sekretaris Jaksa Agung Muda Bidang Pidana Militer (SesJAMPidMil) di Kejaksaan Agung RI",
                "Memimpin Pusat Pendidikan & Pelatihan Teknis Fungsional Kejaksaan",
                "Diajukan sebagai calon Penjabat Gubernur Gorontalo dan kandidat terkuat Jaksa Agung RI"
            ],
            details: `
                <p class="text-xs text-slate-600 mb-3 leading-relaxed"><strong>Bidang Keahlian:</strong> Hukum Pidana Indonesia &middot; Intelijen Kejaksaan &middot; Anti-Korupsi & Tipikor &middot; Kebijakan Publik Nasional &middot; Regulasi Energi & ESDM &middot; Tata Kelola Institusi Negara &middot; Hukum Pidana Militer &middot; Hubungan Pemerintah & Regulator</p>
                <p class="text-xs text-slate-600 leading-relaxed"><strong>Posisi Strategis Nasional:</strong> Kajati Gorontalo & Sulawesi Selatan–Barat &middot; SesJAMPidMil Kejaksaan Agung RI &middot; Kepala Pusdiklat Teknis Fungsional Kejagung &middot; Senior Adviser, Kementerian ESDM & Otoritas Batam &middot; Kandidat Terkuat Jaksa Agung RI (KOPPAJA, 2024)</p>`
        },
        {
            name: "Ali Hasbullah, M.B.A.",
            initial: "AH",
            subtitle: "CISSP &middot; CISA &middot; CCSP &middot; CIPM &middot; ISO 27001 Lead Auditor &middot; CompTIA Project+",
            afiliasi: "Mantan Acting CISO & SVP, Indosat Ooredoo Hutchison &middot; Mantan Executive Director, Ernst & Young Indonesia",
            desc: "Kepemimpinan keamanan siber di Indonesia saat ini dipenuhi sertifikasi dan kredensial. Yang benar-benar langka adalah praktisi yang tidak hanya memberikan advisory di tingkat Boardroom, tetapi secara personal telah menanggung akuntabilitas penuh sebagai CISO di salah satu enterprise digital terbesar Indonesia — sekaligus memiliki rigor analitis dari karier Big 4 konsultan selama hampir satu dekade.",
            achievements: [
                "Menjabat Acting CISO & SVP Head of IT Corporate Security di Indosat Ooredoo Hutchison",
                "Sebagai Executive Director EY Indonesia, memberikan advisory kepada OJK, BRI, IDX, Telkomsel, Telkom, Unilever, dan Kementerian Keuangan",
                "Mengimplementasikan sertifikasi ISO 27001 untuk Hutchison 3 Indonesia — berhasil melewati audit PwC, ISAE 3402, dan GSMA",
                "Memimpin program IT SOX 404 Advisory untuk Telkomsel, Telkom, Unilever"
            ],
            details: `
                <p class="text-xs text-slate-600 mb-3 leading-relaxed"><strong>Bidang Keahlian:</strong> CISO-as-a-Service &middot; Strategi Keamanan Siber Enterprise &middot; IT Governance & Assurance &middot; Kepatuhan OJK & UU PDP &middot; ISO 27001:2022 & NIST CSF 2.0 &middot; Due Diligence M&A IT &middot; Pre-IPO IT Readiness &middot; SOC & MSSP Governance</p>
                <p class="text-xs text-slate-600 mb-3 leading-relaxed"><strong>Sertifikasi:</strong> CISSP &middot; CISA &middot; CCSP &middot; CIPM &middot; ISO 27001 Lead Auditor &middot; CompTIA Project+</p>
                <p class="text-xs text-slate-600 leading-relaxed"><strong>Pendidikan:</strong> M.B.A. Manajemen Keuangan — Universitas Indonesia &middot; B.S. Teknik Komputer — Universitas Indonesia</p>`
        },
        {
            name: "Harry Wibisono",
            initial: "HW",
            subtitle: "Senior Marketing Executive &middot; Independent Marketing Advisor &middot; FMCG Strategist",
            afiliasi: "28 Tahun PT HM Sampoerna Philip Morris International &middot; Independent Marketing Advisor (IMA)",
            desc: "Harry Wibisono menghabiskan 28 tahun membangun kepemimpinan pasar di lapangan. Selama hampir tiga dekade di PT HM Sampoerna — afiliasi Philip Morris International — beliau bergerak melalui setiap lapisan kepemimpinan pemasaran dan penjualan yang signifikan, hingga bertanggung jawab atas tiga wilayah terbesar Indonesia: Jawa Timur, Sumatra 1, dan Jawa Tengah.",
            achievements: [
                "Meraih posisi Market Leader di Surabaya (2005) — pasar FMCG paling kompetitif di Indonesia Timur",
                "Mereplikasi kepemimpinan pasar di wilayah Bali & Nusa Tenggara",
                "Meraih posisi Market Leader di Sumatra 1",
                "Mengelola lebih dari ratusan anggota tim penjualan dengan berbagai latar belakang demografis dan menavigasi dinamika birokrasi area yang sangat cair"
            ],
            details: `
                <p class="text-xs text-slate-600 mb-3 leading-relaxed"><strong>Bidang Keahlian:</strong> Area & Territory Management &middot; Route-to-Market Strategy &middot; Sales Team Transformation & Coaching &middot; Consumer Engagement & Brand Building &middot; Channel Strategy & Distribution &middot; Performance Management System</p>
                <p class="text-xs text-slate-600 leading-relaxed"><strong>Pengalaman:</strong> Manager Regional Consumer Engagement (Jatim, Bali, Nusra) &middot; Manager Regional Zone (Sumatra 1) &middot; Manager Regional Zone (Jawa Tengah) &middot; Manager Area Marketing (Surabaya, Sidoarjo, Pamekasan)</p>`
        }
    ];

    let newHtml = '<div class="space-y-16 md:space-y-24">\n';
    
    profiles.forEach((p, idx) => {
        const isEven = idx % 2 !== 0;
        const alignClass = isEven ? 'md:flex-row-reverse' : 'md:flex-row';
        const badgeList = p.afiliasi.split('&middot;').map(t => `<span class="inline-block px-2 py-1 bg-surface-muted border border-customBorder-default rounded-sm font-body text-[11px] text-slate-600">${t.trim()}</span>`).join('');
        const achieveList = p.achievements.map(a => `<li class="flex items-start"><span class="text-sage-500 mr-2 mt-0.5">→</span><span class="text-slate-700 text-sm font-body">${a}</span></li>`).join('');

        newHtml += `
        <div class="flex flex-col ${alignClass} gap-8 lg:gap-16 items-start" data-reveal>
            <!-- Kolom Visual/Quote -->
            <div class="w-full md:w-5/12 flex flex-col gap-6">
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-display text-[22px] font-bold flex-shrink-0">
                        ${p.initial}
                    </div>
                    <div>
                        <h3 class="font-display text-[28px] font-medium text-slate-900 leading-tight">${p.name}</h3>
                        <p class="font-body text-[13px] text-slate-500 italic mt-1">${p.subtitle}</p>
                    </div>
                </div>
                
                <div class="relative bg-surface-soft p-6 rounded-card border border-customBorder-default">
                    <span class="absolute -top-3 left-4 text-4xl text-sage-300 font-display font-bold">"</span>
                    <p class="font-display italic text-[18px] text-slate-700 leading-relaxed pt-2">${p.desc}</p>
                </div>
                
                <div class="flex flex-wrap gap-2 mt-2">
                    ${badgeList}
                </div>
            </div>
            
            <!-- Kolom Pencapaian -->
            <div class="w-full md:w-7/12">
                <h4 class="font-body text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-customBorder-default pb-2">Pencapaian Strategis</h4>
                <ul class="space-y-3 mb-8">
                    ${achieveList}
                </ul>
                
                <div class="mt-4 border-t border-customBorder-default pt-4">
                    <button class="accordion-toggle w-full flex justify-between items-center text-sm font-bold text-sage-700 hover:text-slate-900 transition-colors py-2" aria-expanded="false">
                        <span class="uppercase tracking-widest text-[11px]">Detail Keahlian & Kredensial</span>
                        <i class="fa-solid fa-chevron-down text-xs transition-transform duration-300"></i>
                    </button>
                    <div class="accordion-content" aria-expanded="false">
                        <div class="accordion-inner pt-4">
                            ${p.details}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    newHtml += '</div>\n';

    let before = html.substring(0, gridStart);
    let after = html.substring(sectionEnd);
    html = before + newHtml + after;
    
    fs.writeFileSync('d:/training-institute/training-institute/about.html', html);
    console.log('about.html updated with alternating layout');
} else {
    console.log('Could not find grid section in about.html');
}

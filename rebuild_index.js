const fs = require('fs');

// 1. Read the original backup
let html = fs.readFileSync('d:/training-institute/training-institute/backup_v1/index.html', 'utf8');

// --- Global Classes Cleanup (from redesign_plan.md) ---
html = html.replace(/font-serif/g, 'font-display');
html = html.replace(/text-primary/g, 'text-slate-900');
html = html.replace(/bg-primary/g, 'bg-slate-900');
html = html.replace(/border-primary/g, 'border-slate-900');
html = html.replace(/text-secondary/g, 'text-sage-500');
html = html.replace(/bg-secondary/g, 'bg-sage-500');
html = html.replace(/text-gray-900/g, 'text-slate-900');
html = html.replace(/text-gray-600/g, 'text-slate-600');
html = html.replace(/text-gray-700/g, 'text-slate-700');
html = html.replace(/text-gray-500/g, 'text-slate-500');
html = html.replace(/text-gray-800/g, 'text-slate-800');
html = html.replace(/bg-gray-50/g, 'bg-surface-soft');
html = html.replace(/bg-gray-100/g, 'bg-slate-100');
html = html.replace(/border-gray-100/g, 'border-customBorder-default');
html = html.replace(/border-gray-200/g, 'border-customBorder-default');

// --- Layout Fix ---
html = html.replace('<body class="font-sans text-slate-800 antialiased bg-surface-soft">', '<body class="font-sans text-slate-800 antialiased bg-surface-soft flex flex-col min-h-screen">');

// --- Hero Section Fix ---
const heroStart = html.indexOf('<!-- Header (Hero Area) -->');
const heroEnd = html.indexOf('</header>', heroStart) + 9;

const newHero = `    <!-- Header (Hero Area) -->
    <header id="beranda" class="relative pt-40 pb-20 lg:pt-52 lg:pb-36 min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden">
        <!-- Background Image & Overlay -->
        <div class="absolute inset-0 z-0">
            <img src="images/krakenimages-376KN_ISplE-unsplash.jpg" alt="Landing Page" class="w-full h-full object-cover object-center opacity-100">
            <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(30,40,50,0.65) 0%, rgba(30,40,50,0.45) 100%)"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="lg:w-3/5">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6" data-reveal>
                    Amarta Artha <span class="text-sage-500 relative whitespace-nowrap">Institute
                        <svg class="absolute w-full h-3 -bottom-1 left-0 text-sage-500" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00049 6.84814C53.5136 -1.8959 133.479 -1.61907 197.904 6.84814" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </span>
                </h1>
                
                <div class="text-sm md:text-base lg:text-lg text-slate-100 mb-10 max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed flex flex-col gap-3" data-reveal data-reveal-delay="1">
                    <div class="flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-2">
                        <span>Strategic Leadership</span><span class="text-sage-500">&middot;</span><span>Human Capital Laboratory</span><span class="text-sage-500">&middot;</span><span>Strategic Think Tank</span>
                    </div>
                    <div class="flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-2 text-slate-300">
                        <span>Knowledge Ecosystem</span><span class="text-sage-500">&middot;</span><span>Business Judgment Rule</span><span class="text-sage-500">&middot;</span><span>Cybersecurity & IT</span><span class="text-sage-500">&middot;</span><span>Sales & Marketing</span>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-reveal data-reveal-delay="2">
                    <a href="solutions.html" class="bg-sage-500 text-white px-8 py-3.5 rounded-btn font-medium text-lg hover:bg-sage-700 transition-colors shadow-sm">
                        Lihat Program
                    </a>
                    <a href="about.html" class="bg-transparent border border-white/50 text-white px-8 py-3.5 rounded-btn font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                        Tentang Kami
                    </a>
                </div>
            </div>
        </div>
    </header>`;

if(heroStart !== -1) {
    html = html.substring(0, heroStart) + newHero + html.substring(heroEnd);
}

// --- Profil Institusi Fix ---
// Re-apply the centering of Profil Institusi
html = html.replace(/<div class="grid lg:grid-cols-2 gap-16 items-center">/, '<div class="max-w-3xl mx-auto text-center">');

// Extract Stats out of Profil Institusi
const statBlockRegex = /<!-- Right: Stats Counters -->\s*<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;
html = html.replace(statBlockRegex, '</div>\n        </div>\n    </section>');

const newStatSection = `
    <!-- Statistik Section -->
    <section class="py-16 bg-slate-900 border-t border-slate-800 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                <div class="text-center md:px-4 py-4" data-reveal data-reveal-delay="1">
                    <div class="text-4xl lg:text-5xl font-display font-semibold text-sage-300 mb-3 stat-counter" data-target="5" data-prefix="" data-suffix="+" data-decimals="0">0</div>
                    <p class="text-[13px] text-slate-300 font-body tracking-wider uppercase">Tahun Pengalaman Gabungan</p>
                </div>
                <div class="text-center md:px-4 py-4" data-reveal data-reveal-delay="2">
                    <div class="text-4xl lg:text-5xl font-display font-semibold text-sage-300 mb-3 stat-counter" data-target="1.64" data-prefix="IDR " data-suffix="T" data-decimals="2">0</div>
                    <p class="text-[13px] text-slate-300 font-body tracking-wider uppercase">Turnaround P&L Dieksekusi</p>
                </div>
                <div class="text-center md:px-4 py-4" data-reveal data-reveal-delay="3">
                    <div class="text-4xl lg:text-5xl font-display font-semibold text-sage-300 mb-3">Zero</div>
                    <p class="text-[13px] text-slate-300 font-body tracking-wider uppercase">Asset Seizures (Investigasi Tipikor)</p>
                </div>
                <div class="text-center md:px-4 py-4" data-reveal data-reveal-delay="4">
                    <div class="text-4xl lg:text-5xl font-display font-semibold text-sage-300 mb-3 stat-counter" data-target="7" data-prefix="" data-suffix="" data-decimals="0">0</div>
                    <p class="text-[13px] text-slate-300 font-body tracking-wider uppercase">Disiplin Keahlian</p>
                </div>
            </div>
        </div>
    </section>
`;
html = html.replace('</section>\r\n\r\n    <!-- Layanan / Tujuh Disiplin Keahlian -->', '</section>\r\n' + newStatSection + '\r\n    <!-- Layanan / Tujuh Disiplin Keahlian -->');
html = html.replace('</section>\n\n    <!-- Layanan / Tujuh Disiplin Keahlian -->', '</section>\n' + newStatSection + '\n    <!-- Layanan / Tujuh Disiplin Keahlian -->');


// --- Service Cards Conversion ---
const cardRegex = /<div\s+class="group py-6[^>]+>\s*<div class="flex-1 md:ml-4">\s*<span[^>]+>([^<]+)<\/span>\s*<h3[^>]+>([^<]+)<\/h3>\s*<\/div>\s*<div class="md:w-5\/12 mt-2 md:mt-0">\s*<p[^>]+>([^<]+)<\/p>\s*<\/div>\s*<\/div>/gs;

let gridHtml = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n';
let count = 0;

let match;
while ((match = cardRegex.exec(html)) !== null) {
    count++;
    let label = match[1].trim();
    let title = match[2].trim();
    let desc = match[3].trim();
    
    let card = `
        <div class="bg-surface-base rounded-card p-7 border border-customBorder-default border-l-[3px] border-l-sage-500 hover:border-l-sage-700 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden" data-reveal data-reveal-delay="${count}">
            <span class="font-body text-[11px] uppercase tracking-widest text-sage-500 font-semibold mb-3 block">${label}</span>
            <h3 class="font-display text-[22px] font-semibold text-slate-900 mb-4">${title}</h3>
            <p class="font-body text-[14px] text-slate-600 leading-relaxed">${desc}</p>
        </div>`;
    gridHtml += card;
}
gridHtml += '\n</div>';

const oldWrapperRegex = /<div class="bg-white rounded-3xl shadow-lg border border-customBorder-default p-8 md:p-12">[\s\S]*?<\/div>\s*<\/div>\s*<div class="mt-16 text-center">/;
if(oldWrapperRegex.test(html)) {
    html = html.replace(oldWrapperRegex, gridHtml + '\n\n            <div class="mt-16 text-center">');
}

// Fix Footer
const footerStart = html.indexOf('<footer id="kontak"');
const footerEnd = html.indexOf('</footer>') + 9;

const newFooter = `<footer id="kontak" class="pt-16 pb-8 bg-slate-900 text-slate-300 relative border-t border-slate-700 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-12 gap-8 mb-16">
                <!-- Left: Title & Institute Info -->
                <div class="lg:col-span-5">
                    <span class="text-sage-500 font-bold tracking-widest uppercase text-xs mb-3 block">Hubungi Kami</span>
                    <h2 class="text-4xl lg:text-5xl font-display font-bold text-slate-100 mb-8 leading-tight">Mulai <br /><span class="text-slate-500">Percakapan</span></h2>
                    <div>
                        <h3 class="text-xl font-display font-bold text-slate-100 mb-1">Amarta Artha Institute</h3>
                        <a href="https://amartaartha.id" class="inline-block text-slate-400 hover:text-sage-300 transition-colors text-base font-medium border-b border-slate-700 hover:border-sage-500 pb-1">amartaartha.id</a>
                    </div>
                </div>

                <!-- Right: Contacts -->
                <div class="lg:col-span-6 lg:col-start-7 space-y-8">
                    <!-- Koordinator Institusi -->
                    <div class="border-l border-slate-700 pl-6 hover:border-sage-500 transition-colors duration-500">
                        <span class="text-slate-500 uppercase tracking-widest text-xs font-semibold mb-2 block">Koordinator Institusi</span>
                        <h4 class="text-xl font-bold text-slate-100 mb-3">Dr. Hendra Kusuma Wardana, S.H., M.H., CEH</h4>
                        <div class="flex flex-col xl:flex-row xl:items-center text-slate-400 gap-2 xl:gap-5 text-sm font-medium">
                            <a href="https://linkedin.com/in/hkwcode" class="hover:text-sage-300 transition-colors flex items-center"><i class="fa-brands fa-linkedin mr-2 text-slate-500"></i>linkedin.com/in/hkwcode</a>
                            <span class="hidden xl:inline text-slate-700">&bull;</span>
                            <a href="https://hendrakusumawardana.id" class="hover:text-sage-300 transition-colors flex items-center"><i class="fa-solid fa-globe mr-2 text-slate-500"></i>hendrakusumawardana.id</a>
                        </div>
                    </div>

                    <!-- Layanan Cybersecurity & IT -->
                    <div class="border-l border-slate-700 pl-6 hover:border-sage-500 transition-colors duration-500">
                        <span class="text-slate-500 uppercase tracking-widest text-xs font-semibold mb-2 block">Layanan Cybersecurity & IT</span>
                        <h4 class="text-xl font-bold text-slate-100 mb-3">Ali Hasbullah, M.B.A. (CISSP, CISA)</h4>
                        <div class="flex flex-col xl:flex-row xl:items-center text-slate-400 gap-2 xl:gap-5 text-sm font-medium">
                            <a href="tel:+628990033303" class="hover:text-sage-300 transition-colors flex items-center"><i class="fa-solid fa-phone mr-2 text-slate-500"></i>+62 899 003 3303</a>
                            <span class="hidden xl:inline text-slate-700">&bull;</span>
                            <a href="mailto:ali.hasbullah@gmail.com" class="hover:text-sage-300 transition-colors flex items-center"><i class="fa-solid fa-envelope mr-2 text-slate-500"></i>ali.hasbullah@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Line -->
            <div class="pt-6 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs sm:text-sm gap-4">
                <span class="font-medium">&copy; 2024 Amarta Artha Institute. All rights reserved.</span>
                <div class="flex gap-4 sm:gap-6">
                    <a href="#" class="hover:text-sage-300 transition-colors">Kebijakan Privasi</a>
                    <a href="#" class="hover:text-sage-300 transition-colors">Syarat & Ketentuan</a>
                </div>
            </div>
        </div>
    </footer>`;

if(footerStart !== -1) {
    html = html.substring(0, footerStart) + newFooter + html.substring(footerEnd);
}

fs.writeFileSync('d:/training-institute/training-institute/index.html', html);
console.log('index.html fully rebuilt with correct navbar');

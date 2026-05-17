const fs = require('fs');
let html = fs.readFileSync('d:/training-institute/training-institute/index.html', 'utf8');

// Replace the entire Stats block from "Profil Institusi" section
const statTarget = `<!-- Right: Stats Counters -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        class="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm text-center transform hover:-translate-y-1 transition duration-300 flex flex-col justify-center">
                        <div class="text-4xl font-bold font-serif text-primary mb-2 stat-counter" data-target="5"
                            data-prefix="" data-suffix="+ Tahun" data-decimals="0">0</div>
                        <p class="text-sm text-gray-600 font-medium">Pengalaman eksekutif gabungan</p>
                    </div>
                    <div
                        class="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm text-center transform hover:-translate-y-1 transition duration-300 flex flex-col justify-center">
                        <div class="text-4xl font-bold font-serif text-primary mb-2 stat-counter" data-target="1.64"
                            data-prefix="IDR " data-suffix="T" data-decimals="2">0</div>
                        <p class="text-sm text-gray-600 font-medium">Turnaround P&L yang telah dieksekusi nyata</p>
                    </div>
                    <div
                        class="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm text-center transform hover:-translate-y-1 transition duration-300 flex flex-col justify-center">
                        <div class="text-4xl font-bold font-serif text-primary mb-2">Zero</div>
                        <p class="text-sm text-gray-600 font-medium">Asset seizures selama investigasi Tipikor terbesar
                            SOE Indonesia</p>
                    </div>
                    <div
                        class="bg-gray-50 border border-gray-100 p-8 rounded-2xl shadow-sm text-center transform hover:-translate-y-1 transition duration-300 flex flex-col justify-center">
                        <div class="text-4xl font-bold font-serif text-primary mb-2 stat-counter" data-target="4"
                            data-prefix="" data-suffix=" Pilar" data-decimals="0">0</div>
                        <p class="text-sm text-gray-600 font-medium">Disiplin keahlian yang tidak tertandingi</p>
                    </div>
                </div>`;

const statTarget2 = html.substring(html.indexOf('<!-- Right: Stats Counters -->'), html.indexOf('</div>', html.lastIndexOf('Disiplin keahlian yang tidak tertandingi')) + 30);
// We will remove it from the grid inside Profil Institusi and change it to single col
html = html.replace(/<div class="grid lg:grid-cols-2 gap-16 items-center">/, '<div class="max-w-3xl mx-auto text-center">');
html = html.replace(statTarget2, '');

// Insert the new horizontal stat section after Profil Institusi
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

fs.writeFileSync('d:/training-institute/training-institute/index.html', html);
console.log('Stats separated');

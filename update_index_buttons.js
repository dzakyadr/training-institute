const fs = require('fs');
let html = fs.readFileSync('d:/training-institute/training-institute/index.html', 'utf8');

// Fix buttons
html = html.replace(/<a href="solutions.html"[\s\S]*?Lihat Program\s*<\/a>/, `<a href="solutions.html" class="bg-sage-500 text-white px-8 py-3.5 rounded-btn font-medium text-lg hover:bg-sage-700 transition-colors shadow-sm">Lihat Program</a>`);

html = html.replace(/<a href="about.html"[\s\S]*?Tentang Kami\s*<\/a>/, `<a href="about.html" class="bg-transparent border border-white/50 text-white px-8 py-3.5 rounded-btn font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center">Tentang Kami</a>`);

// Fix text-secondary -> text-sage-500 in h1 svg
html = html.replace(/text-secondary/g, 'text-sage-500');

// Fix font-serif -> font-display
html = html.replace(/font-serif/g, 'font-display');

fs.writeFileSync('d:/training-institute/training-institute/index.html', html);
console.log('index.html buttons and fonts fixed');

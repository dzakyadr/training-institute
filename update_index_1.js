const fs = require('fs');

let html = fs.readFileSync('d:/training-institute/training-institute/index.html', 'utf8');

// Hero overlay
html = html.replace(
    /class="absolute inset-0 bg-gradient-to-t from-primary via-primary\/80 to-transparent mix-blend-multiply"/,
    'class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(30,40,50,0.65) 0%, rgba(30,40,50,0.45) 100%)"'
);

// Add data-reveal to Hero elements
html = html.replace(/<h1 class="([^"]+)">/, '<h1 class="$1" data-reveal>');
html = html.replace(/<div class="text-sm md:text-base lg:text-lg([^"]+)">/, '<div class="text-sm md:text-base lg:text-lg$1" data-reveal data-reveal-delay="1">');
html = html.replace(/<div class="flex flex-col sm:flex-row gap-4([^"]+)">/, '<div class="flex flex-col sm:flex-row gap-4$1" data-reveal data-reveal-delay="2">');

// CTA Buttons
html = html.replace(
    /<a href="solutions\.html"\s*class="[^"]+">/,
    '<a href="solutions.html" class="bg-sage-500 text-white px-8 py-3 rounded-btn font-medium text-lg hover:bg-sage-700 transition-colors">'
);
html = html.replace(
    /<a href="about\.html"\s*class="[^"]+">/,
    '<a href="about.html" class="bg-transparent border border-white/50 text-white px-8 py-3 rounded-btn font-medium text-lg hover:bg-white/10 transition-colors flex items-center justify-center">'
);

// Profil Institusi colors
html = html.replace(/id="profil" class="py-24 bg-white relative"/, 'id="profil" class="py-24 bg-surface-base relative"');
html = html.replace(/text-secondary font-bold tracking-widest uppercase/g, 'text-sage-500 font-bold tracking-widest uppercase');

fs.writeFileSync('d:/training-institute/training-institute/index.html', html);
console.log('Hero updated');

const fs = require('fs');

function convertIndexCards() {
    let html = fs.readFileSync('d:/training-institute/training-institute/index.html', 'utf8');
    
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

    // Replace the old list wrapper
    const startIndex = html.indexOf('<div class="bg-surface-default rounded-card shadow-sm border border-customBorder-default p-8 md:p-12">');
    const endIndex = html.indexOf('<div class="mt-16 text-center">');
    
    if (startIndex !== -1 && endIndex !== -1) {
        let before = html.substring(0, startIndex);
        let after = html.substring(endIndex);
        html = before + gridHtml + '\n\n            ' + after;
        fs.writeFileSync('d:/training-institute/training-institute/index.html', html);
        console.log('index.html Service Cards converted to Grid with new design.');
    } else {
        console.log('Could not find wrapper in index.html');
    }
}

convertIndexCards();

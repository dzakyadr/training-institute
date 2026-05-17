const fs = require('fs');
let html = fs.readFileSync('d:/training-institute/training-institute/solutions.html', 'utf8');

const sectionRegex = /<!-- Card \d+: [^-]+-->\s*<div class="bg-surface-default rounded-card.*?<div class="flex flex-wrap gap-2">.*?<\/div>\s*<\/div>\s*<\/div>/gs;

let count = 0;
html = html.replace(sectionRegex, (match) => {
    count++;
    
    // Extract pieces
    const labelMatch = match.match(/<span class="text-sage-500 font-bold tracking-widest uppercase text-sm">([^<]+)<\/span>/);
    const titleMatch = match.match(/<h3 class="[^"]+">([^<]+)<\/h3>/);
    const shortDescMatch = match.match(/<p class="text-xl text-slate-600 leading-relaxed mb-6 font-medium">\s*([\s\S]*?)\s*<\/p>/);
    // There is a second paragraph, we can skip or combine
    
    // Extract ul and list items
    const ulMatch = match.match(/<ul class="space-y-4 mb-10">\s*([\s\S]*?)\s*<\/ul>/);
    let lis = '';
    if (ulMatch) {
        // extract each li
        const liRegex = /<li class="flex items-start">[\s\S]*?<p class="text-slate-600">(.*?)<\/p>\s*<\/li>/g;
        let liMatch;
        while ((liMatch = liRegex.exec(ulMatch[1])) !== null) {
            // Replace the strong tag if any
            let text = liMatch[1].replace(/<strong class="text-slate-900">([^<]+)<\/strong>:\s*/, '<strong>$1:</strong> ');
            lis += `
                <li class="flex items-start">
                    <span class="text-sage-500 mr-3 mt-0.5">•</span>
                    <p class="font-body text-[13px] text-slate-700 leading-relaxed">${text}</p>
                </li>`;
        }
    }
    
    // Extract tags
    const tagsMatch = match.match(/<div class="flex flex-wrap gap-2">\s*([\s\S]*?)\s*<\/div>/);
    let tags = '';
    if (tagsMatch) {
        const tagRegex = /<span class="[^"]+">([^<]+)<\/span>/g;
        let tMatch;
        while ((tMatch = tagRegex.exec(tagsMatch[1])) !== null) {
            tags += `<span class="inline-block px-3 py-1 bg-surface-muted border border-customBorder-default text-slate-600 font-body text-[11px] rounded-full">${tMatch[1]}</span>\n`;
        }
    }

    const label = labelMatch ? labelMatch[1].trim() : 'LAYANAN';
    const title = titleMatch ? titleMatch[1].trim() : '';
    const desc = shortDescMatch ? shortDescMatch[1].trim() : '';

    return `
            <!-- Card ${count} -->
            <div class="bg-surface-base rounded-card p-8 md:p-10 border border-customBorder-default border-l-[3px] border-l-sage-500 hover:border-l-sage-700 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden" data-reveal data-reveal-delay="${count}">
                <span class="font-body text-[11px] uppercase tracking-widest text-sage-500 font-semibold mb-3 block">${label}</span>
                <h3 class="font-display text-2xl md:text-3xl font-semibold text-slate-900 mb-4">${title}</h3>
                <p class="font-body text-[15px] text-slate-600 mb-6 leading-relaxed">${desc}</p>
                
                <div class="w-full h-[1px] bg-customBorder-default mb-6"></div>
                
                <ul class="space-y-3 mb-8">
                    ${lis}
                </ul>
                
                <div class="mt-auto">
                    <div class="flex flex-wrap gap-2">
                        ${tags}
                    </div>
                </div>
            </div>`;
});

// Fix the grid containing the cards
html = html.replace(/<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">/, '<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8">');

fs.writeFileSync('d:/training-institute/training-institute/solutions.html', html);
console.log('solutions.html Service Cards converted to new design.');

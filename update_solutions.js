const fs = require('fs');
let html = fs.readFileSync('d:/training-institute/training-institute/solutions.html', 'utf8');

const startIdx = html.indexOf('<!-- Services Container -->');
const endIdx = html.indexOf('</section>', startIdx) + 10;

if (startIdx === -1 || endIdx === 9) {
    console.error('Section not found');
    process.exit(1);
}

let section = html.substring(startIdx, endIdx);

section = section.replace(/bg-white rounded-3xl/g, 'bg-surface-default rounded-card');
section = section.replace(/shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden group/g, 'shadow-sm border border-customBorder-default hover:shadow-md transition-shadow duration-300 relative overflow-hidden group');
section = section.replace(/bg-gradient-to-b from-primary to-secondary/g, 'bg-sage-500');
section = section.replace(/text-gray-400 font-bold tracking-widest uppercase/g, 'text-sage-500 font-bold tracking-widest uppercase');
section = section.replace(/text-3xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary transition duration-300/g, 'text-3xl font-display font-bold text-slate-900 mb-4 group-hover:text-sage-700 transition-colors duration-300');
section = section.replace(/text-xl text-gray-600/g, 'text-xl text-slate-600');
section = section.replace(/text-gray-600 leading-relaxed/g, 'text-slate-600 leading-relaxed');
section = section.replace(/fa-check text-secondary/g, 'fa-check text-sage-500');
section = section.replace(/text-gray-900/g, 'text-slate-900');
section = section.replace(/text-gray-600/g, 'text-slate-500');
section = section.replace(/text-xs font-bold tracking-widest uppercase text-gray-400/g, 'text-xs font-bold tracking-widest uppercase text-slate-500');
section = section.replace(/bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-200/g, 'bg-surface-soft text-slate-600 text-xs font-medium rounded-btn border border-customBorder-default');
section = section.replace(/border-gray-100/g, 'border-customBorder-default');

section = section.replace(/<section class=\"py-24 bg-white relative\">/, '<section class=\"py-24 bg-surface-muted border-t border-customBorder-default relative\">');

html = html.substring(0, startIdx) + section + html.substring(endIdx);
fs.writeFileSync('d:/training-institute/training-institute/solutions.html', html);
console.log('Updated solutions.html successfully!');

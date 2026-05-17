const fs = require('fs');

['portfolio.html', 'ebook.html', 'about.html'].forEach(file => {
    let html = fs.readFileSync('d:/training-institute/training-institute/' + file, 'utf8');
    
    html = html.replace(/font-serif/g, 'font-display');
    html = html.replace(/text-primary/g, 'text-slate-900');
    html = html.replace(/bg-primary/g, 'bg-slate-900');
    html = html.replace(/text-secondary/g, 'text-sage-500');
    html = html.replace(/bg-secondary/g, 'bg-sage-500');
    html = html.replace(/text-gray-900/g, 'text-slate-900');
    html = html.replace(/text-gray-600/g, 'text-slate-600');
    html = html.replace(/text-gray-700/g, 'text-slate-700');
    html = html.replace(/text-gray-500/g, 'text-slate-500');
    html = html.replace(/bg-gray-50/g, 'bg-surface-soft');
    html = html.replace(/bg-gray-100/g, 'bg-slate-100');
    html = html.replace(/border-gray-100/g, 'border-customBorder-default');
    html = html.replace(/border-gray-200/g, 'border-customBorder-default');
    
    fs.writeFileSync('d:/training-institute/training-institute/' + file, html);
});

console.log('Cleanup completed for remaining files');

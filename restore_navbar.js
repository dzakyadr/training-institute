const fs = require('fs');

const indexHtml = fs.readFileSync('d:/training-institute/training-institute/index.html', 'utf8');

const navStart = indexHtml.indexOf('<nav class="fixed w-full');
const navEnd = indexHtml.indexOf('</nav>') + 6;

const navbarTemplate = indexHtml.substring(navStart, navEnd);

['about.html', 'solutions.html', 'portfolio.html', 'ebook.html'].forEach(file => {
    let html = fs.readFileSync('d:/training-institute/training-institute/' + file, 'utf8');
    
    const fileNavStart = html.indexOf('<nav class="fixed');
    const fileNavEnd = html.indexOf('</nav>', fileNavStart) + 6;
    
    if (fileNavStart !== -1 && fileNavEnd !== -1) {
        let newNavbar = navbarTemplate;
        
        // Remove active state from Beranda
        newNavbar = newNavbar.replace('text-slate-900 font-bold border-b-2 border-slate-900 pb-1', 'text-slate-600 hover:text-slate-900 font-medium');
        newNavbar = newNavbar.replace('text-slate-900 bg-blue-50', 'text-slate-800 hover:text-slate-900 hover:bg-blue-50');
        
        // Add active state to current page
        if (file === 'about.html') {
            newNavbar = newNavbar.replace('<a href="about.html" class="text-slate-600 hover:text-slate-900 font-medium transition">', '<a href="about.html" class="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 transition">');
            // mobile
            newNavbar = newNavbar.replace('<a href="about.html"\n                    class="block px-3 py-3 text-slate-800 hover:text-slate-900 hover:bg-blue-50', '<a href="about.html"\n                    class="block px-3 py-3 text-slate-900 bg-blue-50');
        } else if (file === 'portfolio.html') {
            newNavbar = newNavbar.replace('<a href="portfolio.html"\n                        class="text-slate-600 hover:text-slate-900 font-medium transition">', '<a href="portfolio.html"\n                        class="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 transition">');
            // mobile
            newNavbar = newNavbar.replace('<a href="portfolio.html"\n                    class="block px-3 py-3 text-slate-800 hover:text-slate-900 hover:bg-blue-50', '<a href="portfolio.html"\n                    class="block px-3 py-3 text-slate-900 bg-blue-50');
        }
        
        html = html.substring(0, fileNavStart) + newNavbar + html.substring(fileNavEnd);
        fs.writeFileSync('d:/training-institute/training-institute/' + file, html);
        console.log(file + ' navbar restored');
    }
});

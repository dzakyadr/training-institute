const fs = require('fs');

['about.html', 'solutions.html', 'portfolio.html', 'index.html', 'ebook.html'].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add flex flex-col min-h-screen to body if not already present
    if (!content.match(/<body[^>]*flex flex-col min-h-screen/)) {
        content = content.replace(/<body([^>]*)class="([^"]*)"/, function(match, p1, p2) {
            // Remove existing flex classes if any to avoid duplicates
            let classes = p2.split(' ').filter(c => !['flex', 'flex-col', 'min-h-screen'].includes(c));
            classes.push('flex', 'flex-col', 'min-h-screen');
            return '<body' + p1 + 'class="' + classes.join(' ') + '"';
        });
    }
    
    // Add mt-auto to footer if not already present
    if (content.match(/<footer[^>]*class="[^"]*"/)) {
        content = content.replace(/<footer([^>]*)class="([^"]*)"/, function(match, p1, p2) {
            if (!p2.includes('mt-auto')) {
                return '<footer' + p1 + 'class="' + p2 + ' mt-auto"';
            }
            return match;
        });
    }

    fs.writeFileSync(file, content);
});

console.log('Added flex layout to keep footer at bottom');

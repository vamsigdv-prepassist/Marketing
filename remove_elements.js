const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'app', 'services');
const serviceDirs = fs.readdirSync(servicesDir).filter(f => fs.statSync(path.join(servicesDir, f)).isDirectory());

let modifiedCount = 0;

for (const dir of serviceDirs) {
  const pagePath = path.join(servicesDir, dir, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Remove the Back Button block. It can vary slightly, but generally:
    // {/* Back Button */}
    // <div className="mb-8 animate-mobile-enter">...</div>
    // OR similar
    
    // Let's use regex to remove it:
    
    // Pattern 1:
    content = content.replace(/\{\/\*\s*Back Button\s*\*\/\}\s*<div[^>]*>\s*<Link href="\/services"[^>]*>[\s\S]*?<\/Link>\s*<\/div>/g, '');
    
    // Pattern 2 (from my older format):
    content = content.replace(/\{\/\*\s*Back button and Tag\s*\*\/\}\s*<div[^>]*>[\s\S]*?<\/div>\s*<\/div>/g, '');

    // The sparkels block:
    // <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 mb-6 tracking-widest uppercase">
    //   <Sparkles className="w-3 h-3 text-amber-500" /> PrepAssist AI
    // </div>
    content = content.replace(/<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full[^>]*>\s*<Sparkles[^>]*\/>\s*PrepAssist AI\s*<\/div>/g, '');
    
    // Another variation of PrepAssist AI tag:
    // <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50\/50 border border-blue-100 text-sm font-semibold text-blue-700">
    //   <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
    //   PREPASSIST AI
    // </div>
    content = content.replace(/<div className="inline-flex items-center[^>]*>\s*<Sparkles[^>]*\/>\s*PREPASSIST AI\s*<\/div>/gi, '');

    fs.writeFileSync(pagePath, content, 'utf8');
    modifiedCount++;
  }
}

console.log(`Modified ${modifiedCount} files.`);

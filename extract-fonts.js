import fs from 'fs/promises';
import path from 'path';

async function findChineseChars(dir) {
    const chars = new Set();
    const files = await fs.readdir(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = await fs.stat(fullPath);
        if (stat.isDirectory()) {
            const subChars = await findChineseChars(fullPath);
            for (const c of subChars) chars.add(c);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
            const content = await fs.readFile(fullPath, 'utf8');
            const matches = content.match(/[\u3000-\u303F\u4e00-\u9fa5\uFF00-\uFFEF]/g);
            if (matches) {
                for (const m of matches) chars.add(m);
            }
        }
    }
    return Array.from(chars);
}

findChineseChars('src').then(chars => console.log(chars.join(''))).catch(console.error);
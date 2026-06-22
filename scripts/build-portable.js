// Simple helper to pack app.asar and create a packaged folder using electron-packager
const { execSync } = require('child_process');
const path = require('path');

const root = process.cwd();
console.log('Packing app.asar...');
execSync('npx asar pack resources/app resources/app.asar', { stdio: 'inherit' });

console.log('Running electron-packager to create portable build...');
const out = path.join(root, 'dist');
execSync(`npx electron-packager . Antigravity --platform=win32 --arch=x64 --out=${out} --overwrite`, { stdio: 'inherit' });

console.log('Portable build created in', out);

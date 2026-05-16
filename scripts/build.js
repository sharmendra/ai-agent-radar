const fs = require('fs');
const path = require('path');
const required = ['index.html','styles.css','app.js'];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`${file} missing`);
}
fs.rmSync('public', { recursive: true, force: true });
fs.mkdirSync('public', { recursive: true });
for (const file of required) {
  fs.copyFileSync(file, path.join('public', file));
}
console.log('Static site built to public/.');

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const params = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'params.json'), 'utf8'));

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

if (!html.includes('Rashumon')) fail('html title');
if (!html.includes('multi-lingual word processor')) fail('html tagline');
if (params.name !== 'Rashumon') fail('params.name');
if (!String(params.tagline).includes('Amiga')) fail('params.tagline');
console.log('OK RashumonTests');

const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

const oldText = 'Corte sin zona afectada por calor (HAZ) excesivo';
const newText = 'Corte sin zona afectada por calor (HAZ) excesivo';

// Force re-writing it to be sure
content = content.replace(oldText, newText);

fs.writeFileSync(filePath, content, 'utf8');
console.log('HAZ bullet point re-written.');

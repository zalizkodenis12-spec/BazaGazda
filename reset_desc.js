const fs = require('fs');

const catalogPath = 'assets/js/catalog.js';
const origPath = 'scratch_products.json';

let content = fs.readFileSync(catalogPath, 'utf8');

// We need to parse PRODUCTS from catalog.js
// It's a valid JS file. Let's just run it in a new context or use eval (safe here since we generated it).
let sandbox = {};
const vm = require('vm');
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

let products = sandbox.PRODUCTS;
let origProducts = JSON.parse(fs.readFileSync(origPath, 'utf8'));

let origMap = {};
for (let p of origProducts) {
    origMap[p.id] = p.desc || '';
}

let changes = 0;
for (let p of products) {
    let origDesc = origMap[p.id];
    if (origDesc) {
        p.desc = origDesc;
    } else {
        p.desc = `Код 1С: ${p.id}`;
    }
    changes++;
}

console.log(`Updated ${changes} descriptions.`);

// Now we need to replace the PRODUCTS array in the string
// Since we generated it with JSON.stringify, we can just replace the block between `var PRODUCTS = [` and `];\n\n// ====`
let startMarker = 'var PRODUCTS = ';
let endMarker = '];\n\n// ============================================';

let startIdx = content.indexOf(startMarker);
let endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    let newJson = JSON.stringify(products, null, 2);
    let newContent = content.substring(0, startIdx + startMarker.length) + newJson + content.substring(endIdx + 1);
    fs.writeFileSync(catalogPath, newContent, 'utf8');
    console.log("Successfully updated catalog.js");
} else {
    console.log("Could not find markers.");
}

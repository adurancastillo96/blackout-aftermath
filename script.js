// ¡El país te necesita!
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = fs.readdirSync('subestaciones');

function findMeasure() {
    for (const file of files) {
        const filePath = path.join(__dirname, 'subestaciones', file);
        const content = fs.readFileSync(filePath, 'utf-8').trim();

        const [firstValue, secondValue] = content.split(',');
        const diff = Math.abs(firstValue - secondValue);

        if (diff == 15000) {
            console.log(`Station found: ${file}`);
            console.log(`Values: ${firstValue} | ${secondValue}`);
            console.log(`Difference: ${diff}`);
        }        
    }
} 

findMeasure();
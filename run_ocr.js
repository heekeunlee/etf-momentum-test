
import Tesseract from 'tesseract.js';
import fs from 'fs';

const slices = ['enhanced_slice_5.png', 'enhanced_slice_6.png'];

async function processImages() {
    console.log('Starting OCR...');
    for (const slice of slices) {
        console.log(`Processing ${slice}...`);
        const { data: { text } } = await Tesseract.recognize(
            slice,
            'kor+eng',
            { logger: m => console.log(m) }
        );
        console.log(`--- Text from ${slice} ---`);
        console.log(text);
        fs.appendFileSync('ocr_output.txt', `--- Text from ${slice} ---\n${text}\n\n`);
        console.log(`--- End of ${slice} ---`);
    }
}

processImages();

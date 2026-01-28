
import Tesseract from 'tesseract.js';
import fs from 'fs';

const slices = ['slice_0.jpg', 'slice_4000.jpg', 'slice_8000.jpg'];

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

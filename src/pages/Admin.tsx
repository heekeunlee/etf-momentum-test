import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import type { RankingReport } from '../types';
import { Save, Upload as UploadIcon, FileJson, Loader2 } from 'lucide-react';

export const Admin: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [jsonResult, setJsonResult] = useState<string>('');
    const [statusText, setStatusText] = useState('');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
            setJsonResult('');
            setStatusText('Image loaded. Click Process to start OCR.');
        }
    };

    const processImage = async () => {
        if (!image) return;
        setLoading(true);
        setStatusText('Initializing Tesseract...');

        try {
            const result = await Tesseract.recognize(image, 'kor+eng', {
                logger: m => {
                    if (m.status === 'recognizing text') {
                        setProgress(Math.floor(m.progress * 100));
                        setStatusText(`Recognizing text... ${Math.floor(m.progress * 100)}%`);
                    } else {
                        setStatusText(m.status);
                    }
                }
            });

            console.log(result.data.text);
            setStatusText('Parsing text...');
            const parsed = parseOCRText(result.data.text);
            setJsonResult(JSON.stringify(parsed, null, 2));
            setStatusText('Processing complete.');
        } catch (err: any) {
            console.error(err);
            setStatusText(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const parseOCRText = (text: string): RankingReport => {
        // Very basic parser - in reality, this needs complex regex specific to the image format
        // This is a placeholder to show structure
        const lines = text.split('\n').filter(l => l.trim().length > 0);

        const report: RankingReport = {
            date: new Date().toISOString().split('T')[0],
            categories: [
                {
                    categoryName: "Extracted Data",
                    items: []
                }
            ]
        };

        // Try to identify lines that look like: "1 KODEX ... +5.0% ..."
        // Regex: Number, Name (mostly Korean/English), Percentages
        // Example: 1 KODEX 레버리지 +5.2% +12.1% ...
        lines.forEach(line => {
            // Heuristic: starts with digit, contains %
            if (/^\d+/.test(line) && line.includes('%')) {
                const tokens = line.split(/\s+/);
                if (tokens.length >= 4) {
                    report.categories[0].items.push({
                        rank: parseInt(tokens[0]) || 0,
                        name: tokens.slice(1, -4).join(' '), // Guess name items
                        yield1W: tokens[tokens.length - 4] || '',
                        yield1M: tokens[tokens.length - 3] || '',
                        yield3M: tokens[tokens.length - 2] || '',
                        yield6M: tokens[tokens.length - 1] || ''
                    });
                }
            }
        });

        return report;
    };

    const handleSaveLocal = () => {
        try {
            localStorage.setItem('etf_data', jsonResult);
            alert('Saved to LocalStorage! Go to Home to view.');
        } catch (e) {
            alert('Invalid JSON');
        }
    };

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Admin Dashboard</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="font-bold mb-4">1. Upload Capture</h2>
                    <div style={{ border: '2px dashed var(--color-border)', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center' }}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                            id="file-upload"
                        />
                        <label htmlFor="file-upload" className="btn btn-outline" style={{ cursor: 'pointer' }}>
                            <UploadIcon size={16} style={{ marginRight: '0.5rem' }} />
                            Select Image
                        </label>
                        {image && <div style={{ marginTop: '1rem' }}><img src={image} style={{ maxWidth: '100%', maxHeight: '300px' }} alt="Preview" /></div>}
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <button
                            className="btn btn-primary w-full"
                            onClick={processImage}
                            disabled={!image || loading}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : 'Process Image (OCR)'}
                        </button>
                    </div>
                    <div style={{ marginTop: '1rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                        Status: {statusText}
                    </div>
                    {loading && (
                        <div style={{ marginTop: '0.5rem', width: '100%', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
                            <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--color-primary)', transition: 'width 0.2s' }}></div>
                        </div>
                    )}
                </div>

                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="font-bold mb-4">2. Edit & Save Data</h2>
                    <p className="text-sm mb-2 text-muted">Review the extracted JSON. Copy it to <code>src/data/initialData.ts</code> for permanent update, or Save to LocalStorage for preview.</p>
                    <textarea
                        style={{ width: '100%', height: '400px', fontFamily: 'monospace', fontSize: '0.875rem', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '0.25rem' }}
                        value={jsonResult}
                        onChange={(e) => setJsonResult(e.target.value)}
                        placeholder="JSON output will appear here..."
                    />
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                        <button className="btn btn-primary" onClick={handleSaveLocal}>
                            <Save size={16} style={{ marginRight: '0.5rem' }} />
                            Save to Local (Preview)
                        </button>
                        <button className="btn btn-outline" onClick={() => navigator.clipboard.writeText(jsonResult)}>
                            <FileJson size={16} style={{ marginRight: '0.5rem' }} />
                            Copy JSON
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

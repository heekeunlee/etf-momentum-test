import React, { useState } from 'react';
import { X, Lock, Download, FileText, CheckCircle, ShieldAlert } from 'lucide-react';
import { generateDailyReport } from '../utils/pdfGenerator';


interface AdminModalProps {
    isOpen: boolean;
    onClose: () => void;
    todaysRankings: any[]; // Pass the calculated rankings from App
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, todaysRankings }) => {
    const [pin, setPin] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    if (!isOpen) return null;

    const handlePinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '0009') { // Admin Code
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Access Denied: Invalid Admin Code');
            setPin('');
        }
    };

    const handleDownload = async () => {
        setIsGenerating(true);
        try {
            await generateDailyReport(todaysRankings);
        } catch (error) {
            console.error(error);
            alert('Failed to generate PDF');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                maxWidth: '400px',
                width: '100%',
                padding: '0',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{ padding: '1rem', backgroundColor: '#1E293B', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ShieldAlert size={20} className="text-red-400" />
                        <span style={{ fontWeight: 700 }}>Admin Dashboard</span>
                    </div>
                    <button onClick={onClose} style={{ color: '#94A3B8' }}><X size={20} /></button>
                </div>

                <div style={{ padding: '2rem' }}>
                    {!isAuthenticated ? (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', backgroundColor: '#F1F5F9', borderRadius: '50%' }}>
                                <Lock size={32} className="text-gray-400" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1E293B' }}>Admin Verification</h3>
                            <p style={{ color: '#64748B', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Enter the master code to access system reports.</p>

                            <form onSubmit={handlePinSubmit}>
                                <input
                                    type="password"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={4}
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    placeholder="••••"
                                    style={{
                                        width: '100%',
                                        fontSize: '1.5rem',
                                        textAlign: 'center',
                                        letterSpacing: '0.5rem',
                                        padding: '0.75rem',
                                        border: '2px solid #E2E8F0',
                                        borderRadius: '0.75rem',
                                        marginBottom: '1rem',
                                        outline: 'none'
                                    }}
                                />
                                {error && <p style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>}
                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        backgroundColor: '#0F172A',
                                        color: 'white',
                                        borderRadius: '0.75rem',
                                        fontWeight: 600
                                    }}
                                >
                                    Verify
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '1rem', color: '#10B981', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={48} />
                                <span style={{ fontWeight: 700 }}>Access Granted</span>
                            </div>

                            <div style={{ backgroundColor: '#F8FAFC', padding: '1.5rem', borderRadius: '1rem', border: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
                                <FileText size={48} className="text-blue-500 mx-auto mb-2" />
                                <h4 style={{ margin: '0 0 0.5rem', fontWeight: 700 }}>Daily Alpha Report</h4>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B' }}>Includes: Market Analysis, Top 30 Rankings, AI Trade Proposals</p>
                            </div>

                            <button
                                onClick={handleDownload}
                                disabled={isGenerating}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem',
                                    backgroundColor: isGenerating ? '#94A3B8' : '#2563EB',
                                    color: 'white',
                                    borderRadius: '0.75rem',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.3)',
                                    cursor: isGenerating ? 'not-allowed' : 'pointer'
                                }}
                            >
                                <Download size={20} />
                                {isGenerating ? 'Generating PDF...' : 'Download PDF Report'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

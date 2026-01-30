import React from 'react';
import { X, TrendingUp, Calendar } from 'lucide-react';
import { tradingHistory } from '../data/tradingHistory';

interface TradingLogModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TradingLogModal: React.FC<TradingLogModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const latestLog = tradingHistory[0];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                maxWidth: '500px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{ padding: '1rem', backgroundColor: '#BE123C', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <TrendingUp size={20} />
                        <span style={{ fontWeight: 700 }}>주식 매매일지</span>
                    </div>
                    <button onClick={onClose} style={{ color: 'white', opacity: 0.8 }}><X size={20} /></button>
                </div>

                <div style={{ padding: '1.5rem' }}>
                    {/* Summary Card */}
                    <div style={{
                        backgroundColor: '#FFF1F2',
                        border: '1px solid #FECDD3',
                        borderRadius: '0.75rem',
                        padding: '1.5rem',
                        textAlign: 'center',
                        marginBottom: '1.5rem'
                    }}>
                        <p style={{ color: '#881337', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>오늘의 실현손익 ({latestLog.date})</p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#BE123C', margin: 0 }}>
                            +{latestLog.realizedProfit.toLocaleString()}원
                        </h2>
                    </div>

                    {/* History List */}
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} />
                        최근 매매 기록
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {tradingHistory.map((log, idx) => (
                            <div key={idx} style={{
                                padding: '1rem',
                                backgroundColor: '#F8FAFC',
                                borderRadius: '0.5rem',
                                border: '1px solid #E2E8F0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <div style={{ color: '#64748B', fontSize: '0.8rem' }}>{log.date}</div>
                                    <div style={{ fontWeight: 600, color: '#334155' }}>{log.memo}</div>
                                </div>
                                <div style={{ fontWeight: 700, color: '#DC2626' }}>
                                    +{log.realizedProfit.toLocaleString()}원
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

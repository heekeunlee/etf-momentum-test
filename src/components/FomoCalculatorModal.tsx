import React, { useState } from 'react';
import { X, Calculator, AlertTriangle } from 'lucide-react';

interface FomoCalculatorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ASSETS = [
    { id: 'btc', name: '비트코인 (BTC)', cagr: 1.5, multiplier5y: 15, multiplier10y: 150 }, // Rough estimates for fun
    { id: 'aapl', name: '애플 (Apple)', cagr: 0.25, multiplier5y: 3.5, multiplier10y: 10 },
    { id: 'tsla', name: '테슬라 (Tesla)', cagr: 0.4, multiplier5y: 8, multiplier10y: 100 },
    { id: 'nvda', name: '엔비디아 (Nvidia)', cagr: 0.6, multiplier5y: 25, multiplier10y: 200 },
    { id: 'qqq', name: '나스닥 100 (QQQ)', cagr: 0.18, multiplier5y: 2.5, multiplier10y: 6 },
    { id: 'spy', name: 'S&P 500 (SPY)', cagr: 0.12, multiplier5y: 1.8, multiplier10y: 3 },
];

export const FomoCalculatorModal: React.FC<FomoCalculatorModalProps> = ({ isOpen, onClose }) => {
    const [selectedAsset, setSelectedAsset] = useState(ASSETS[0].id);
    const [amount, setAmount] = useState<number>(100); // Unit: 10,000 KRW
    const [years, setYears] = useState<number>(5);
    const [result, setResult] = useState<number | null>(null);

    if (!isOpen) return null;

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const asset = ASSETS.find(a => a.id === selectedAsset);
        if (!asset) return;

        let multiplier = 1;
        if (years === 5) multiplier = asset.multiplier5y;
        else if (years === 10) multiplier = asset.multiplier10y;
        else {
            // Simple CAGR calculation for other years
            multiplier = Math.pow(1 + asset.cagr, years);
        }

        const finalValue = amount * multiplier;
        setResult(Math.floor(finalValue));
    };

    const formatMoney = (val: number) => {
        return new Intl.NumberFormat('ko-KR').format(val);
    };

    return (
        <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100 }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                maxWidth: '450px',
                width: '100%',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                margin: '20px'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{
                    padding: '1.5rem',
                    backgroundColor: '#1E293B',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Calculator size={24} className="text-red-400" />
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>FOMO 치료기</h2>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                    <div style={{ backgroundColor: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '0.5rem', padding: '1rem', marginBottom: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                        <AlertTriangle className="text-red-500" size={24} style={{ flexShrink: 0 }} />
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#991B1B', lineHeight: '1.4' }}>
                            주의: 이 계산 결과는 심각한 정신적 충격을 줄 수 있습니다. 재미로만 봐주세요.
                        </p>
                    </div>

                    <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>
                                만약 그 때...
                            </label>
                            <select
                                value={selectedAsset}
                                onChange={(e) => setSelectedAsset(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '0.5rem',
                                    border: '1px solid #E2E8F0',
                                    fontSize: '1rem',
                                    backgroundColor: '#F8FAFC'
                                }}
                            >
                                {ASSETS.map(a => (
                                    <option key={a.id} value={a.id}>{a.name}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>
                                    얼마나? (만원)
                                </label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1rem',
                                        backgroundColor: '#F8FAFC'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>
                                    언제?
                                </label>
                                <select
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        border: '1px solid #E2E8F0',
                                        fontSize: '1rem',
                                        backgroundColor: '#F8FAFC'
                                    }}
                                >
                                    <option value={1}>1년 전 샀다면</option>
                                    <option value={3}>3년 전 샀다면</option>
                                    <option value={5}>5년 전 샀다면</option>
                                    <option value={10}>10년 전 샀다면</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                backgroundColor: '#1E293B',
                                color: 'white',
                                border: 'none',
                                borderRadius: '0.75rem',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            계산하기 (두근두근)
                        </button>
                    </form>

                    {result !== null && (
                        <div style={{ marginTop: '2rem', textAlign: 'center', animation: 'fadeIn 0.5s ease-out' }}>
                            <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: '0.5rem' }}>
                                현재 자산 가치는...
                            </div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#DC2626', marginBottom: '0.5rem' }}>
                                {formatMoney(result)} 만원
                            </div>
                            <div style={{ fontSize: '0.9rem', color: '#EF4444', fontWeight: 600 }}>
                                (+{formatMoney(Math.floor((result - amount) / amount * 100))}%)
                            </div>
                            <p style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#334155', fontWeight: 500 }}>
                                "껄무새 노래 부를 시간에 지금이라도..."
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

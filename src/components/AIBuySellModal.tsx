import React, { useState } from 'react';
import { X, Lock, Unlock, AlertCircle, Target, Globe, Activity, BarChart, Scale, Users, TrendingUp, Layers } from 'lucide-react';


import { etfBuySellData } from '../data/reportData';

interface AIBuySellModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AIBuySellModal: React.FC<AIBuySellModalProps> = ({ isOpen, onClose }) => {
    const [pin, setPin] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handlePinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '7890') {
            setIsUnlocked(true);
            setError('');
        } else {
            setError('비밀번호가 올바르지 않습니다.');
            setPin('');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{
                    padding: '1.25rem',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: isUnlocked ? '#ECFDF5' : '#F8FAFC',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                            backgroundColor: isUnlocked ? '#059669' : '#64748B',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            color: 'white'
                        }}>
                            {isUnlocked ? <Unlock size={24} /> : <Lock size={24} />}
                        </div>
                        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#1E293B' }}>
                            AI 전략 매매 제안서 (Institutional)
                        </h3>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="ai-modal-content" style={{ backgroundColor: isUnlocked ? '#FFFFFF' : '#F8FAFC' }}>
                    {!isUnlocked ? (
                        <div className="lock-container">
                            <Lock className="lock-icon" />
                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B', fontWeight: 700 }}>VIP 투자 전략 잠금</h4>
                            <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '2rem', lineHeight: '1.6' }}>
                                기관 전용 알고리즘 분석 리포트입니다.<br />
                                인증된 PIN 코드를 입력하여 전체 데이터를 확인하세요.
                            </p>
                            <form onSubmit={handlePinSubmit} style={{ maxWidth: '280px', width: '100%', margin: '0 auto' }}>
                                <input
                                    type="password"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    placeholder="PIN Code"
                                    maxLength={4}
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        fontSize: '1.25rem',
                                        textAlign: 'center',
                                        border: '2px solid #E2E8F0',
                                        borderRadius: '0.75rem',
                                        marginBottom: '1rem',
                                        outline: 'none',
                                        letterSpacing: '0.5rem',
                                        transition: 'all 0.2s',
                                        backgroundColor: 'white'
                                    }}
                                />
                                {error && <p style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 500 }}>{error}</p>}
                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        backgroundColor: '#059669',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '0.75rem',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 6px -1px rgba(5, 150, 105, 0.2)'
                                    }}
                                >
                                    Access Report
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div style={{ color: '#334155' }}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'start',
                                marginBottom: '2rem',
                                padding: '1rem',
                                backgroundColor: '#F0FDF4',
                                border: '1px solid #BBF7D0',
                                borderRadius: '0.75rem',
                                color: '#166534',
                                fontSize: '0.9rem',
                                lineHeight: '1.6'
                            }}>
                                <AlertCircle size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>AI Model Insight</strong>
                                    <span style={{ wordBreak: 'keep-all' }}>
                                        본 리포트는 <strong>블룸버그 터미널</strong>의 컨센서스 데이터와 <strong>자체 퀀트 알고리즘</strong>을 결합하여 생성되었습니다.
                                        단순 주가 예측이 아닌, <strong>산업(Industry) - 기업(Company) - 수급(Flow)</strong>의 3차원 분석을 제공합니다.
                                    </span>
                                </div>
                            </div>



                            {etfBuySellData.map((item, idx) => (
                                <div key={idx} style={{
                                    marginBottom: '2rem',
                                    padding: '0',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '1rem',
                                    backgroundColor: 'white',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                                }}>
                                    {/* Item Header */}
                                    <div style={{
                                        padding: '1.25rem',
                                        borderBottom: '1px solid #F1F5F9',
                                        backgroundColor: '#F8FAFC',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                                <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#1E293B' }}>{item.name}</h4>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem', color: '#64748B' }}>
                                                <span style={{ fontFamily: 'monospace', backgroundColor: '#E2E8F0', padding: '0 4px', borderRadius: '4px' }}>{item.code}</span>
                                                <span style={{ color: '#CBD5E1' }}>|</span>
                                                <span style={{ color: '#2563EB', fontWeight: 700 }}>{item.rank}</span>
                                            </div>
                                        </div>
                                        <div style={{
                                            padding: '0.5rem 1rem',
                                            borderRadius: '1rem',
                                            backgroundColor: item.actionBg,
                                            color: item.actionColor,
                                            fontWeight: 900,
                                            fontSize: '0.9rem',
                                            letterSpacing: '0.05em',
                                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                                            border: `1px solid ${item.actionColor}20`
                                        }}>
                                            {item.action}
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                        {/* Holdings Info - Updated Section */}
                                        <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '0.75rem', border: '1px dashed #CBD5E1' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                                <Layers size={16} className="text-gray-500" />
                                                <strong style={{ fontSize: '0.9rem', color: '#475569' }}>편입 상위 종목 (Top Holdings)</strong>
                                            </div>
                                            <div className="ai-grid-3" style={{ gap: '0.5rem' }}>
                                                {item.holdings.map((h, hIdx) => (
                                                    <div key={hIdx} style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        padding: '0.5rem 0.5rem',
                                                        backgroundColor: 'white',
                                                        borderRadius: '0.25rem',
                                                        border: '1px solid #E2E8F0',
                                                        textAlign: 'center'
                                                    }}>
                                                        <span style={{ color: '#334155', fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{h.name}</span>
                                                        <span style={{ color: '#2563EB', fontWeight: 800, fontSize: '0.9rem' }}>{h.ratio}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* 1. Fundamental & Validation */}
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#0F172A' }}>
                                                <Globe size={20} className="text-blue-600" />
                                                <h5 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>1. 펀더멘털 & 밸류에이션 (Fundamental)</h5>
                                            </div>
                                            <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', lineHeight: '1.6', color: '#334155', wordBreak: 'keep-all' }}>
                                                {item.fundamental.thesis}
                                            </p>

                                            {/* Metrics Table */}
                                            <div className="ai-grid-3" style={{ marginBottom: '1rem', gap: '1px', backgroundColor: '#E2E8F0', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                                                {item.fundamental.metrics.map((m, i) => (
                                                    <div key={i} style={{ backgroundColor: 'white', padding: '0.75rem', textAlign: 'center' }}>
                                                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', marginBottom: '0.25rem' }}>{m.label}</span>
                                                        <span style={{ display: 'block', fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{m.value}</span>
                                                        <span style={{ display: 'block', fontSize: '0.75rem', color: '#059669', fontWeight: 600 }}>{m.judge}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Competitor & Flow */}
                                            <div className="ai-grid-2">
                                                <div style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '0.5rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                                                        <Scale size={16} className="text-gray-500" />
                                                        <strong style={{ fontSize: '0.85rem' }}>경쟁사 비교 ({item.competitor.name})</strong>
                                                    </div>
                                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: '1.4', wordBreak: 'keep-all' }}>{item.competitor.analysis}</p>
                                                </div>
                                                <div style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '0.5rem' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                                                        <Users size={16} className="text-gray-500" />
                                                        <strong style={{ fontSize: '0.85rem' }}>기관 수급 (Flow)</strong>
                                                    </div>
                                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: '1.4', wordBreak: 'keep-all' }}>{item.flow}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 2. Technical Analysis */}
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#0F172A' }}>
                                                <Activity size={20} className="text-purple-600" />
                                                <h5 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>2. 기술적 분석 (Technical Setup)</h5>
                                            </div>
                                            <div style={{ backgroundColor: '#FAF5FF', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #E9D5FF' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', borderBottom: '1px solid #E9D5FF', paddingBottom: '0.5rem' }}>
                                                    <span style={{ fontWeight: 600, color: '#6B21A8', fontSize: '0.9rem' }}>추세 (Trend)</span>
                                                    <span style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.9rem' }}>{item.technical.trend}</span>
                                                </div>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                    {item.technical.indicators.map((ind, i) => (
                                                        <span key={i} style={{ backgroundColor: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', color: '#4C1D95', border: '1px solid #F3E8FF' }}>
                                                            {ind}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3. Scenario Analysis */}
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#0F172A' }}>
                                                <BarChart size={20} className="text-indigo-600" />
                                                <h5 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>3. 시나리오별 대응 (Scenario Planning)</h5>
                                            </div>
                                            <div className="ai-grid-2">
                                                <div style={{ backgroundColor: '#F0FDF4', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #BBF7D0' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                            <TrendingUp size={16} className="text-green-600" />
                                                            <span style={{ fontWeight: 700, color: '#166534', fontSize: '0.85rem' }}>Bull Case ({item.scenarios.bull.percent})</span>
                                                        </div>
                                                        <span style={{ fontWeight: 800, color: '#166534', fontSize: '0.95rem' }}>{item.scenarios.bull.target}</span>
                                                    </div>
                                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#15803D', lineHeight: '1.4', wordBreak: 'keep-all' }}>{item.scenarios.bull.desc}</p>
                                                </div>
                                                <div style={{ backgroundColor: '#FEF2F2', padding: '1rem', borderRadius: '0.75rem', border: '1px solid #FECACA' }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                                        <span style={{ fontWeight: 700, color: '#991B1B', fontSize: '0.85rem' }}>Bear Case ({item.scenarios.bear.percent})</span>
                                                        <span style={{ fontWeight: 800, color: '#991B1B', fontSize: '0.95rem' }}>{item.scenarios.bear.target}</span>
                                                    </div>
                                                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#B91C1C', lineHeight: '1.4', wordBreak: 'keep-all' }}>{item.scenarios.bear.desc}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 4. Action Plan */}
                                        <div style={{
                                            background: 'linear-gradient(to right, #EFF6FF, #DBEAFE)',
                                            padding: '1.25rem',
                                            borderRadius: '1rem',
                                            marginTop: '0.5rem',
                                            border: '1px solid #BFDBFE'
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1E3A8A', fontSize: '1rem', fontWeight: 800, marginBottom: '1rem' }}>
                                                <Target size={24} />
                                                <span>AI Executable Strategy</span>
                                            </div>
                                            <div className="ai-grid-3">
                                                <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '0.75rem', borderRadius: '0.75rem', textAlign: 'center' }}>
                                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>ENTRY</span>
                                                    <span style={{ display: 'block', color: '#2563EB', fontWeight: 800, fontSize: '1rem', marginTop: '0.25rem' }}>{item.strategy.entry}</span>
                                                </div>
                                                <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '0.75rem', borderRadius: '0.75rem', textAlign: 'center', border: '2px solid #34D399' }}>
                                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#059669', fontWeight: 700, letterSpacing: '0.05em' }}>TARGET</span>
                                                    <span style={{ display: 'block', color: '#059669', fontWeight: 800, fontSize: '1rem', marginTop: '0.25rem' }}>{item.strategy.goal}</span>
                                                </div>
                                                <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '0.75rem', borderRadius: '0.75rem', textAlign: 'center' }}>
                                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', fontWeight: 700, letterSpacing: '0.05em' }}>CUT</span>
                                                    <span style={{ display: 'block', color: '#DC2626', fontWeight: 800, fontSize: '1rem', marginTop: '0.25rem' }}>{item.strategy.stop}</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div style={{
                    padding: '1rem',
                    borderTop: '1px solid #E2E8F0',
                    backgroundColor: '#F8FAFC',
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem',
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    color: '#94A3B8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    <Layers size={14} />
                    <span>문의 : 이희근 010-8949-0984</span>
                </div>
            </div>
        </div>
    );
};

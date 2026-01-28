import React, { useState } from 'react';
import { X, Bot, Lock, BarChart2, Globe, Activity, PieChart, ArrowUpRight, Gauge, Layers } from 'lucide-react';

interface AIAnalysisModalProps {
    isOpen: boolean;
    onClose: () => void;
}

import { marketAnalysisData } from '../data/reportData';

export const AIAnalysisModal: React.FC<AIAnalysisModalProps> = ({ isOpen, onClose }) => {
    // ... state ...
    const [pin, setPin] = useState('');
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handlePinSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '0001') {
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
                // ... styles
                backgroundColor: 'white',
                borderRadius: '1rem',
                maxWidth: '700px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header ... */}
                <div style={{
                    padding: '1.25rem',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: isUnlocked ? '#EFF6FF' : '#F8FAFC',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                            backgroundColor: isUnlocked ? '#3B82F6' : '#64748B',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            color: 'white'
                        }}>
                            {isUnlocked ? <Bot size={24} /> : <Lock size={24} />}
                        </div>
                        <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#1E293B' }}>
                            AI 일일 마켓 심층 리포트 (Pro)
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#64748B',
                            padding: '0.25rem'
                        }}
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="ai-modal-content" style={{ color: '#334155', lineHeight: '1.7', fontSize: '0.95rem' }}>
                    {!isUnlocked ? (
                        <div className="lock-container">
                            <Lock className="lock-icon" />
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#1E293B', fontWeight: 700 }}>VIP 접근 권한 필요</h4>
                            <p style={{ fontSize: '0.95rem', color: '#64748B', marginBottom: '2rem' }}>
                                기관 투자자용 심층 분석 리포트입니다.<br />보안 코드를 입력하여 잠금을 해제하십시오.
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
                                        fontFamily: 'monospace',
                                        backgroundColor: '#F8FAFC'
                                    }}
                                />
                                {error && <p style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 500 }}>{error}</p>}
                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        padding: '0.875rem',
                                        backgroundColor: '#1E293B',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '0.75rem',
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                >
                                    Unlock Report
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* Executive Summary */}
                            <div style={{ backgroundColor: '#F1F5F9', padding: '1.25rem', borderRadius: '1rem', borderLeft: '5px solid #0F172A' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: '#0F172A' }}>
                                    <Activity size={24} />
                                    <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>Executive Summary (핵심 요약)</h4>
                                </div>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155', lineHeight: '1.6', wordBreak: 'keep-all' }} dangerouslySetInnerHTML={{ __html: marketAnalysisData.executiveSummary }} />
                            </div>

                            {/* Section 1: Sentiment & Macro */}
                            <section>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.75rem', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <Gauge size={20} className="text-blue-600" />
                                    1. 시장 심리 및 매크로 (Sentiment & Macro)
                                </h4>
                                <div className="ai-grid-2">
                                    <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '0.75rem' }}>
                                        <strong style={{ display: 'block', color: '#0F172A', marginBottom: '0.5rem', fontSize: '0.9rem' }}>📊 Fear & Greed Index</strong>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#16A34A', marginBottom: '0.25rem' }}>{marketAnalysisData.sentimentMacro.fearGreedIndex.value} ({marketAnalysisData.sentimentMacro.fearGreedIndex.status})</div>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B', lineHeight: '1.4', wordBreak: 'keep-all' }}>
                                            {marketAnalysisData.sentimentMacro.fearGreedIndex.desc}
                                        </p>
                                    </div>
                                    <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '0.75rem' }}>
                                        <strong style={{ display: 'block', color: '#0F172A', marginBottom: '0.5rem', fontSize: '0.9rem' }}>📉 Put/Call Ratio</strong>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#2563EB', marginBottom: '0.25rem' }}>{marketAnalysisData.sentimentMacro.putCallRatio.value}</div>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748B', lineHeight: '1.4', wordBreak: 'keep-all' }}>
                                            {marketAnalysisData.sentimentMacro.putCallRatio.desc}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: Global Liquidity Flow */}
                            <section>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.75rem', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <Globe size={20} className="text-indigo-600" />
                                    2. 글로벌 자금 동향 (Liquidity Flow)
                                </h4>
                                <div style={{ backgroundColor: '#EEF2FF', padding: '1rem', borderRadius: '0.75rem' }}>
                                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                                        <li>
                                            <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Foreign Net Buying:</strong>
                                            <span dangerouslySetInnerHTML={{ __html: marketAnalysisData.globalLiquidity.foreignNetBuying.replace('반도체 비중리밸런싱', '<strong>반도체 비중리밸런싱</strong>') }} />
                                        </li>
                                        <li>
                                            <strong style={{ display: 'block', marginBottom: '0.2rem' }}>Sector Rotation:</strong>
                                            <span dangerouslySetInnerHTML={{ __html: marketAnalysisData.globalLiquidity.sectorRotation.replace('우주항공/방산(Space/Defense)', '<strong>우주항공/방산(Space/Defense)</strong>') }} />
                                        </li>
                                        <li>
                                            <strong style={{ display: 'block', marginBottom: '0.2rem' }}>USD/KRW:</strong>
                                            {marketAnalysisData.globalLiquidity.usdKrw}
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3: Sector Analysis */}
                            <section>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.75rem', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <PieChart size={20} className="text-emerald-600" />
                                    3. 주도 섹터 정밀 분석 (Leading Sectors)
                                </h4>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {/* Space */}
                                    <div style={{ padding: '1rem', border: '1px solid #E2E8F0', borderRadius: '0.75rem' }}>
                                        <h5 style={{ margin: '0 0 0.5rem', fontWeight: 700, color: '#1E293B', fontSize: '1rem' }}>{marketAnalysisData.sectorAnalysis.space.title}</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.75rem', lineHeight: '1.5', wordBreak: 'keep-all' }} dangerouslySetInnerHTML={{ __html: marketAnalysisData.sectorAnalysis.space.desc.replace('실적(Earnings)', '<strong>실적(Earnings)</strong>').replace('저궤도 위성 통신 시장의 개화', '<strong>저궤도 위성 통신 시장의 개화</strong>') }} />
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            <span style={{ backgroundColor: '#DC2626', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{marketAnalysisData.sectorAnalysis.space.action}</span>
                                            <span style={{ backgroundColor: '#F1F5F9', color: '#475569', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Top Pick: {marketAnalysisData.sectorAnalysis.space.topPick}</span>
                                        </div>
                                    </div>

                                    {/* Semi */}
                                    <div style={{ padding: '1rem', border: '1px solid #E2E8F0', borderRadius: '0.75rem' }}>
                                        <h5 style={{ margin: '0 0 0.5rem', fontWeight: 700, color: '#1E293B', fontSize: '1rem' }}>{marketAnalysisData.sectorAnalysis.semi.title}</h5>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.75rem', lineHeight: '1.5', wordBreak: 'keep-all' }} dangerouslySetInnerHTML={{ __html: marketAnalysisData.sectorAnalysis.semi.desc.replace('IP/팹리스/디자인하우스', '<strong>IP/팹리스/디자인하우스</strong>') }} />
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            <span style={{ backgroundColor: '#DC2626', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>{marketAnalysisData.sectorAnalysis.semi.action}</span>
                                            <span style={{ backgroundColor: '#F1F5F9', color: '#475569', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>Top Pick: {marketAnalysisData.sectorAnalysis.semi.topPick}</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Quant Signals */}
                            <section>
                                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.75rem', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                                    <BarChart2 size={20} className="text-purple-600" />
                                    4. 퀀트 시그널 (Quantitative Signals)
                                </h4>
                                <div className="ai-grid-3">
                                    <div style={{ backgroundColor: '#FAF5FF', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center' }}>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#6B21A8' }}>Momentum</span>
                                        <strong style={{ fontSize: '1.1rem', color: '#581C87' }}>{marketAnalysisData.quantSignals.momentum}</strong>
                                    </div>
                                    <div style={{ backgroundColor: '#FAF5FF', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center' }}>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#6B21A8' }}>Volatility</span>
                                        <strong style={{ fontSize: '1.1rem', color: '#581C87' }}>{marketAnalysisData.quantSignals.volatility}</strong>
                                    </div>
                                    <div style={{ backgroundColor: '#FAF5FF', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center' }}>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#6B21A8' }}>Volume</span>
                                        <strong style={{ fontSize: '1.1rem', color: '#581C87' }}>{marketAnalysisData.quantSignals.volume}</strong>
                                    </div>
                                </div>
                            </section>

                            {/* Final Verdict */}
                            <div style={{ marginTop: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#1E293B' }}>
                                    <ArrowUpRight size={20} />
                                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 800 }}>Final Verdict (최종 투자 의견)</h4>
                                </div>
                                <div style={{ backgroundColor: '#1E293B', color: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{ backgroundColor: '#DC2626', width: '12px', height: '12px', borderRadius: '50%' }}></div>
                                        <strong style={{ fontSize: '1.1rem' }}>{marketAnalysisData.finalVerdict.status}</strong>
                                    </div>
                                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.6', color: '#CBD5E1', wordBreak: 'keep-all' }} dangerouslySetInnerHTML={{ __html: marketAnalysisData.finalVerdict.desc.replace('적극 매수', '<strong>적극 매수</strong>') }} />
                                </div>
                            </div>

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

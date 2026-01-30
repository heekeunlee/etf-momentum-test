import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

interface FortuneModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FORTUNES = [
    "상승장이 당신을 기다립니다! 과감한 롱 포지션이 유리할 수 있습니다.",
    "오늘은 관망이 최선입니다. 현금을 확보하고 다음 기회를 노리세요.",
    "예상치 못한 배당금이 들어올 수 있는 날입니다. 계좌를 확인해보세요!",
    "주변의 소문에 휘둘리지 마세요. 당신의 분석이 정답입니다.",
    "작은 수익에 만족하세요. 욕심 부리다 원금을 까먹을 수 있습니다.",
    "대박의 기운이 느껴집니다! 평소 눈여겨보던 종목을 매수해보세요.",
    "하락세가 깊어질 수 있습니다. 손절 라인을 철저히 지키세요.",
    "장기 투자의 관점에서 포트폴리오를 재점검하기 좋은 날입니다.",
    "해외 주식 쪽에 좋은 기운이 있습니다. 미국 장을 주목하세요.",
    "뜻밖의 횡재수가 있습니다. 공모주 청약이나 로또를 노려보세요!"
];

const LUCKY_COLORS = [
    { name: "빨강 (Red)", code: "#EF4444" },
    { name: "파랑 (Blue)", code: "#3B82F6" },
    { name: "노랑 (Yellow)", code: "#EAB308" },
    { name: "초록 (Green)", code: "#22C55E" },
    { name: "보라 (Purple)", code: "#A855F7" },
    { name: "황금 (Gold)", code: "#FFD700" },
    { name: "은색 (Silver)", code: "#94A3B8" },
    { name: "검정 (Black)", code: "#171717" },
];

const LUCKY_SECTORS = [
    "반도체 (Semiconductors)",
    "2차전지 (Batteries)",
    "헬스케어 (Healthcare)",
    "금융 (Financials)",
    "빅테크 (Big Tech)",
    "소비재 (Consumer Goods)",
    "에너지 (Energy)",
    "방산 (Defense)",
    "로봇/AI (Robotics/AI)",
    "우주항공 (Space)"
];

export const FortuneModal: React.FC<FortuneModalProps> = ({ isOpen, onClose }) => {
    const [fortune, setFortune] = useState('');
    const [color, setColor] = useState({ name: '', code: '' });
    const [sector, setSector] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsFlipped(false);
            // Randomly select fortune data
            setFortune(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]);
            setColor(LUCKY_COLORS[Math.floor(Math.random() * LUCKY_COLORS.length)]);
            setSector(LUCKY_SECTORS[Math.floor(Math.random() * LUCKY_SECTORS.length)]);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleCardClick = () => {
        setIsFlipped(true);
    };

    return (
        <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100 }}>
            <div style={{
                width: 'min(400px, 90vw)',
                height: 'min(600px, 75vh)', // Explicit height that responds to viewport
                perspective: '1000px',
                margin: 'auto', // Center in flex container if needed, though usually handled by overlay
                position: 'relative'
            }} onClick={e => e.stopPropagation()}>

                <div
                    onClick={!isFlipped ? handleCardClick : undefined}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        transition: 'transform 0.8s',
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        cursor: !isFlipped ? 'pointer' : 'default'
                    }}
                >
                    {/* Front of Card */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        borderRadius: '1.5rem',
                        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        border: '4px solid #FCD34D'
                    }}>
                        <Sparkles size={64} color="#FCD34D" style={{ marginBottom: '1.5rem', animation: 'pulse 2s infinite' }} />
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FCD34D', marginBottom: '1rem' }}>오늘의 투자 운세</h2>
                        <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>카드를 클릭해서 확인해보세요!</p>
                        <div style={{ marginTop: '2rem', fontSize: '3rem' }}>🔮</div>
                    </div>

                    {/* Back of Card */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        borderRadius: '1.5rem',
                        backgroundColor: 'white',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center', // Center content vertically
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        overflowY: 'auto' // Allow internal scrolling if content is too long
                    }}>
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '0.75rem',
                                right: '0.75rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#94A3B8'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ textAlign: 'center', width: '100%' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E293B', marginBottom: '1.5rem', borderBottom: '2px solid #F1F5F9', paddingBottom: '1rem' }}>
                                운세 결과
                            </h3>

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#334155', fontWeight: 600, wordBreak: 'keep-all' }}>
                                    "{fortune}"
                                </p>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '1rem' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '0.5rem' }}>행운의 색상</div>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: color.code,
                                        margin: '0 auto 0.5rem',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}></div>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1E293B' }}>{color.name}</div>
                                </div>
                                <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: '1rem' }}>
                                    <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '0.5rem' }}>행운의 섹터</div>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>🚀</div>
                                    <div style={{ fontWeight: 700, fontSize: '0.8rem', color: '#1E293B', wordBreak: 'keep-all' }}>{sector}</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: '#1E293B',
                                color: 'white',
                                border: 'none',
                                borderRadius: '0.75rem',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                            }}
                        >
                            확인 완료
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.7; transform: scale(0.95); }
                }
            `}</style>
        </div>
    );
};

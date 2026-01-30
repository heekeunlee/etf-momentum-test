import React, { useCallback, useState } from 'react';
import confetti from 'canvas-confetti';
import { TrendingUp, Bot, Lock, BookOpen, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AIAnalysisModal } from './AIAnalysisModal';
import { AIBuySellModal } from './AIBuySellModal';
import { AITerminologyModal } from './AITerminologyModal';
import { AIQuizModal } from './AIQuizModal';
import { FortuneModal } from './FortuneModal';
import { BalanceGameModal } from './BalanceGameModal';
import { FomoCalculatorModal } from './FomoCalculatorModal';

export const Header: React.FC = () => {
    const [isAIModalOpen, setIsAIModalOpen] = useState(false);
    const [isBuySellModalOpen, setIsBuySellModalOpen] = useState(false);
    const [isTerminologyModalOpen, setIsTerminologyModalOpen] = useState(false);
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    const [isFortuneModalOpen, setIsFortuneModalOpen] = useState(false);
    const [isBalanceGameModalOpen, setIsBalanceGameModalOpen] = useState(false);
    const [isFomoModalOpen, setIsFomoModalOpen] = useState(false);

    const handleConfetti = useCallback(() => {
        const scalar = 2;
        const moneyBag = confetti.shapeFromText({ text: '💰', scalar });

        const defaults = {
            spread: 360,
            ticks: 60,
            gravity: 0,
            decay: 0.96,
            startVelocity: 20,
            shapes: [moneyBag],
            scalar
        };

        const shoot = () => {
            confetti({
                ...defaults,
                particleCount: 30,
            });

            confetti({
                ...defaults,
                particleCount: 5,
                flat: true
            });

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FFD700', '#FFA500', '#DAA520'] // Gold colors
            });
        };

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    }, []);

    return (
        <header className="bg-white shadow-sm" style={{ borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '0.75rem', fontSize: '0.75rem', color: '#475569', borderBottom: '1px solid #E2E8F0', lineHeight: '1.6', textAlign: 'left' }}>
                <p style={{ marginBottom: '0.25rem' }}>[공지사항]</p>
                <div style={{ wordBreak: 'keep-all', marginBottom: '0.5rem' }}>
                    1. 본 url을 임의로 다른사람에게 배포하지 마세요 (문제시 사이트 폐쇄)<br />
                    2. 상승주도 랭킹을 참고하여 투자하되, 투자의 책임은 본인에게 있음.<br />
                    3. 화면의 복주머니를 클릭해보세요!
                </div>

                <div className="header-button-grid">
                    <button
                        onClick={() => setIsAIModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#EFF6FF',
                            border: '1px solid #BFDBFE',
                            borderRadius: '0.25rem',
                            color: '#2563EB',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <Bot size={12} />
                        AI 일일 마켓분석
                    </button>

                    <button
                        onClick={() => setIsBuySellModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#EFF6FF',
                            border: '1px solid #BFDBFE',
                            borderRadius: '0.25rem',
                            color: '#2563EB',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <Lock size={12} />
                        AI 매수/매도 제안
                    </button>

                    <button
                        onClick={() => setIsTerminologyModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#EFF6FF',
                            border: '1px solid #BFDBFE',
                            borderRadius: '0.25rem',
                            color: '#2563EB',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <BookOpen size={12} />
                        용어 가이드
                    </button>

                    <button
                        onClick={() => setIsQuizModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#EFF6FF',
                            border: '1px solid #BFDBFE',
                            borderRadius: '0.25rem',
                            color: '#2563EB',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <BrainCircuit size={12} />
                        경제 퀴즈
                    </button>

                    <button
                        onClick={() => setIsFortuneModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#FEF9C3', // Light Yellow
                            border: '1px solid #FDE047',
                            borderRadius: '0.25rem',
                            color: '#854D0E', // Dark Yellow/Brown
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <span>💰</span>
                        오늘의 투자운세
                    </button>

                    <button
                        onClick={() => setIsBalanceGameModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#F3E8FF', // Light Purple
                            border: '1px solid #D8B4FE',
                            borderRadius: '0.25rem',
                            color: '#6B21A8',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <span>⚖️</span>
                        투자 밸런스 게임
                    </button>

                    <button
                        onClick={() => setIsFomoModalOpen(true)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: '#FEE2E2', // Light Red
                            border: '1px solid #FCA5A5',
                            borderRadius: '0.25rem',
                            color: '#991B1B',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}
                    >
                        <span>💊</span>
                        FOMO 치료기
                    </button>
                </div>
            </div>

            <AIAnalysisModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
            <AIBuySellModal isOpen={isBuySellModalOpen} onClose={() => setIsBuySellModalOpen(false)} />
            <AITerminologyModal isOpen={isTerminologyModalOpen} onClose={() => setIsTerminologyModalOpen(false)} />
            <AIQuizModal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} />
            <FortuneModal isOpen={isFortuneModalOpen} onClose={() => setIsFortuneModalOpen(false)} />
            <BalanceGameModal isOpen={isBalanceGameModalOpen} onClose={() => setIsBalanceGameModalOpen(false)} />
            <FomoCalculatorModal isOpen={isFomoModalOpen} onClose={() => setIsFomoModalOpen(false)} />

            <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{ backgroundColor: 'var(--color-primary)', padding: '0.5rem', borderRadius: '0.5rem', color: 'white', display: 'flex' }}>
                        <TrendingUp size={28} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', lineHeight: 1.1, color: 'var(--color-text)' }}>ETF 반찬가게</span>
                            <span
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleConfetti();
                                }}
                                style={{ fontSize: '3rem', cursor: 'pointer', userSelect: 'none' }}
                                role="button"
                                aria-label="Explode money"
                            >
                                💰
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

        </header>
    );
};

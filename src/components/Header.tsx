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
import { EtfQuantGuideModal } from './EtfQuantGuideModal';

export const Header: React.FC = () => {
    const [isAIModalOpen, setIsAIModalOpen] = useState(false);
    const [isBuySellModalOpen, setIsBuySellModalOpen] = useState(false);
    const [isTerminologyModalOpen, setIsTerminologyModalOpen] = useState(false);
    const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
    const [isFortuneModalOpen, setIsFortuneModalOpen] = useState(false);
    const [isBalanceGameModalOpen, setIsBalanceGameModalOpen] = useState(false);
    const [isFomoModalOpen, setIsFomoModalOpen] = useState(false);
    const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);


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
                    일주일간 ETF 반찬가게 쉽니다 (~2/13)
                </div>

                <div className="relative">
                    <div className="header-button-grid flex flex-wrap justify-center gap-1.5 md:flex-nowrap md:overflow-hidden md:gap-2">
                        <button
                            onClick={() => setIsAIModalOpen(true)}
                            className="bg-blue-50 text-blue-600 border border-blue-100 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <Bot size={12} />
                            AI 마켓분석
                        </button>

                        <button
                            onClick={() => setIsBuySellModalOpen(true)}
                            className="bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <Lock size={12} />
                            AI 매수매도 제안
                        </button>

                        <button
                            onClick={() => setIsGuideModalOpen(true)}
                            className="relative bg-teal-50 text-teal-700 border border-teal-100 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <BookOpen size={12} />
                            ETF 퀀트 투자란?
                            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="absolute -top-2.5 -right-4 text-[0.5rem] font-black text-blue-600 animate-bounce">New</span>
                        </button>

                        <button
                            onClick={() => setIsTerminologyModalOpen(true)}
                            className="bg-green-50 text-green-600 border border-green-100 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <BookOpen size={12} />
                            용어 가이드
                        </button>

                        <button
                            onClick={() => setIsQuizModalOpen(true)}
                            className="bg-violet-50 text-violet-600 border border-violet-100 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <BrainCircuit size={12} />
                            경제 퀴즈
                        </button>

                        <button
                            onClick={() => setIsFortuneModalOpen(true)}
                            className="bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <span>💰</span>
                            오늘의 운세
                        </button>

                        <button
                            onClick={() => setIsBalanceGameModalOpen(true)}
                            className="bg-purple-50 text-purple-600 border border-purple-100 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <span>⚖️</span>
                            밸런스 게임
                        </button>

                        <button
                            onClick={() => setIsFomoModalOpen(true)}
                            className="bg-red-50 text-red-600 border border-red-100 rounded-full px-2 py-1 text-[10px] font-bold flex items-center gap-1 whitespace-nowrap"
                        >
                            <span>💊</span>
                            FOMO 치료기
                        </button>
                    </div>
                </div>
            </div>

            <AIAnalysisModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
            <AIBuySellModal isOpen={isBuySellModalOpen} onClose={() => setIsBuySellModalOpen(false)} />
            <AITerminologyModal isOpen={isTerminologyModalOpen} onClose={() => setIsTerminologyModalOpen(false)} />
            <AIQuizModal isOpen={isQuizModalOpen} onClose={() => setIsQuizModalOpen(false)} />
            <FortuneModal isOpen={isFortuneModalOpen} onClose={() => setIsFortuneModalOpen(false)} />
            <BalanceGameModal isOpen={isBalanceGameModalOpen} onClose={() => setIsBalanceGameModalOpen(false)} />
            <FomoCalculatorModal isOpen={isFomoModalOpen} onClose={() => setIsFomoModalOpen(false)} />
            <EtfQuantGuideModal isOpen={isGuideModalOpen} onClose={() => setIsGuideModalOpen(false)} />


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

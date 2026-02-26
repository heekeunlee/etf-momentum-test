import React, { useCallback } from 'react';
import confetti from 'canvas-confetti';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {


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
                    1. 쓸데없는 메뉴들 다 지우고 모멘텀 랭킹 만으로 리빌딩 해봄.<br />
                    2. 투자의 책임은 투자자 본인에게 있음.
                </div>

            </div>

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

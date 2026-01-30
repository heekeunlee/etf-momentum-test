import React, { useState, useEffect } from 'react';
import { X, Scale, RefreshCw } from 'lucide-react';

interface BalanceGameModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Question Bank
const QUESTION_BANK = [
    { id: 1, question: "10년 뒤 당신의 자산은?", optionA: "비트코인 10개", optionB: "강남 아파트 1채 (30평)", statsA: 45, statsB: 55, typeA: 'risk', typeB: 'safe' },
    { id: 2, question: "더 고통스러운 상황은?", optionA: "내가 판 주식 상한가 가기", optionB: "내가 산 주식 하한가 가기", statsA: 70, statsB: 30, typeA: 'fomo', typeB: 'loss' },
    { id: 3, question: "평생 한 종목만 보유해야 한다면?", optionA: "테슬라 (Tesla)", optionB: "엔비디아 (Nvidia)", statsA: 52, statsB: 48, typeA: 'growth', typeB: 'growth' },
    { id: 4, question: "주식 고수에게 배우고 싶은 비기?", optionA: "절대 잃지 않는 매매법", optionB: "100배 수익 종목 발굴법", statsA: 35, statsB: 65, typeA: 'safe', typeB: 'risk' },
    { id: 5, question: "10억이 생긴다면?", optionA: "지금 당장 은퇴하고 전업 투자", optionB: "회사 다니며 안전하게 배당 투자", statsA: 55, statsB: 45, typeA: 'freedom', typeB: 'stable' },
    { id: 6, question: "수익률 -50% 계좌, 당신의 선택은?", optionA: "눈물의 손절 후 재출발", optionB: "자식에게 물려준다 (존버)", statsA: 40, statsB: 60, typeA: 'active', typeB: 'passive' },
    { id: 7, question: "타임머신을 타고 간다면?", optionA: "2010년 비트코인 매수", optionB: "1990년 강남 땅 매수", statsA: 65, statsB: 35, typeA: 'crypto', typeB: 'realestate' },
    { id: 8, question: "투자 정보를 얻는 곳은?", optionA: "유튜브/텔레그램 주식방", optionB: "기업 공시/재무제표 분석", statsA: 80, statsB: 20, typeA: 'noise', typeB: 'fm' },
    { id: 9, question: "주가가 폭락할 때 내 심정은?", optionA: "공포에 질려 패닉 셀", optionB: "세일 기간이다! 줍줍", statsA: 25, statsB: 75, typeA: 'fear', typeB: 'greed' },
    { id: 10, question: "친구에게 돈을 빌려준다면?", optionA: "절대 불가", optionB: "이자 받고 빌려줌", statsA: 60, statsB: 40, typeA: 'strict', typeB: 'biz' },
    { id: 11, question: "연봉 1억 (워라밸 꽝) vs 연봉 4천 (워라밸 최상)", optionA: "연봉 1억", optionB: "연봉 4천", statsA: 70, statsB: 30, typeA: 'money', typeB: 'life' },
    { id: 12, question: "로또 1등 (20억) 당첨 시?", optionA: "비밀로 하고 계속 회사 다님", optionB: "사장님 책상에 사직서 투척", statsA: 55, statsB: 45, typeA: 'secret', typeB: 'flex' },
    { id: 13, question: "내 자산이 2배가 되려면?", optionA: "안전하게 10년 저축", optionB: "화끈하게 1년 코인 투자", statsA: 30, statsB: 70, typeA: 'safe', typeB: 'risk' },
    { id: 14, question: "상사에게 깨진 날, 스트레스 해소법?", optionA: "매운 떡볶이 먹기", optionB: "주식 창 보며 힐링 (or 더 스트레스)", statsA: 50, statsB: 50, typeA: 'food', typeB: 'stock' },
    { id: 15, question: "100만원으로 할 수 있는 최고의 사치는?", optionA: "오마카세/호캉스", optionB: "애플 주식 4주 추가 매수", statsA: 40, statsB: 60, typeA: 'yolo', typeB: 'invest' },
    { id: 16, question: "내가 생각하는 경제적 자유 기준은?", optionA: "자산 10억", optionB: "자산 50억", statsA: 20, statsB: 80, typeA: 'modest', typeB: 'ambitious' },
    { id: 17, question: "워렌 버핏과 점심 식사 vs 일론 머스크와 점심 식사", optionA: "워렌 버핏", optionB: "일론 머스크", statsA: 45, statsB: 55, typeA: 'value', typeB: 'growth' },
    { id: 18, question: "과거로 돌아가 하나만 바꿀 수 있다면?", optionA: "첫사랑과 결혼", optionB: "삼성전자 주식 매수", statsA: 10, statsB: 90, typeA: 'love', typeB: 'money' },
    { id: 19, question: "급등주 탑승했다가 물렸을 때", optionA: "구조대 올 때까지 물타기", optionB: "수업료 냈다 셈치고 손절", statsA: 65, statsB: 35, typeA: 'prayer', typeB: 'rational' },
    { id: 20, question: "내 투자 성향을 한 단어로?", optionA: "야수의 심장", optionB: "쫄보의 간", statsA: 50, statsB: 50, typeA: 'beast', typeB: 'chicken' }
];

const RESULTS = [
    {
        title: "💎 전설의 다이아몬드 핸드",
        desc: "당신은 흔들리지 않는 멘탈의 소유자! 하락장에도 끄떡없는 강철 심장을 가졌군요. 장기 투자로 큰 부를 이룰 상입니다.",
        emoji: "🧘‍♂️"
    },
    {
        title: "🚀 야수의 심장 그 자체",
        desc: "인생은 한방! 하이 리스크 하이 리턴을 즐기는 당신. 도파민 중독일 수도 있지만, 터지면 크게 터질 스타일입니다.",
        emoji: "🦁"
    },
    {
        title: "🐢 꾸준함의 대명사 배당 거북이",
        desc: "복리의 마법을 믿는 당신. 느리지만 확실하게 부자의 길로 가고 있군요. 마음 편한 투자가 최고죠!",
        emoji: "🏯"
    },
    {
        title: "🧠 차가운 이성의 분석가",
        desc: "감정에 휘둘리지 않고 철저한 분석으로 승부하는 스타일. 시장을 이기는 스마트한 개미가 될 자질이 충분합니다.",
        emoji: "📊"
    },
    {
        title: "💸 행복한욜로 투자자",
        desc: "투자는 거들 뿐, 현재의 행복이 가장 중요해! 수익금은 바로바로 써야 제맛이죠.",
        emoji: "🎉"
    }
];

export const BalanceGameModal: React.FC<BalanceGameModalProps> = ({ isOpen, onClose }) => {
    const [gameQuestions, setGameQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);
    const [resultType, setResultType] = useState<any>(null);

    // Initializer
    useEffect(() => {
        if (isOpen) {
            startNewGame();
        }
    }, [isOpen]);

    const startNewGame = () => {
        // Shuffle and pick 5
        const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
        setGameQuestions(shuffled.slice(0, 5));
        setCurrentIndex(0);
        setSelectedOption(null);
        setShowResults(false);
        setGameEnded(false);
        setResultType(null);
    };

    if (!isOpen) return null;

    const handleVote = (option: 'A' | 'B') => {
        if (selectedOption) return;
        setSelectedOption(option);
        setTimeout(() => setShowResults(true), 500);
    };

    const handleNext = () => {
        if (currentIndex < 4) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setShowResults(false);
        } else {
            // Game Over -> Show Result
            finishGame();
        }
    };

    const finishGame = () => {
        setGameEnded(true);
        // Random result for fun (or could be based on previous choices logic)
        const randomResult = RESULTS[Math.floor(Math.random() * RESULTS.length)];
        setResultType(randomResult);
    };

    const question = gameQuestions[currentIndex];

    // -- Result Screen --
    if (gameEnded && resultType) {
        return (
            <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100 }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '1.5rem',
                    maxWidth: '450px',
                    width: '100%',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    margin: '20px',
                    textAlign: 'center',
                    animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }} onClick={e => e.stopPropagation()}>
                    <div style={{ padding: '2.5rem 2rem' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{resultType.emoji}</div>
                        <h2 style={{ fontSize: '1.1rem', color: '#64748B', marginBottom: '0.5rem' }}>당신의 투자 성향은...</h2>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1E293B', marginBottom: '1.5rem', wordBreak: 'keep-all' }}>
                            {resultType.title}
                        </h1>
                        <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.6', marginBottom: '2rem', wordBreak: 'keep-all' }}>
                            {resultType.desc}
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button
                                onClick={startNewGame}
                                style={{
                                    flex: 1,
                                    padding: '1rem',
                                    backgroundColor: '#F1F5F9',
                                    color: '#334155',
                                    border: 'none',
                                    borderRadius: '0.75rem',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <RefreshCw size={18} /> 한 번 더?
                            </button>
                            <button
                                onClick={onClose}
                                style={{
                                    flex: 1,
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
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
                <style>{`
                    @keyframes popIn {
                        from { opacity: 0; transform: scale(0.9) translateY(20px); }
                        to { opacity: 1; transform: scale(1) translateY(0); }
                    }
                `}</style>
            </div>
        );
    }

    // -- Loading State --
    if (!question) return null;

    // -- Game Screen --
    return (
        <div className="modal-overlay" onClick={onClose} style={{ zIndex: 100 }}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                maxWidth: '500px',
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
                        <Scale size={24} className="text-yellow-400" />
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
                            투자 밸런스 게임 <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 400, marginLeft: '0.5rem' }}>({currentIndex + 1}/5)</span>
                        </h2>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                    <h3 style={{
                        textAlign: 'center',
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        marginBottom: '2rem',
                        color: '#1E293B',
                        wordBreak: 'keep-all',
                        minHeight: '3.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        Q. {question.question}
                    </h3>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {/* Option A */}
                        <button
                            onClick={() => handleVote('A')}
                            style={{
                                position: 'relative',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                border: `2px solid ${selectedOption === 'A' ? '#EF4444' : '#E2E8F0'}`,
                                backgroundColor: selectedOption === 'A' ? '#FEF2F2' : 'white',
                                cursor: selectedOption ? 'default' : 'pointer',
                                transition: 'all 0.3s',
                                textAlign: 'left',
                                overflow: 'hidden'
                            }}
                        >
                            <span style={{
                                display: 'block',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: selectedOption === 'A' ? '#EF4444' : '#334155',
                                marginBottom: showResults ? '0.5rem' : 0,
                                zIndex: 1,
                                position: 'relative'
                            }}>
                                🅰️ {question.optionA}
                            </span>

                            {showResults && (
                                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{
                                        height: '8px',
                                        backgroundColor: '#E2E8F0',
                                        borderRadius: '4px',
                                        flex: 1,
                                        marginRight: '1rem',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${question.statsA}%`,
                                            height: '100%',
                                            backgroundColor: '#EF4444',
                                            transition: 'width 1s ease-out'
                                        }}></div>
                                    </div>
                                    <span style={{ fontWeight: 800, color: '#EF4444' }}>{question.statsA}%</span>
                                </div>
                            )}
                        </button>

                        {/* Option B */}
                        <button
                            onClick={() => handleVote('B')}
                            style={{
                                position: 'relative',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                border: `2px solid ${selectedOption === 'B' ? '#3B82F6' : '#E2E8F0'}`,
                                backgroundColor: selectedOption === 'B' ? '#EFF6FF' : 'white',
                                cursor: selectedOption ? 'default' : 'pointer',
                                transition: 'all 0.3s',
                                textAlign: 'left',
                                overflow: 'hidden'
                            }}
                        >
                            <span style={{
                                display: 'block',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                color: selectedOption === 'B' ? '#3B82F6' : '#334155',
                                marginBottom: showResults ? '0.5rem' : 0,
                                zIndex: 1,
                                position: 'relative'
                            }}>
                                🅱️ {question.optionB}
                            </span>

                            {showResults && (
                                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{
                                        height: '8px',
                                        backgroundColor: '#E2E8F0',
                                        borderRadius: '4px',
                                        flex: 1,
                                        marginRight: '1rem',
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: `${question.statsB}%`,
                                            height: '100%',
                                            backgroundColor: '#3B82F6',
                                            transition: 'width 1s ease-out'
                                        }}></div>
                                    </div>
                                    <span style={{ fontWeight: 800, color: '#3B82F6' }}>{question.statsB}%</span>
                                </div>
                            )}
                        </button>
                    </div>

                    {showResults && (
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <button
                                onClick={handleNext}
                                style={{
                                    padding: '0.75rem 2rem',
                                    backgroundColor: '#1E293B',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                {currentIndex < 4 ? '다음 문제 풀기 👉' : '결과 확인하기 🎉'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

import React, { useState, useEffect } from 'react';
import { X, Trophy, RefreshCw, BrainCircuit } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AIQuizModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    answerDesc: string;
}

const QUESTION_BANK: Question[] = [
    {
        id: 1,
        question: "주식처럼 거래소에서 실시간으로 거래되는 펀드로, 여러 종목에 분산 투자하는 효과가 있는 상품은?",
        options: ["ETF (상장지수펀드)", "예금", "채권", "적금"],
        correctAnswer: 0,
        answerDesc: "ETF(Exchange Traded Fund)는 인덱스 펀드를 거래소에 상장시켜 주식처럼 거래할 수 있게 만든 상품입니다."
    },
    {
        id: 2,
        question: "주관적 판단을 배제하고 수학적 통계 모델을 기반으로 투자 대상을 선정하는 분석 기법은?",
        options: ["가치 투자", "퀀트 (Quant)", "차트 매매", "정보 매매"],
        correctAnswer: 1,
        answerDesc: "퀀트(Quant)는 Quantitative(계량적)의 약어로, 수치와 모델에 기반한 투자를 의미합니다."
    },
    {
        id: 3,
        question: "주가가 상승세를 탔을 때 그 관성으로 인해 계속 오르려는 성질을 이용한 투자 전략은?",
        options: ["역발상 투자", "가치 투자", "모멘텀 (Momentum)", "배당 투자"],
        correctAnswer: 2,
        answerDesc: "모멘텀(Momentum)은 주가의 추세나 탄력을 의미하며, '달리는 말에 올라타라'는 격언과 통합니다."
    },
    {
        id: 4,
        question: "연초(1월 1일)부터 현재까지의 누적 수익률을 나타내는 용어는?",
        options: ["MoM", "YoY", "YTD (Year To Date)", "QoQ"],
        correctAnswer: 2,
        answerDesc: "YTD는 Year To Date의 약자로, 올해 들어 현재까지의 수익률을 의미합니다."
    },
    {
        id: 5,
        question: "투자 기간 중 고점 대비 가장 많이 하락한 비율(최대 낙폭)을 뜻하는 리스크 지표는?",
        options: ["ROI", "ROE", "MDD", "EPS"],
        correctAnswer: 2,
        answerDesc: "MDD(Maximum Drawdown)는 '최대 낙폭'으로, 투자자가 겪을 수 있는 최대 손실폭을 의미합니다."
    },
    {
        id: 6,
        question: "현재 주가를 주당순이익(EPS)으로 나눈 값으로, 기업의 저평가 여부를 판단하는 대표적인 지표는?",
        options: ["PER (P/E Ratio)", "PBR", "ROE", "EV/EBITDA"],
        correctAnswer: 0,
        answerDesc: "PER(Price-to-Earnings Ratio)은 주가수익비율로, 주가가 이익 대비 얼마나 비싼지 나타냅니다."
    },
    {
        id: 7,
        question: "기업이 주주들의 자본을 활용해 1년간 얼마의 이익을 냈는지 보여주는 수익성 지표는?",
        options: ["ROA", "ROE", "ROI", "PER"],
        correctAnswer: 1,
        answerDesc: "ROE(Return On Equity)는 자기자본이익률로, 워렌 버핏이 중요하게 보는 지표입니다."
    },
    {
        id: 8,
        question: "증권사 애널리스트들의 실적 전망치 평균을 무엇이라 하는가?",
        options: ["가이던스", "컨센서스 (Consensus)", "피벗", "센티먼트"],
        correctAnswer: 1,
        answerDesc: "컨센서스(Market Consensus)는 시장의 합의된 예측치(평균 전망치)를 의미합니다."
    },
    {
        id: 9,
        question: "상대강도지수로, 70 이상이면 과매수, 30 이하이면 과매도로 판단하는 기술적 지표는?",
        options: ["MACD", "RSI", "볼린저밴드", "이동평균선"],
        correctAnswer: 1,
        answerDesc: "RSI(Relative Strength Index)는 주가의 상승압력과 하락압력 간의 상대적 강도를 나타냅니다."
    },
    {
        id: 10,
        question: "상승장에서 나만 소외되거나 기회를 놓칠까 봐 두려워하는 심리를 뜻하는 용어는?",
        options: ["FUD", "FOMO", "YOLO", "JOMO"],
        correctAnswer: 1,
        answerDesc: "FOMO(Fear Of Missing Out)는 소외 공포증으로, 무리한 추격 매수의 원인이 되기도 합니다."
    },
    {
        id: 11,
        question: "단기 이동평균선이 장기 이동평균선을 아래에서 위로 뚫고 올라가는 강력한 매수 신호는?",
        options: ["데드크로스", "골든크로스", "정배열", "역배열"],
        correctAnswer: 1,
        answerDesc: "골든크로스(Golden Cross)는 단기 이평선이 장기 이평선을 상향 돌파하는 강세 신호입니다."
    },
    {
        id: 12,
        question: "시장 전체(예: 코스피) 움직임에 대한 개별 종목의 민감도를 나타내는 지표는?",
        options: ["알파", "베타", "감마", "델타"],
        correctAnswer: 1,
        answerDesc: "베타(Beta) 계수는 시장 변동 대비 개별 종목의 변동성을 나타냅니다. 1보다 크면 시장보다 더 크게 움직입니다."
    },
    {
        id: 13,
        question: "시간이 지나면서 변동된 자산 비중을 원래 목표대로 다시 조정하는 과정은?",
        options: ["손절매", "물타기", "리밸런싱 (Rebalancing)", "헤징"],
        correctAnswer: 2,
        answerDesc: "리밸런싱은 자산 배분 비율을 주기적으로 조정하여 위험을 관리하고 수익을 확정하는 행위입니다."
    },
    {
        id: 14,
        question: "주가가 오르내리는 등락의 심한 정도(위험)를 뜻하는 단어는?",
        options: ["유동성", "변동성 (Volatility)", "안정성", "수익성"],
        correctAnswer: 1,
        answerDesc: "변동성(Volatility)이 클수록 수익 기회도 크지만 손실 위험(리스크)도 큽니다 '하이 리스크 하이 리턴'."
    },
    {
        id: 15,
        question: "PER을 이익성장률로 나눈 지표로, 성장주가 저평가되었는지 판단할 때 유용한 지표는?",
        options: ["PEG Ratio", "PSR", "PBR", "PCR"],
        correctAnswer: 0,
        answerDesc: "PEG Ratio는 PER만으로는 알 수 없는 기업의 성장성을 반영한 가치 평가 지표입니다."
    },
    {
        id: 16,
        question: "실제 실적이 시장의 전망치(컨센서스)를 깜짝 놀랄 만큼 크게 상회하는 경우를 무엇이라 하는가?",
        options: ["어닝 쇼크", "어닝 서프라이즈", "빅배스", "턴어라운드"],
        correctAnswer: 1,
        answerDesc: "어닝 서프라이즈(Earning Surprise)는 예상보다 실적이 훨씬 좋아 주가 상승의 호재로 작용합니다."
    },
    {
        id: 17,
        question: "이동평균선을 중심으로 표준편차 범위를 띠(Band) 형태로 나타낸 기술적 지표는?",
        options: ["일목균형표", "볼린저 밴드", "매물대", "파라볼릭"],
        correctAnswer: 1,
        answerDesc: "볼린저 밴드(Bollinger Bands)는 주가의 변동 범위를 예측하는 데 사용됩니다."
    },
    {
        id: 18,
        question: "1주당 순이익을 뜻하며, 기업의 수익성을 나타내는 가장 기초적인 지표는?",
        options: ["BPS", "CPS", "EPS", "DPS"],
        correctAnswer: 2,
        answerDesc: "EPS(Earning Per Share)는 당기순이익을 주식 수로 나눈 값입니다."
    },
    {
        id: 19,
        question: "주식 시장에서 '매도(파는 것)'를 의미하는 동물 비유는?",
        options: ["Bull (황소)", "Bear (곰)", "Pig (돼지)", "Wolf (늑대)"],
        correctAnswer: 1,
        answerDesc: "Bear(곰)는 앞발로 내려찍는 모습에서 하락장 또는 매도 세력을 상징합니다. (반대로 Bull은 황소, 상승장)"
    },
    {
        id: 20,
        question: "기업의 내재 가치를 평가하여 현재 주가가 적정한지 판단하는 일련의 과정을 뜻하는 말은?",
        options: ["모멘텀", "밸류에이션 (Valuation)", "센티먼트", "포트폴리오"],
        correctAnswer: 1,
        answerDesc: "밸류에이션은 기업의 가치 대비 주가 수준을 평가하는 작업입니다."
    }
];

export const AIQuizModal: React.FC<AIQuizModalProps> = ({ isOpen, onClose }) => {
    const [quizState, setQuizState] = useState<'START' | 'PLAYING' | 'RESULT'>('START');
    const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState<'CORRECT' | 'WRONG' | null>(null);

    // Reset quiz when modal opens
    useEffect(() => {
        if (isOpen) {
            resetQuiz();
        }
    }, [isOpen]);

    const resetQuiz = () => {
        setQuizState('START');
        setCurrentIndex(0);
        setScore(0);
        setFeedback(null);
    };

    const startQuiz = () => {
        // Shuffle and pick 5 questions
        const shuffled = [...QUESTION_BANK].sort(() => 0.5 - Math.random());
        setCurrentQuestions(shuffled.slice(0, 5));
        setQuizState('PLAYING');
    };

    const handleAnswer = (selectedIndex: number) => {
        if (feedback !== null) return; // Prevent double clicks

        const isCorrect = selectedIndex === currentQuestions[currentIndex].correctAnswer;

        if (isCorrect) {
            setScore(prev => prev + 1);
            setFeedback('CORRECT');
            triggerConfetti();
        } else {
            setFeedback('WRONG');
        }

        // Wait for feedback animation then move to next
        setTimeout(() => {
            setFeedback(null);
            if (currentIndex < 4) {
                setCurrentIndex(prev => prev + 1);
            } else {
                setQuizState('RESULT');
                if (score + (isCorrect ? 1 : 0) === 5) {
                    triggerWinnerConfetti();
                }
            }
        }, 2000);
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#F472B6', '#EC4899', '#DB2777'] // Pink hearts colors basically
        });
    };

    const triggerWinnerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    const getRankTitle = (finalScore: number) => {
        if (finalScore === 5) return { title: "전설의 투자왕 👑", color: "#F59E0B" };
        if (finalScore === 4) return { title: "월스트리트 마스터 🎩", color: "#3B82F6" };
        if (finalScore === 3) return { title: "여의도 펀드매니저 💼", color: "#10B981" };
        if (finalScore === 2) return { title: "스마트 개미 🐜", color: "#6366F1" };
        return { title: "금융 인턴 🌱", color: "#64748B" };
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                maxWidth: '500px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{ padding: '1rem', borderBottom: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <BrainCircuit className="text-blue-600" size={24} />
                        <span style={{ fontWeight: 800, color: '#1E293B' }}>경제 용어 퀴즈</span>
                    </div>
                    <button onClick={onClose}><X className="text-gray-400 hover:text-gray-600" size={24} /></button>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem', textAlign: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    {quizState === 'START' && (
                        <div className="animate-fade-in">
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.5rem' }}>금융 지식 레벨 테스트</h2>
                            <p style={{ color: '#64748B', marginBottom: '2rem' }}>
                                총 5문제가 랜덤으로 출제됩니다.<br />
                                당신의 투자 금융 지식을 확인해보세요!
                            </p>
                            <button
                                onClick={startQuiz}
                                style={{
                                    backgroundColor: '#2563EB',
                                    color: 'white',
                                    padding: '1rem 3rem',
                                    borderRadius: '1rem',
                                    fontWeight: 700,
                                    fontSize: '1.1rem',
                                    border: 'none',
                                    boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.1s'
                                }}
                            >
                                도전하기
                            </button>
                        </div>
                    )}

                    {quizState === 'PLAYING' && currentQuestions.length > 0 && (
                        <div style={{ width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: '#64748B', fontSize: '0.9rem', fontWeight: 600 }}>
                                <span>Question {currentIndex + 1} / 5</span>
                                <span>Score: {score}</span>
                            </div>

                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: '#1E293B',
                                marginBottom: '2rem',
                                lineHeight: '1.5',
                                minHeight: '80px',
                                wordBreak: 'keep-all'
                            }}>
                                {currentQuestions[currentIndex].question}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {currentQuestions[currentIndex].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(idx)}
                                        disabled={feedback !== null}
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '0.75rem',
                                            border: '2px solid',
                                            borderColor:
                                                feedback !== null && idx === currentQuestions[currentIndex].correctAnswer ? '#10B981' : // Show correct
                                                    feedback === 'WRONG' && idx !== currentQuestions[currentIndex].correctAnswer ? '#E2E8F0' : // Dim others
                                                        feedback === 'WRONG' && idx === -1 ? '#EF4444' : // (My logic here prevents showing clicked wrong specifically without state, simplified to show correct)
                                                            '#E2E8F0',
                                            backgroundColor:
                                                feedback !== null && idx === currentQuestions[currentIndex].correctAnswer ? '#ECFDF5' :
                                                    'white',
                                            color:
                                                feedback !== null && idx === currentQuestions[currentIndex].correctAnswer ? '#047857' :
                                                    '#334155',
                                            fontWeight: 600,
                                            fontSize: '1rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                            boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)'
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {/* Feedback Overlay */}
                            {feedback && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(255,255,255,0.8)',
                                    backdropFilter: 'blur(2px)',
                                    zIndex: 20,
                                    animation: 'fadeIn 0.2s'
                                }}>
                                    {feedback === 'CORRECT' ? (
                                        <>
                                            <div style={{ fontSize: '5rem', animation: 'bounce 0.5s infinite alternate' }}>💖</div>
                                            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#DB2777', marginTop: '1rem' }}>정답입니다!</h2>
                                        </>
                                    ) : (
                                        <>
                                            <div style={{ fontSize: '5rem', animation: 'shake 0.5s infinite' }}>💩</div>
                                            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#92400E', marginTop: '1rem' }}>땡! 틀렸습니다</h2>
                                            <p style={{ marginTop: '1rem', padding: '0 2rem', color: '#4B5563', lineHeight: '1.5' }}>
                                                정답: {currentQuestions[currentIndex].options[currentQuestions[currentIndex].correctAnswer]}
                                            </p>
                                        </>
                                    )}
                                    <div style={{ marginTop: '2rem', maxWidth: '80%', backgroundColor: 'white', padding: '1rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', fontSize: '0.9rem', color: '#334155', border: '1px solid #E2E8F0' }}>
                                        💡 {currentQuestions[currentIndex].answerDesc}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {quizState === 'RESULT' && (
                        <div className="animate-scale-in">
                            <Trophy size={64} className="text-yellow-500 mx-auto mb-4" />
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.5rem' }}>퀴즈 완료!</h2>

                            <div style={{ margin: '2rem 0' }}>
                                <span style={{ display: 'block', fontSize: '1rem', color: '#64748B', marginBottom: '0.5rem' }}>당신의 점수는?</span>
                                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#2563EB' }}>{score}</span>
                                <span style={{ fontSize: '1.5rem', color: '#94A3B8' }}> / 5</span>
                            </div>

                            <div style={{
                                backgroundColor: '#F8FAFC',
                                padding: '1.5rem',
                                borderRadius: '1rem',
                                border: '1px solid #E2E8F0',
                                marginBottom: '2rem'
                            }}>
                                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748B', marginBottom: '0.5rem' }}>당신의 칭호</span>
                                <span style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 800,
                                    color: getRankTitle(score).color
                                }}>
                                    {getRankTitle(score).title}
                                </span>
                            </div>

                            <button
                                onClick={startQuiz}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    width: '100%',
                                    backgroundColor: '#1E293B',
                                    color: 'white',
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <RefreshCw size={20} />
                                다시 도전하기
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Simple Animations Styles */}
            <style>{`
                @keyframes bounce {
                    from { transform: translateY(0); }
                    to { transform: translateY(-20px); }
                }
                @keyframes shake {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(-10deg); }
                    50% { transform: rotate(10deg); }
                    75% { transform: rotate(-10deg); }
                    100% { transform: rotate(0deg); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

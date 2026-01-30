import React from 'react';
import { X, BookOpen, Activity, BarChart2, Scale, Globe } from 'lucide-react';

interface AITerminologyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AITerminologyModal: React.FC<AITerminologyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const terms = [
        {
            category: "거시 경제 (Macro Economy)",
            icon: <Globe size={18} className="text-indigo-600" />,
            items: [
                { term: "Base Rate (기준금리)", desc: "중앙은행(한국은행, 연준)이 경제 상황에 맞춰 결정하는 정책 금리입니다. 기준금리가 오르면 대출 이자도 오르고 시중 유동성이 줄어들어 주식 시장에는 악재로, 내리면 호재로 작용하는 경향이 있습니다." },
                { term: "CPI (소비자물가지수)", desc: "가정에서 소비하는 상품과 서비스의 가격 변동을 측정한 지수입니다. 인플레이션을 판단하는 가장 중요한 지표로, CPI가 예상보다 높게 나오면 금리 인상 우려로 주가가 하락할 수 있습니다." },
                { term: "PPI (생산자물가지수)", desc: "기업(생산자) 입장에서의 물가 지수입니다. 생산 단가가 오르면 결국 소비자 가격(CPI)도 오르기 때문에, 미래의 인플레이션을 선행해서 보여주는 지표 역할을 합니다." },
                { term: "Liquidity (유동성)", desc: "자산을 현금으로 얼마나 쉽게 바꿀 수 있는지를 뜻합니다. 또한 시장에 풀려있는 돈의 양을 의미하기도 합니다. '유동성 장세'란 기업 실적보다 시중에 넘쳐나는 돈의 힘으로 주가가 오르는 시기를 말합니다." },
                { term: "Goldilocks (골디락스)", desc: "경기가 너무 뜨겁지도(인플레이션 우려), 너무 차갑지도(경기 침체 우려) 않은 이상적인 경제 상태를 말합니다. 투자하기에 가장 좋은 환경으로 꼽힙니다." }
            ]
        },
        {
            category: "기본 용어 (Basic)",
            icon: <BookOpen size={18} className="text-blue-600" />,
            items: [
                { term: "ETF (Exchange Traded Fund)", desc: "'상장지수펀드'라고 하며, 주식처럼 거래소에서 실시간으로 사고팔 수 있는 펀드입니다. KOSPI 200 같은 특정 지수를 추종하거나, 반도체·2차전지 등 특정 테마의 여러 종목에 분산 투자하는 효과가 있어 리스크 관리에 유리합니다." },
                { term: "Quant (Quantitative Analysis)", desc: "'계량 분석'을 의미합니다. 사람의 주관이나 감을 배제하고, 수학적 통계 모델과 데이터를 기반으로 투자 대상을 선정하고 매매 시점을 포착하는 과학적인 투자 기법입니다." },
                { term: "Momentum (모멘텀)", desc: "주가 상승세의 탄력이나 가속도를 의미합니다. 물리학의 관성 법칙처럼, 한번 상승 추세를 탄 종목이 계속 오르려는 성질을 이용한 '추세 추종(Trend Following)' 전략의 핵심 개념입니다." },
                { term: "YTD (Year To Date)", desc: "'연초 대비 수익률'입니다. 매년 1월 1일부터 현재 시점까지 해당 자산이 얼마나 오르거나 내렸는지를 나타내며, 올해의 성과를 측정하는 가장 보편적인 기준입니다." },
                { term: "MDD (Maximum Drawdown)", desc: "'최대 낙폭'을 의미합니다. 특정 기간 동안 고점에서 저점까지 가장 많이 하락했을 때의 손실률입니다. 투자자가 겪을 수 있는 '최악의 고통'을 수치화한 리스크 지표입니다." },
                { term: "NAV (Net Asset Value)", desc: "'순자산가치'입니다. ETF가 보유한 자산의 실제 가치를 뜻합니다. 시장 가격이 NAV보다 높으면 '괴리율'이 발생했다고 하며, 고평가된 상태일 수 있습니다." }
            ]
        },
        {
            category: "기업 분석 (Fundamental)",
            icon: <Scale size={18} className="text-green-600" />,
            items: [
                { term: "P/E Ratio (Price-to-Earnings Ratio)", desc: "'주가수익비율(PER)'입니다. 현재 주가를 1주당 순이익(EPS)으로 나눈 값으로, 기업이 벌어들이는 이익에 비해 주가가 얼마나 비싼지(고평가) 혹은 싼지(저평가)를 판단하는 대표적인 지표입니다." },
                { term: "PEG Ratio (Price/Earnings to Growth Ratio)", desc: "PER을 이익성장률로 나눈 지표입니다. 단순히 PER만 보면 고성장주가 비싸 보일 수 있지만, 높은 성장률을 감안하면 저평가일 수 있음을 판단할 때 사용합니다. 피터 린치가 애용한 지표입니다." },
                { term: "ROE (Return On Equity)", desc: "'자기자본이익률'입니다. 기업이 주주들이 맡긴 돈(자본)을 활용해 1년 동안 얼마만큼의 이익을 냈는지를 보여주는 수익성 지표입니다. 워렌 버핏이 중요하게 보는 지표 중 하나입니다." },
                { term: "EPS (Earning Per Share)", desc: "'주당순이익'입니다. 기업이 벌어들인 순이익을 발행 주식 수로 나눈 값으로, 1주가 1년 동안 얼마를 벌었는지를 나타냅니다. 주가의 기초 체력이 되는 핵심 지표입니다." },
                { term: "Valuation (밸류에이션)", desc: "기업의 내재 가치를 평가하는 과정입니다. 현재 주가가 기업의 실적이나 자산 가치에 비해 적정한지, 아니면 고평가/저평가되었는지를 분석하여 목표 주가를 산출하는 작업입니다." },
                { term: "Consensus (Market Consensus)", desc: "증권사 애널리스트들이 발표한 실적 전망치들의 평균값입니다. 실제 실적이 이 컨센서스를 크게 뛰어넘으면 '어닝 서프라이즈', 크게 밑돌면 '어닝 쇼크'라고 합니다." }
            ]
        },
        {
            category: "기술적 분석 (Technical)",
            icon: <Activity size={18} className="text-purple-600" />,
            items: [
                { term: "RSI (Relative Strength Index)", desc: "'상대강도지수'입니다. 매수세와 매도세의 힘을 비교해 0~100 사이의 수치로 나타냅니다. 보통 70 이상이면 과매수(과열)로 매도 타이밍, 30 이하이면 과매도(침체)로 매수 타이밍으로 해석합니다." },
                { term: "MACD (Moving Average Convergence Divergence)", desc: "단기 이동평균선과 장기 이동평균선이 서로 멀어지거나 가까워지는 것을 이용해 추세의 방향과 전환 시점을 포착하는 지표입니다. 추세 매매에 유용하게 쓰입니다." },
                { term: "Bollinger Bands (볼린저 밴드)", desc: "이동평균선을 중심으로 표준편차 범위를 띠(Band) 형태로 나타낸 것입니다. 주가는 대부분 밴드 내에서 움직이는 경향이 있으며, 밴드 상단 도달 시 매도, 하단 도달 시 매수 신호로 활용됩니다." },
                { term: "Stochastic (스토캐스틱)", desc: "주가가 일정 기간 동안 변동한 범위 내에서 현재 어느 위치에 있는지를 백분율로 나타낸 지표입니다. 박스권 장세에서 매수/매도 타이밍을 잡는 데 유용합니다." },
                { term: "Golden / Dead Cross", desc: "단기 이동평균선이 장기 이동평균선을 아래에서 위로 뚫고 올라가면 '골든크로스(매수 신호)', 반대로 위에서 아래로 뚫고 내려가면 '데드크로스(매도 신호)'라고 합니다." },
                { term: "Volume (거래량)", desc: "주식이 거래된 수량입니다. '주가는 속여도 거래량은 못 속인다'는 말이 있듯, 주가 상승 시 거래량이 동반되어야 신뢰도 높은 상승으로 봅니다." }

            ]
        },
        {
            category: "시장 용어 (Market)",
            icon: <BarChart2 size={18} className="text-orange-600" />,
            items: [
                { term: "Beta (베타)", desc: "시장 전체(예: 코스피 지수) 움직임에 대한 개별 종목의 민감도입니다. 베타가 1이면 시장과 동일하게 움직이고, 1보다 크면 시장보다 더 큰 폭으로 등락함을 의미합니다. (공격적 투자 성향)" },
                { term: "Volatility (변동성)", desc: "주가가 오르내리는 등락의 심한 정도를 뜻합니다. 변동성이 클수록 기대 수익도 높지만 손실 위험도 커지는 '하이 리스크 하이 리턴(High Risk, High Return)'의 특성을 가집니다." },
                { term: "Short Selling (공매도)", desc: "주가가 하락할 것으로 예상될 때, 주식을 빌려서 먼저 판 뒤 나중에 싼 가격에 사서 갚아 차익을 남기는 투자 기법입니다. 하락장에서도 수익을 낼 수 있습니다." },
                { term: "Short Squeeze (숏스퀴즈)", desc: "공매도 세력이 주가 상승으로 인한 손실을 막기 위해 급하게 주식을 다시 사들이면서(숏커버링), 주가가 더욱 폭등하는 현상을 말합니다." },
                { term: "Rebalancing (리밸런싱)", desc: "시간이 지나면서 자산 가격 변동으로 인해 당초 설정한 자산 배분 비중이 틀어졌을 때, 이를 원래의 목표 비중대로 다시 조정(매수/매도)하는 과정입니다." },
                { term: "FOMO (Fear Of Missing Out)", desc: "상승장에서 나만 소외되거나 기회를 놓칠까 봐 두려워하는 심리입니다. 이 심리에 휩쓸려 고점에서 성급하게 추격 매수하는 투자는 큰 손실로 이어질 수 있습니다." }
            ]
        }
    ];

    return (
        <div className="modal-overlay" onClick={onClose} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '1rem'
        }}>
            <div className="ai-modal-content" style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '85vh',
                overflowY: 'auto',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{
                    padding: '1.25rem',
                    borderBottom: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    zIndex: 10
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            backgroundColor: '#EFF6FF',
                            padding: '0.5rem',
                            borderRadius: '0.5rem',
                            color: '#2563EB'
                        }}>
                            <BookOpen size={24} />
                        </div>
                        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#1E293B' }}>
                            금융 용어 가이드 (Glossary)
                        </h3>
                    </div>
                    <button onClick={onClose} style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#64748B',
                        padding: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                    <div style={{
                        backgroundColor: '#F8FAFC',
                        padding: '1rem',
                        borderRadius: '0.75rem',
                        marginBottom: '2rem',
                        border: '1px solid #E2E8F0',
                        fontSize: '0.95rem',
                        color: '#475569',
                        lineHeight: '1.6'
                    }}>
                        <strong>💡 AI 리포트 활용 팁:</strong><br />
                        본 리포트에서 자주 사용되는 핵심 금융 용어와 지표들을 정리했습니다.
                        용어의 의미를 이해하면 시장의 흐름과 AI의 분석 의도를 더 깊이 파악하실 수 있습니다.
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {terms.map((section, idx) => (
                            <div key={idx} style={{
                                backgroundColor: 'white',
                                border: '1px solid #E2E8F0',
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                            }}>
                                <div style={{
                                    padding: '0.75rem 1rem',
                                    backgroundColor: '#F8FAFC',
                                    borderBottom: '1px solid #E2E8F0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: 700,
                                    color: '#334155'
                                }}>
                                    {section.icon}
                                    {section.category}
                                </div>
                                <div style={{ padding: '1rem' }}>
                                    {section.items.map((item, i) => (
                                        <div key={i} style={{ marginBottom: i !== section.items.length - 1 ? '1rem' : 0 }}>
                                            <dt style={{
                                                fontWeight: 700,
                                                color: '#0F172A',
                                                fontSize: '0.95rem',
                                                marginBottom: '0.25rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem'
                                            }}>
                                                <div style={{ width: '4px', height: '4px', backgroundColor: '#CBD5E1', borderRadius: '50%' }}></div>
                                                {item.term}
                                            </dt>
                                            <dd style={{
                                                margin: 0,
                                                fontSize: '0.9rem',
                                                color: '#64748B',
                                                lineHeight: '1.5',
                                                paddingLeft: '0.8rem'
                                            }}>
                                                {item.desc}
                                            </dd>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    padding: '1rem',
                    borderTop: '1px solid #E2E8F0',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                    color: '#94A3B8',
                    backgroundColor: '#F8FAFC'
                }}>
                    지속적으로 업데이트되는 금융 지식 데이터베이스입니다.
                </div>
            </div>
        </div>
    );
};

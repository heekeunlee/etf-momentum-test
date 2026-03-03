import React from 'react';
import { X, BookOpen, AlertCircle, ShieldCheck, Scale, TrendingUp, RefreshCw, Activity, ArrowRightLeft } from 'lucide-react';

interface EtfQuantGuideModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EtfQuantGuideModal: React.FC<EtfQuantGuideModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100/50 rounded-xl text-blue-600">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-slate-900">ETF Quant 투자 가이드</h2>
                            <p className="text-sm text-slate-500">데이터 기반의 과학적 투자 전략</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Scroll Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* 1. Quant 투자란 무엇인가 */}
                        <section className="space-y-6">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 01</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Quant Investment</h3>
                                <p className="text-slate-500 text-lg">데이터가 이끄는 투자의 미래</p>
                            </div>

                            <div className="grid gap-6">
                                {/* 1.1 Definition Card */}
                                <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 text-center">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                                        <BookOpen size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                                        데이터로 하는 투자
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                        <strong className="text-slate-900">Quantitative(정량적)</strong>의 약자로,<br />
                                        오직 <span className="text-blue-600 font-bold">수치와 데이터</span>에만 의존하여<br />
                                        투자 결정을 내리는 방식입니다.
                                    </p>
                                    <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-600">
                                        "내 감정이 아닌, 데이터의 지시를 따릅니다"
                                    </div>
                                </div>

                                {/* 1.2 Comparison Grid (Bento) */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Intuition Card */}
                                    <div className="bg-[#FFF5F5] rounded-[2rem] p-8 relative overflow-hidden">
                                        <AlertCircle className="text-red-500/10 absolute -right-4 -bottom-4 w-32 h-32" />
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                                    <AlertCircle size={16} />
                                                </span>
                                                <h4 className="font-bold text-red-900 text-lg">직관 투자 (Intuition)</h4>
                                            </div>
                                            <ul className="space-y-3">
                                                {["뉴스나 소문에 흔들림", "차트만 보고 예측하려 함", "공포에 팔고 탐욕에 매수"].map((text, i) => (
                                                    <li key={i} className="text-red-900/70 text-sm font-medium flex gap-2">
                                                        <span>✕</span> {text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Quant Card */}
                                    <div className="bg-[#F0F9FF] rounded-[2rem] p-8 relative overflow-hidden">
                                        <ShieldCheck className="text-blue-500/10 absolute -right-4 -bottom-4 w-32 h-32" />
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                                                    <ShieldCheck size={16} />
                                                </span>
                                                <h4 className="font-bold text-blue-900 text-lg">퀀트 투자 (Rule)</h4>
                                            </div>
                                            <ul className="space-y-3">
                                                {["객관적 수치만 신뢰", "정해진 규칙대로만 매매", "감정을 100% 배제함"].map((text, i) => (
                                                    <li key={i} className="text-blue-900/70 text-sm font-medium flex gap-2">
                                                        <span>✓</span> {text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* 1.3 Key Features (Horizontal scroll snap or Grid) */}
                                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                                    <h4 className="text-center font-bold text-slate-800 mb-6">Why Quant?</h4>
                                    <div className="grid gap-4 sm:grid-cols-3">
                                        {[
                                            { title: "객관성", sub: "Objectivity", icon: "📊" },
                                            { title: "재현성", sub: "Reproducibility", icon: "🔄" },
                                            { title: "검증 가능", sub: "Backtesting", icon: "✅" }
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm">
                                                <div className="text-3xl mb-2">{item.icon}</div>
                                                <div className="font-bold text-slate-900">{item.title}</div>
                                                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">{item.sub}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* 2. ETF Quant 투자 개념 */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 02</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">ETF Quant Concept</h3>
                                <p className="text-slate-500 text-lg">왜 개별 종목이 아닌 ETF인가?</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-50 rounded-[2rem] p-8">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">개별 종목의 위험성</h4>
                                    <p className="text-slate-600 mb-6">아무리 우량한 기업도 경영진 리스크, 횡령, 산업 규제 등 예상치 못한 악재로 하루아침에 급락할 수 있습니다.</p>
                                    <div className="p-4 bg-white rounded-xl shadow-sm space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span>A전자 (반도체 1위)</span>
                                            <span className="text-red-500">-30% ▼</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>B화학 (배터리 대장)</span>
                                            <span className="text-red-500">-50% ▼</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-[2rem] p-8">
                                    <h4 className="text-xl font-bold text-slate-900 mb-4">ETF의 안정성</h4>
                                    <p className="text-slate-600 mb-6">ETF는 수십, 수백 개의 기업을 묶어놓은 바구니입니다. 개별 기업이 망해도 지수는 사라지지 않습니다.</p>
                                    <div className="p-4 bg-white rounded-xl shadow-sm space-y-2 border border-blue-100">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-bold text-blue-800">KODEX 반도체</span>
                                            <span className="text-blue-600">+12% ▲</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="font-bold text-blue-800">TIGER 2차전지</span>
                                            <span className="text-blue-600">+8% ▲</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. 종목 선정 방식 */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 03</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Selection Strategy</h3>
                                <p className="text-slate-500 text-lg">어떤 ETF를 사야 할까?</p>
                            </div>

                            <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm">STEP 1</span>
                                            <h4 className="text-lg font-bold text-slate-800">모멘텀 스코어링</h4>
                                        </div>
                                        <p className="text-slate-600 pl-14">최근 3개월, 6개월, 12개월 수익률을 가중 평균하여 점수를 매깁니다. <br />"최근에 잘 나가는 놈이 계속 잘 나간다"는 관성의 법칙을 이용합니다.</p>
                                    </div>
                                    <div className="hidden md:block w-px h-32 bg-slate-100"></div>
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg text-sm">STEP 2</span>
                                            <h4 className="text-lg font-bold text-slate-800">상위 종목 탑승</h4>
                                        </div>
                                        <p className="text-slate-600 pl-14">전체 ETF 중 스코어가 가장 높은 <strong className="text-slate-900">상위권 종목군</strong>을 <strong className="text-slate-900">선별하여 포트폴리오에 편입합니다.</strong> <br />순위가 하락하면 포트폴리오에서 <strong className="text-slate-900">과감히 제외하고</strong> 새로운 주도주로 교체합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. 장점과 단점 */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 04</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Pros & Cons</h3>
                                <p className="text-slate-500 text-lg">완벽한 투자는 없다, 알고 하자</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border border-green-100 bg-green-50/30 rounded-[2rem] p-6">
                                    <h4 className="text-lg font-bold text-green-700 mb-4 flex items-center gap-2">
                                        <ShieldCheck size={20} /> 장점 (Pros)
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-2 text-slate-700 text-sm"><span className="text-green-500">✓</span> 시장 주도주를 자동으로 따라감</li>
                                        <li className="flex gap-2 text-slate-700 text-sm"><span className="text-green-500">✓</span> 폭락장 직전에 현금화 신호 발생</li>
                                        <li className="flex gap-2 text-slate-700 text-sm"><span className="text-green-500">✓</span> 더 이상 종목 토론방을 기웃거릴 필요 없음</li>
                                    </ul>
                                </div>
                                <div className="border border-orange-100 bg-orange-50/30 rounded-[2rem] p-6">
                                    <h4 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
                                        <AlertCircle size={20} /> 단점 (Cons)
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex gap-2 text-slate-700 text-sm"><span className="text-orange-500">!</span> 횡보장(지루한 장)에서는 잦은 매매로 손실 가능</li>
                                        <li className="flex gap-2 text-slate-700 text-sm"><span className="text-orange-500">!</span> 대박(10배 상승)은 없음, 꾸준한 우상향이 목표</li>
                                        <li className="flex gap-2 text-slate-700 text-sm"><span className="text-orange-500">!</span> 과거 데이터가 미래 수익을 100% 보장하진 않음</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 5. 용어 정리 */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 05</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Key Terms</h3>
                                <p className="text-slate-500 text-lg">퀀트 투자의 핵심 언어</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                                        <Scale className="text-blue-500 w-5 h-5" />
                                        <span>Alpha (α)</span>
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        시장 수익률(코스피 등)을 초과하는 <strong className="text-blue-600">추가 수익</strong>을 의미합니다. 퀀트의 목표는 지속적인 '알파' 창출입니다.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                                        <Activity className="text-slate-500 w-5 h-5" />
                                        <span>Beta (β)</span>
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        시장 전체의 움직임에 대한 <strong className="text-slate-900">민감도</strong>입니다. 베타가 1이면 시장과 똑같이 움직이고, 2면 2배로 움직입니다.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 md:col-span-2">
                                    <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-3">
                                        <BookOpen className="text-blue-600 w-5 h-5" />
                                        <span>Smart Beta (스마트 베타)</span>
                                    </h4>
                                    <p className="text-blue-800 text-sm leading-relaxed">
                                        단순히 시장을 따라가는 베타(인덱스 펀드)에 <strong className="text-blue-700">추가적인 전략(가치, 모멘텀 등)</strong>을 더해 시장 대비 초과 수익을 추구하는 전략입니다.
                                        <br /><span className="text-xs mt-2 block opacity-70">* 우리 서비스는 '모멘텀' 팩터를 활용한 스마트 베타 전략입니다.</span>
                                    </p>
                                </div>
                                <div className="bg-red-50 p-6 rounded-2xl border border-red-100 md:col-span-2">
                                    <h4 className="font-bold text-red-900 flex items-center gap-2 mb-3">
                                        <ArrowRightLeft className="text-red-500 w-5 h-5" />
                                        <span>MDD (Maximum Drawdown)</span>
                                    </h4>
                                    <p className="text-red-800 text-sm leading-relaxed">
                                        <strong className="text-red-700">최대 낙폭</strong>. 고점에서 저점까지 떨어진 최대 하락률을 뜻합니다. 수익률보다 중요한 것이 MDD를 낮게 관리하여 '생존'하는 것입니다.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 6. Value vs Momentum */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 06</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Value vs Momentum</h3>
                                <p className="text-slate-500 text-lg">싸게 살 것인가, 달리는 말에 탈 것인가?</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Value */}
                                <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 mb-6 shadow-sm">
                                        <Scale size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">가치 투자 (Value)</h4>
                                    <p className="text-slate-500 text-sm font-medium mb-6">"쌀 때 사서 제값에 판다"</p>
                                    <ul className="space-y-3">
                                        <li className="text-slate-600 text-sm">✓ PER, PBR 등 지표가 저평가된 종목</li>
                                        <li className="text-slate-600 text-sm">✓ 남들이 거들떠보지 않을 때 매수</li>
                                        <li className="text-slate-600 text-sm">✓ <strong>단점:</strong> 언제 오를지 알 수 없음 (Value Trap)</li>
                                    </ul>
                                </div>

                                {/* Momentum */}
                                <div className="bg-blue-50 rounded-[2rem] p-8 border border-blue-100 ring-2 ring-blue-100/50">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-blue-900 mb-2">모멘텀 투자 (Momentum)</h4>
                                    <p className="text-blue-600/80 text-sm font-medium mb-6">"달리는 말에 올라타라"</p>
                                    <ul className="space-y-3">
                                        <li className="text-blue-800 text-sm">✓ 최근 수익률이 가장 좋은 종목</li>
                                        <li className="text-blue-800 text-sm">✓ 시장의 관심이 집중된 주도주 매수</li>
                                        <li className="text-blue-800 text-sm">✓ <strong>우리의 전략:</strong> 추세가 꺾이기 전까지 보유</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 7. Synergy */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 07</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Synergy Effect</h3>
                                <p className="text-slate-500 text-lg">최상의 조합을 찾아서</p>
                            </div>

                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 text-white text-center relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-4">왜 이 전략을 쓰는가?</h4>
                                    <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                                        가치 투자는 하락장에서 버티는 힘이 좋고,<br />
                                        모멘텀 투자는 상승장에서 폭발적인 수익을 냅니다.<br />
                                        하지만 한국 시장은 <strong>짧은 순환매(Sector Rotation)</strong>가 특징이므로<br />
                                        <strong className="text-blue-400">빠르게 주도주를 교체하는 ETF 모멘텀 전략</strong>이 특히 유리합니다.
                                    </p>
                                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                                        <TrendingUp size={18} className="text-blue-400" />
                                        <span className="font-bold">Fast Following Strategy</span>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            </div>
                        </section>

                        {/* 8. Rebalancing */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 08</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Rebalancing</h3>
                                <p className="text-slate-500 text-lg">지속 가능한 수익의 비밀</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">1</div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">정기 점검 (Monthly)</h5>
                                            <p className="text-sm text-slate-500">매월 말일, ETF 순위를 다시 계산합니다.</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center text-slate-300">
                                        <ArrowRightLeft />
                                    </div>
                                    <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600">2</div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">도태 종목 매도</h5>
                                            <p className="text-sm text-slate-500">순위가 떨어진 ETF는 가차 없이 팝니다.</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center text-slate-300">
                                        <ArrowRightLeft />
                                    </div>
                                    <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">3</div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">신규 대장주 매수</h5>
                                            <p className="text-sm text-slate-500">새롭게 떠오른 1등 ETF를 매수합니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl text-center text-sm text-slate-500">
                                    <RefreshCw className="inline-block w-4 h-4 mr-2 mb-0.5" />
                                    이 과정을 무한히 반복하여 포트폴리오를 항상 <strong>'가장 강한 놈'</strong>들로 유지합니다.
                                </div>
                            </div>
                        </section>

                        {/* 9. Market Trend Analysis */}
                        <section className="space-y-6 pt-12 border-t border-slate-100">
                            <div className="text-center space-y-2 mb-10">
                                <span className="text-blue-600 font-bold tracking-wider text-sm">CHAPTER 09</span>
                                <h3 className="text-3xl font-bold text-slate-900 leading-tight">Market Trend</h3>
                                <p className="text-slate-500 text-lg">지금은 공격할 때인가, 수비할 때인가?</p>
                            </div>

                            <div className="grid gap-4">
                                <div className="bg-red-50 rounded-2xl p-6 flex items-center gap-6 border border-red-100">
                                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-red-500/30">🐂</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-red-900">상승장 (Bull Market)</h4>
                                        <p className="text-red-700/80 text-sm">평균 모멘텀 스코어가 높을 때. <br /><strong>Action:</strong> 주식형 ETF 비중을 100%까지 공격적으로 늘립니다.</p>
                                    </div>
                                </div>
                                <div className="bg-slate-50 rounded-2xl p-6 flex items-center gap-6 border border-slate-200">
                                    <div className="w-16 h-16 rounded-full bg-slate-400 flex items-center justify-center text-white text-2xl shadow-lg">🦀</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">횡보장 (Sideways)</h4>
                                        <p className="text-slate-600 text-sm">추세가 불분명할 때. <br /><strong>Action:</strong> 주식 비중을 줄이고 채권/금 등 안전자산을 섞습니다.</p>
                                    </div>
                                </div>
                                <div className="bg-blue-50 rounded-2xl p-6 flex items-center gap-6 border border-blue-100">
                                    <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/30">🐻</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-blue-900">하락장 (Bear Market)</h4>
                                        <p className="text-blue-700/80 text-sm">모든 자산이 하락할 때. <br /><strong>Action:</strong> 주식을 전량 매도하고 <strong>현금(달러/초단기채)</strong>으로 대피합니다.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Future Sections (Placeholder) */}
                        {[
                            { id: '10', title: '장세별 비중 조절 전략 (V / M / D)' },
                            { id: '11', title: '리스크 관리 및 보조 스위치 룰' },
                            { id: '12', title: '실전 운영 매뉴얼 요약' },
                        ].map((section) => (
                            <section key={section.id} className="pt-8 border-t border-slate-100 opacity-40 select-none grayscale cursor-not-allowed">
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl font-black text-slate-400 -mt-1">{section.id}</span>
                                    <div className="relative">
                                        <h3 className="text-lg font-bold text-slate-800">{section.title}</h3>
                                        <span className="absolute -top-3 -right-10 text-[10px] bg-slate-200 text-slate-500 px-1.5 py-0.5 rounded font-bold">준비중</span>
                                    </div>
                                </div>
                            </section>
                        ))}

                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-center text-xs text-slate-400">
                    Quant Investment Guide for Smart Investors
                </div>
            </div>
        </div>
    );
};

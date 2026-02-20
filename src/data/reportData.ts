
export interface MarketAnalysisData {
    executiveSummary: string;
    sentimentMacro: {
        fearGreedIndex: { value: number; status: string; desc: string };
        putCallRatio: { value: number; desc: string };
    };
    globalLiquidity: {
        foreignNetBuying: string;
        sectorRotation: string;
        usdKrw: string;
    };
    sectorAnalysis: {
        space: { title: string; desc: string; action: string; topPick: string };
        semi: { title: string; desc: string; action: string; topPick: string };
    };
    quantSignals: {
        momentum: string;
        volatility: string;
        volume: string;
    };
    finalVerdict: {
        status: string;
        desc: string;
    };
}


export const marketAnalysisData: MarketAnalysisData = {
    executiveSummary: `"<strong>Paradigm Shift: The Rise of Value & Yield (저PBR 밸류업과 배당의 시간)</strong>. 글로벌 매크로의 불확실성이 지속되는 가운데, 국내 증시는 <strong>기업 밸류업 프로그램(Corporate Value-up Program)</strong>의 구체화 기대감으로 거대한 자금 이동이 발생하고 있습니다. <br><br><span style='color:#EF4444; font-weight:800;'>[Market View]</span>: 성장주(반도체, 로봇)에서 가치주(증권, 금융, 고배당)로의 명확한 주도주 교체(Sector Rotation)가 확인됩니다. 특히 1위를 차지한 'TIGER 증권'과 '주식혼합/고배당' ETF들의 압도적인 수익률이 이를 증명합니다. 단순한 테마가 아닌 <strong>주주환원</strong>이라는 구조적 변화에 베팅할 때입니다."`,
    sentimentMacro: {
        fearGreedIndex: { value: 72, status: "Greed", desc: "정부 정책 기대감으로 국내 투자 심리 회복. 저 PBR 관련주로 스마트 머니 유입 중." },
        putCallRatio: { value: 0.65, desc: "콜옵션 거래 우위. 하락 베팅보다는 상승 추세 수용 심리가 강함." }
    },
    globalLiquidity: {
        foreignNetBuying: "외국인/기관 쌍끌이 매수. 특히 <strong>금융지주 및 저PBR 지주사</strong> 집중.",
        sectorRotation: "<strong>성장 -> 가치 (고배당/금융)</strong>로의 자금 대이동. 단기 테마가 아닌 중장기 트렌드 형성.",
        usdKrw: "환율 변동성 축소. 외국인 수급 지속 유입에 긍정적 환경 조성."
    },
    sectorAnalysis: {
        space: {
            title: "📈 증권/금융 (Finance) - 정책의 최대 수혜",
            desc: "PBR 1배 미만의 극심한 저평가 구간. 배당 확대와 자사주 소각 등 주주환원 강화를 통한 밸류에이션 리레이팅(Re-rating) 폭발.",
            action: "Strong Buy (핵심 주도주)",
            topPick: "TIGER 증권"
        },
        semi: {
            title: "⚖️ 주식혼합 (Mixed Asset/Dividend) - 방패와 창",
            desc: "시장 변동성을 방어하는 우량 채권과, 수익률을 견인하는 고배당/가치주의 황금비율. 퇴직연금 자금의 지속적 유입 기대.",
            action: "Buy (포트폴리오 코어)",
            topPick: "RISE 주식혼합"
        }
    },
    quantSignals: {
        momentum: "Extremely Strong (가치주 폭등세)",
        volatility: "Moderate (성장주 차익매물 주의)",
        volume: "Surge (금융/증권 섹터 거래대금 집중)"
    },
    finalVerdict: {
        status: "VALUE DRIVEN (가치주의 화려한 부활)",
        desc: "오랜 시간 소외받던 <strong>만년 저평가(증권/금융/고배당) 주식들의 반란</strong>입니다. 정부의 강력한 의지와 행동주의 펀드의 압박이 맞물려 있습니다. 포트폴리오의 무게중심을 <strong>주주환원 친화적 ETF</strong>로 확실하게 옮기시길 강력히 권고합니다."
    }
};

export const etfBuySellData = [
    {
        name: "TIGER 증권",
        code: "157500",
        rank: "국내 주식 1위 (최근 1년 +260.7%)",
        action: "STRONG BUY",
        actionColor: '#DC2626',
        actionBg: '#FEF2F2',
        holdings: [
            { name: "메리츠금융지주", ratio: "18.5%" },
            { name: "한국금융지주", ratio: "16.1%" },
            { name: "NH투자증권", ratio: "14.3%" },
            { name: "미래에셋증권", ratio: "13.2%" },
            { name: "삼성증권", ratio: "11.5%" }
        ],
        fundamental: {
            thesis: "[밸류업 폭발력] 만년 저평가(PBR 0.5배 미만)를 받던 증권주들이 <strong>기업 밸류업 프로그램</strong>의 핵심 수혜주로 부상하며 자사주 매입/소각과 배당 확대의 선봉장에 섰습니다.",
            metrics: [
                { label: "P/B Ratio", value: "0.45x", judge: "극심한 저평가" },
                { label: "Dividend", value: "6.5%", judge: "고배당 매력" },
                { label: "Liquidity", value: "High", judge: "기관/외인 매수" }
            ]
        },
        competitor: {
            name: "vs KODEX 증권",
            analysis: "유사한 포트폴리오이나 TIGER의 브랜드 파워 및 호가 유동성 측면에서 소폭 우위."
        },
        flow: "외국인 및 기관 동반 순매수 전환. (특히 연기금 유입)",
        technical: {
            trend: "장기 하락 추세 돌파",
            indicators: ["RSI(14): 75 (강력 매수)", "MACD: 골든크로스 이후 우상향"]
        },
        scenarios: {
            bull: { percent: "80%", target: "12,000원", desc: "정부 밸류업 세부안 발표 시 추가 급등" },
            bear: { percent: "20%", target: "8,500원", desc: "단기 급등에 따른 기간 조정" }
        },
        strategy: {
            entry: "시초가 공격적 매수",
            goal: "13,500원",
            stop: "8,000원"
        }
    },
    {
        name: "RISE 주식혼합",
        code: "105010",
        rank: "혼합자산 1위 (최근 1년 +85.9%)",
        action: "BUY (포트폴리오 코어)",
        actionColor: '#EA580C',
        actionBg: '#FFF7ED',
        holdings: [
            { name: "국고채(3년)", ratio: "45.0%" },
            { name: "삼성전자", ratio: "12.5%" },
            { name: "현대차", ratio: "8.1%" },
            { name: "KB금융", ratio: "7.4%" },
            { name: "SK하이닉스", ratio: "5.7%" }
        ],
        fundamental: {
            thesis: "[안정성과 수익의 조화] 채권의 이자 수익으로 하방을 방어하면서, 삼성전자/현대차/KB금융 등 코스피 대형 가치주/배당주의 상승 모멘텀을 온전히 누릴 수 있는 구조입니다.",
            metrics: [
                { label: "Volatility", value: "Low", judge: "포트 안정성" },
                { label: "Yield", value: "Steady", judge: "복리 효과 극대화" },
                { label: "Growth", value: "Stable", judge: "퇴직연금 유입" }
            ]
        },
        competitor: {
            name: "vs KODEX 삼성전자채권혼합",
            analysis: "특정 종목(삼성전자) 쏠림 없이 증시 전반의 밸류업 기운을 넓게 흡수."
        },
        flow: "퇴직연금(디폴트옵션) 및 연금저축 자금 지속 유입.",
        technical: {
            trend: "꾸준한 45도 우상향",
            indicators: ["안정적인 채권 베이스", "주식 비중 탄력적 조절"]
        },
        scenarios: {
            bull: { percent: "75%", target: "28,000원", desc: "증시 전반의 완만한 상승 시" },
            bear: { percent: "25%", target: "23,000원", desc: "금리 인상 및 주식 시장 동반 충격 시" }
        },
        strategy: {
            entry: "매월 적립식 매수",
            goal: "장기 보유 (연금 코어)",
            stop: "모멘텀 붕괴 시 (하단 21,500원)"
        }
    }
];

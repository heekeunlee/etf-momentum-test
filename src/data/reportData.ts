
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
    executiveSummary: `"<strong>Conflicting Signals: Shutdown Fear vs OPI Liquidity (셧다운 우려와 보너스 유동성)</strong>. 미국의 <strong>셧다운 임박(Government Shutdown)</strong>이 매크로 불확실성을 키우고 있으나, 국내적으로는 <strong>삼성 계열사 OPI(성과급) 지급</strong>에 따른 개인 투자자들의 유동성 유입이 기대됩니다. <br><br><span style='color:#EF4444; font-weight:800;'>[Market View]</span>: 대외 악재(셧다운)와 대내 호재(OPI 유동성)가 충돌하며 종목별 장세(Stock Picking)가 심화될 전망입니다. 1위 'PLUS 글로벌HBM반도체'와 로봇 섹터의 주도력은 여전합니다."`,
    sentimentMacro: {
        fearGreedIndex: { value: 65, status: "Greed", desc: "미국 셧다운 우려로 전일 대비 하락했으나 여전히 투자 심리는 견조함." },
        putCallRatio: { value: 0.72, desc: "풋옵션 거래 소폭 증가. 셧다운 리스크에 대한 헷지 수요 발생." }
    },
    globalLiquidity: {
        foreignNetBuying: "관망세. 셧다운 불확실성 해소 전까지 적극적인 베팅 자제.",
        sectorRotation: "<strong>AI 반도체</strong> 유지. 대외 변수에 덜 민감한 <strong>개별 종목 장세</strong> 예상.",
        usdKrw: "1,310원대 유지. 안전자산 선호 현상으로 하방 경직성 확보."
    },
    sectorAnalysis: {
        space: {
            title: "🤖 로봇 (Robotics) - 성장 스토리 유효",
            desc: "대기업들의 로봇 사업 투자가 본격화되며 매수세 지속. 셧다운 이슈와 무관한 구조적 성장 섹터.",
            action: "Buy (비중 유지)",
            topPick: "KODEX 로봇액티브"
        },
        semi: {
            title: "💾 AI 반도체 (AI Semi) - 삼성 OPI 수혜?",
            desc: "삼성 계열사 OPI 지급으로 삼성전자 및 관련 밸류체인(반도체 소부장)으로의 개인 수급 유입 기대.",
            action: "Strong Buy (유동성 수혜)",
            topPick: "PLUS 글로벌HBM반도체"
        }
    },
    quantSignals: {
        momentum: "Strong (상승세 유지)",
        volatility: "High (변동성 확대 주의)",
        volume: "Moderate (눈치보기 장세)"
    },
    finalVerdict: {
        status: "LIQUIDITY BOOST (OPI 유동성 효과)",
        desc: "미 셧다운 노이즈는 단기적일 것입니다. 오히려 <strong>삼성 OPI 지급</strong>으로 인한 개인 유동성 유입이 하방을 지지할 것입니다. <strong>반도체와 로봇</strong> 중심의 저가 매수 기회로 삼으십시오."
    }
};

export const etfBuySellData = [
    {
        name: "PLUS 글로벌HBM반도체",
        code: "461580",
        rank: "1위 (주간 +37.8%)",
        action: "STRONG BUY",
        actionColor: '#DC2626',
        actionBg: '#FEF2F2',
        holdings: [
            { name: "NVIDIA", ratio: "25.5%" },
            { name: "SK하이닉스", ratio: "20.1%" },
            { name: "TSMC", ratio: "15.3%" },
            { name: "삼성전자", ratio: "12.2%" },
            { name: "AMD", ratio: "8.5%" }
        ],
        fundamental: {
            thesis: "[유동성 수혜 집중] 삼성전자, SK하이닉스 비중이 높아 <strong>삼성 OPI 지급</strong>에 따른 개인 수급 유입이 가장 기대되는 ETF입니다. 엔비디아의 AI 모멘텀과 국내 유동성 호재의 교집합.",
            metrics: [
                { label: "P/E Ratio", value: "28.5x", judge: "성장성 감안 저평가" },
                { label: "EPS Growth", value: "+45%", judge: "초고속 성장" },
                { label: "Liquidity", value: "High", judge: "수급 개선" }
            ]
        },
        competitor: {
            name: "vs TIGER 미국필라델피아반도체",
            analysis: "필라반도체 대비 HBM/AI 집중도가 높아 현재 장세에서 아웃퍼폼 예상."
        },
        flow: "외국인 및 기관 동반 순매수 전환.",
        technical: {
            trend: "신고가 경신 시도 중",
            indicators: ["RSI(14): 72 (강세 지속)", "MACD: 매수 신호 확산"]
        },
        scenarios: {
            bull: { percent: "70%", target: "21,000원", desc: "AI 모멘텀 재점화로 신고가 돌파" },
            bear: { percent: "30%", target: "18,500원", desc: "단기 급등에 따른 기간 조정" }
        },
        strategy: {
            entry: "시초가 공격적 매수",
            goal: "23,000원",
            stop: "17,800원"
        }
    },
    {
        name: "KODEX 로봇액티브",
        code: "442650",
        rank: "4위 (주간 +36.0%)",
        action: "BUY (승부주)",
        actionColor: '#EA580C',
        actionBg: '#FFF7ED',
        holdings: [
            { name: "두산로보틱스", ratio: "18.2%" },
            { name: "레인보우로보틱스", ratio: "15.5%" },
            { name: "삼성전자", ratio: "10.1%" },
            { name: "뉴로메카", ratio: "8.4%" },
            { name: "티로보틱스", ratio: "6.7%" }
        ],
        fundamental: {
            thesis: "[성장주로의 피난] 미 셧다운 우려 등 매크로 노이즈가 커질수록, 확실한 성장 스토리가 있는 로봇 섹터라 매력적입니다. 대기업 투자 가시화로 하방 경직성이 확보되었습니다.",
            metrics: [
                { label: "P/B Ratio", value: "4.5x", judge: "프리미엄 부여" },
                { label: "Growth", value: "High", judge: "산업 태동기" },
                { label: "Volume", value: "Surge", judge: "매집 징후" }
            ]
        },
        competitor: {
            name: "vs TIGER 글로벌AI로봇",
            analysis: "국내 로봇 기업들의 주가 탄력성이 더 좋아 단기 수익률 유리."
        },
        flow: "투신권(사모펀드) 매수세 포착.",
        technical: {
            trend: "장기 박스권 상단 돌파 시도",
            indicators: ["Obv: 우상향", "Stochastics: 과매수권 진입", "Bollinger: 상단 확장"]
        },
        scenarios: {
            bull: { percent: "65%", target: "14,500원", desc: "박스권 돌파 시 강력한 숏커버링" },
            bear: { percent: "35%", target: "11,200원", desc: "돌파 실패 시 실망 매물 출회" }
        },
        strategy: {
            entry: "분할 매수 (눌림목 공략)",
            goal: "16,000원",
            stop: "10,800원"
        }
    }
];

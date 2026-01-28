
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
    executiveSummary: `"<strong>Sector Rotation Confirmed (주도주 손바뀜)</strong>. 기존 <strong>반도체 독주</strong> 체제에서 <strong>2차전지(Batteries)</strong>와 <strong>우주항공(Space)</strong>으로 매수세가 확산되고 있습니다. 특히 2차전지 섹터의 숏커버링(Short-covering) 유입이 랭킹 급상승을 견인했습니다.<br><br><span style='color:#EF4444; font-weight:800;'>[Change vs Yesterday]</span>: 어제(1/27) 분석에서는 <strong>AI 반도체(HBM)</strong> 비중 확대를 권고했으나, 금일은 반도체 차익 실현 후 <strong>2차전지/우주항공</strong>으로의 포트폴리오 리밸런싱을 강력 제안합니다. 시장 색깔이 하루 만에 '성장주 소외'에서 '순환매'로 급변했습니다."`,
    sentimentMacro: {
        fearGreedIndex: { value: 72, status: "Greed", desc: "전일(68) 대비 상승. 공포 심리가 걷히고 FOMO(놓칠까 두려움) 심리가 유입되기 시작함." },
        putCallRatio: { value: 0.78, desc: "콜옵션 집중 심화. 어제보다 하락 베팅이 더 줄어듦." }
    },
    globalLiquidity: {
        foreignNetBuying: "전기전자 차익 실현 후 <strong>화학/운수장비</strong> 섹터로 순매수 전환. (전일: 전기전자 집중)",
        sectorRotation: "AI반도체(Rest) → <strong>2차전지/소재(Breakout)</strong>. 어제까지의 주도주 쉬어가기 국면.",
        usdKrw: "1,315원으로 소폭 하락. 환율 안정화가 외국인 수급 이동(반도체->2차전지)을 돕는 중."
    },
    sectorAnalysis: {
        space: {
            title: "🚀 우주항공 (Aerospace) - 2일 연속 강세",
            desc: "1위 수성. 어제 제시한 목표가 도달 후에도 매수세가 꺾이지 않음. 단순 테마를 넘어선 <strong>수주 산업</strong>으로서의 밸류에이션 리레이팅 지속.",
            action: "Strong Buy (유지)",
            topPick: "PLUS 우주항공&UAM"
        },
        semi: {
            title: "🔋 2차전지 (Batteries) - 극적인 턴어라운드",
            desc: "<span style='color:#EF4444'>[NEW]</span> 어제까지 분석 대상에서 제외되었으나, 금일 <strong>거래량 폭발</strong>과 함께 주도 섹터로 급부상. 낙폭 과대 인식에 따른 <strong>저가 매수세</strong> 유입 확인.",
            action: "Buy (신규 편입)",
            topPick: "TIGER 2차전지TOP10"
        }
    },
    quantSignals: {
        momentum: "Very Strong (↑)",
        volatility: "High",
        volume: "Explosive (전일비 +20%)"
    },
    finalVerdict: {
        status: "AGGRESSIVE ROTATION (공격적 순환매)",
        desc: "지수는 완만한 상승이지만 종목별 등락은 매우 큽니다. 어제 매수한 반도체 수익을 확정 짓고, <strong>이제 막 출발하는 2차전지</strong>에 올라타는 기민한 대응이 필요합니다."
    }
};

export const etfBuySellData = [
    {
        name: "PLUS 우주항공&UAM",
        code: "461580",
        rank: "1위 (주간 +55.1%)",
        action: "HOLD & ADD",
        actionColor: '#16A34A',
        actionBg: '#F0FDF4',
        holdings: [
            { name: "한화에어로스페이스", ratio: "25.1%" },
            { name: "한국항공우주", ratio: "18.5%" },
            { name: "한화시스템", ratio: "12.8%" },
            { name: "LIG넥스원", ratio: "11.2%" },
            { name: "현대로템", ratio: "9.8%" }
        ],
        fundamental: {
            thesis: "[전일 대비] 어제에 이어 모멘텀 지속. 차익 실현 욕구가 강해질 수 있으나, 외국인 매수세가 여전히 견고함. 추세가 꺾이기 전까지는 보유 관점 유지.",
            metrics: [
                { label: "P/E Ratio", value: "24.1x", judge: "적정" },
                { label: "EPS Growth", value: "+38%", judge: "초고성장" },
                { label: "Momentum", value: "98/100", judge: "최상" }
            ]
        },
        competitor: {
            name: "vs KODEX 방산",
            analysis: "순수 방산보다 우주 테마가 섞인 동 ETF의 베타가 더 높음. 상승장에서 유리."
        },
        flow: "기관 소폭 순매도 전환했으나 외국인은 지속 매수세.",
        technical: {
            trend: "파라볼릭 상승세 (과열권)",
            indicators: ["RSI(14): 78 (과매수 유지)", "MFI: 82", "DMI: +DI 우위"]
        },
        scenarios: {
            bull: { percent: "60%", target: "17,200원", desc: "추가 수주 공시 시 2차 슈팅" },
            bear: { percent: "40%", target: "14,500원", desc: "과열권 진입에 따른 기술적 조정" }
        },
        strategy: {
            entry: "조정 시 추가 매수",
            goal: "18,000원",
            stop: "13,500원"
        }
    },
    {
        name: "TIGER 2차전지TOP10",
        code: "364980",
        rank: "3위 (주간 +38.7%)",
        action: "AGGRESSIVE BUY",
        actionColor: '#DC2626',
        actionBg: '#FEF2F2',
        holdings: [
            { name: "LG에너지솔루션", ratio: "22.5%" },
            { name: "POSCO홀딩스", ratio: "19.2%" },
            { name: "삼성SDI", ratio: "15.8%" },
            { name: "에코프로비엠", ratio: "10.4%" },
            { name: "포스코퓨처엠", ratio: "9.5%" }
        ],
        fundamental: {
            thesis: "[전일 대비] 어제까지는 '관망' 의견이었으나 금일 '적극 매수'로 상향. 바닥 확인 후 V자 반등 시작. 전기차 수요 둔화 우려보다 밸류에이션 매력이 부각되는 시점.",
            metrics: [
                { label: "P/B Ratio", value: "3.2x", judge: "저평가" },
                { label: "Short Int", value: "High", judge: "스퀴즈 가능" },
                { label: "RSI", value: "65", judge: "상승 여력" }
            ]
        },
        competitor: {
            name: "vs KODEX 2차전지산업",
            analysis: "TOP10 위주의 구성으로 대형주 반등 장세에서 안정적인 수익 추구 가능."
        },
        flow: "연기금 저가 매수 유입 포착 (신규).",
        technical: {
            trend: "역헤드앤숄더 패턴 완성 후 넥라인 돌파",
            indicators: ["MACD: 골든크로스", "Volume: 전일비 300%", "Candle: 장대양봉"]
        },
        scenarios: {
            bull: { percent: "80%", target: "22,000원", desc: "숏커버링 유입 시 폭발적 상승" },
            bear: { percent: "20%", target: "17,000원", desc: "단기 매물대 저항 맞고 횡보" }
        },
        strategy: {
            entry: "현재가 (시장가 진입)",
            goal: "24,000원 (+20%)",
            stop: "16,500원"
        }
    }
];

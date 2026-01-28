import type { RankingReport } from '../types';

export const initialData: RankingReport = {
    date: '2026-01-28',
    categories: [
        {
            categoryName: "국내 주식 (Domestic Stock)",
            items: [
                { rank: 1, name: "PLUS 우주항공&UAM", yield1W: "+55.1%", yield1M: "+62.4%", yield3M: "+68.2%", yield6M: "+190.5%" },
                { rank: 2, name: "ACE AI반도체포커스", yield1W: "+42.3%", yield1M: "+45.1%", yield3M: "+120.5%", yield6M: "+145.2%" },
                { rank: 3, name: "TIGER 2차전지TOP10", yield1W: "+38.7%", yield1M: "+41.2%", yield3M: "+105.3%", yield6M: "+150.1%" },
                { rank: 4, name: "PLUS 글로벌H/반도체", yield1W: "+31.5%", yield1M: "+46.9%", yield3M: "+160.1%", yield6M: "+210.5%" },
                { rank: 5, name: "RISE AI반도체", yield1W: "+29.8%", yield1M: "+55.2%", yield3M: "+82.4%", yield6M: "+105.5%" },
                { rank: 6, name: "KODEX 2차전지핵심소재10 Fn", yield1W: "+28.5%", yield1M: "+39.8%", yield3M: "+99.5%", yield6M: "+142.0%" },
                { rank: 7, name: "SOL 반도체소부장Fn", yield1W: "+25.4%", yield1M: "+30.1%", yield3M: "+80.5%", yield6M: "+90.2%" },
                { rank: 8, name: "RISE 2차전지TOP10", yield1W: "+24.9%", yield1M: "+38.5%", yield3M: "+95.2%", yield6M: "+135.4%" },
                { rank: 9, name: "TIGER 반도체 TOP10", yield1W: "+22.1%", yield1M: "+29.5%", yield3M: "+105.1%", yield6M: "+140.8%" },
                { rank: 10, name: "HANARO 글로벌금채굴기업", yield1W: "+19.8%", yield1M: "+54.2%", yield3M: "+115.3%", yield6M: "+198.5%" }
            ]
        },
        {
            categoryName: "채권 (Bond)",
            items: [
                { rank: 1, name: "SOL 미국30년국채커버드콜(합성)", yield1W: "-0.1%", yield1M: "+1.0%", yield3M: "+10.3%", yield6M: "-" },
                { rank: 2, name: "PLUS 미국장기우량회사채", yield1W: "+0.2%", yield1M: "-0.4%", yield3M: "+9.6%", yield6M: "+7.9%" },
                { rank: 3, name: "KODEX iShares미국하이일드액티브", yield1W: "-0.3%", yield1M: "+2.0%", yield3M: "+7.8%", yield6M: "+6.6%" },
                { rank: 4, name: "KODEX iShares미국투자등급회사채액티브", yield1W: "-0.2%", yield1M: "+0.5%", yield3M: "+8.2%", yield6M: "+7.5%" },
                { rank: 5, name: "TIGER 단기선진하이일드(합성)", yield1W: "+0.5%", yield1M: "+0.7%", yield3M: "+2.6%", yield6M: "+6.3%" },
                { rank: 6, name: "PLUS 미국단기회사채", yield1W: "+0.2%", yield1M: "+1.5%", yield3M: "+6.0%", yield6M: "+3.3%" },
                { rank: 7, name: "ACE 미국하이일드액티브", yield1W: "+0.6%", yield1M: "+0.8%", yield3M: "+1.9%", yield6M: "+5.2%" },
                { rank: 8, name: "RISE 미국단기투자등급회사채액티브", yield1W: "-0.5%", yield1M: "+1.5%", yield3M: "+6.8%", yield6M: "+5.0%" },
                { rank: 9, name: "KODEX 아시아달러채권SRI플러스액티브", yield1W: "-0.5%", yield1M: "+1.0%", yield3M: "+7.2%", yield6M: "+6.4%" },
                { rank: 10, name: "KODEX 미국30년국채(H)", yield1W: "+1.0%", yield1M: "-1.4%", yield3M: "+3.3%", yield6M: "+5.3%" },
                { rank: 11, name: "RISE 미국30년국채커버드콜", yield1W: "-0.3%", yield1M: "+1.1%", yield3M: "+10.4%", yield6M: "+9.5%" },
                { rank: 12, name: "ACE 미국달러단기채권액티브", yield1W: "-0.6%", yield1M: "+1.5%", yield3M: "+5.8%", yield6M: "+2.1%" },
                { rank: 13, name: "WON 전단채플러스액티브", yield1W: "+0.4%", yield1M: "+0.8%", yield3M: "+1.5%", yield6M: "+3.4%" },
                { rank: 14, name: "ACE 11월만기자동연장회사채", yield1W: "+0.3%", yield1M: "+0.8%", yield3M: "+1.4%", yield6M: "+3.2%" },
                { rank: 15, name: "KODEX 머니마켓액티브", yield1W: "+0.3%", yield1M: "+0.8%", yield3M: "+1.5%", yield6M: "+3.2%" },
                { rank: 16, name: "PLUS 국공채머니마켓액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.0%" },
                { rank: 17, name: "ACE 8월만기자동연장회사채", yield1W: "+0.4%", yield1M: "+0.5%", yield3M: "+1.2%", yield6M: "+2.8%" },
                { rank: 18, name: "TIGER 미국투자등급회사채액티브", yield1W: "+0.5%", yield1M: "+0.7%", yield3M: "+3.4%", yield6M: "+7.9%" },
                { rank: 19, name: "SOL 초단기채권액티브", yield1W: "+0.3%", yield1M: "+0.8%", yield3M: "+1.5%", yield6M: "+3.2%" },
                { rank: 20, name: "KODEX 머니마켓액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.2%" }
            ]
        },
        {
            categoryName: "금/원자재 (Gold/Commodity)",
            items: [
                { rank: 1, name: "KODEX 은선물(H)", yield1W: "+48.8%", yield1M: "+19.8%", yield3M: "+168.2%", yield6M: "+229.0%" },
                { rank: 2, name: "TIGER 금은선물(H)", yield1W: "+16.0%", yield1M: "+31.4%", yield3M: "+55.8%", yield6M: "+88.1%" },
                { rank: 3, name: "ACE KRX금현물", yield1W: "+10.6%", yield1M: "+25.9%", yield3M: "+57.3%", yield6M: "+79.8%" },
                { rank: 4, name: "KODEX 골드선물(H)", yield1W: "+12.7%", yield1M: "+23.3%", yield3M: "+46.5%", yield6M: "+79.1%" },
                { rank: 5, name: "RISE 골드선물(H)", yield1W: "+12.6%", yield1M: "+23.5%", yield3M: "+46.4%", yield6M: "+78.3%" },
                { rank: 6, name: "TIGER 골드선물(H)", yield1W: "+14.0%", yield1M: "+25.6%", yield3M: "+50.0%", yield6M: "+105.0%" },
                { rank: 7, name: "TIGER 구리실물(H)", yield1W: "+5.4%", yield1M: "+18.0%", yield3M: "+30.0%", yield6M: "+36.2%" },
                { rank: 8, name: "KODEX 구리선물(H)", yield1W: "+6.0%", yield1M: "+12.5%", yield3M: "+11.1%", yield6M: "+27.1%" },
                { rank: 9, name: "TIGER 금속선물(H)", yield1W: "+1.5%", yield1M: "-1.0%", yield3M: "+1.0%", yield6M: "+12.5%" },
                { rank: 10, name: "KODEX WTI원유선물(H)", yield1W: "+5.8%", yield1M: "+0.3%", yield3M: "-3.1%", yield6M: "-1.5%" },
                { rank: 11, name: "KODEX 콩선물(H)", yield1W: "-0.6%", yield1M: "-1.2%", yield3M: "+1.6%", yield6M: "+1.5%" },
                { rank: 12, name: "KODEX 3대농산물선물(H)", yield1W: "-2.7%", yield1M: "-2.3%", yield3M: "-4.5%", yield6M: "-9.9%" },
                { rank: 13, name: "TIGER 농산물선물Enhanced(H)", yield1W: "-1.5%", yield1M: "-1.2%", yield3M: "-4.2%", yield6M: "-9.9%" }
            ]
        },
        {
            categoryName: "부동산 (Real Estate)",
            items: [
                { rank: 1, name: "TIGER 리츠부동산인프라", yield1W: "+3.1%", yield1M: "+5.4%", yield3M: "+11.6%", yield6M: "+21.3%" },
                { rank: 2, name: "PLUS K-리츠복합투자", yield1W: "+2.6%", yield1M: "+5.3%", yield3M: "+11.6%", yield6M: "+19.3%" },
                { rank: 3, name: "WON 한국부동산리츠", yield1W: "+2.8%", yield1M: "+4.9%", yield3M: "+8.5%", yield6M: "+15.9%" },
                { rank: 4, name: "RISE 글로벌데이터센터리츠", yield1W: "+6.1%", yield1M: "-6.5%", yield3M: "+10.7%", yield6M: "+16.3%" },
                { rank: 5, name: "KBSTAR 싱가포르리츠", yield1W: "+1.9%", yield1M: "+2.8%", yield3M: "+16.9%", yield6M: "+25.3%" },
                { rank: 6, name: "KODEX 한국부동산리츠인프라", yield1W: "+2.2%", yield1M: "+4.2%", yield3M: "+8.9%", yield6M: "+16.6%" },
                { rank: 7, name: "RISE 글로벌리얼티인컴", yield1W: "+2.6%", yield1M: "+0.4%", yield3M: "+4.9%", yield6M: "+8.5%" },
                { rank: 8, name: "TIGER 미국MSCI리츠(H)", yield1W: "+2.6%", yield1M: "-1.2%", yield3M: "+3.8%", yield6M: "+6.3%" },
                { rank: 9, name: "KODEX 미국부동산리츠(H)", yield1W: "+2.6%", yield1M: "-2.2%", yield3M: "+0.3%", yield6M: "+4.7%" },
                { rank: 10, name: "KODEX 일본부동산리츠(H)", yield1W: "-1.4%", yield1M: "+1.2%", yield3M: "+11.6%", yield6M: "+26.1%" },
                { rank: 11, name: "ACE 미국부동산리츠(합성)", yield1W: "+2.1%", yield1M: "-3.4%", yield3M: "-0.3%", yield6M: "+6.5%" }
            ]
        },
        {
            categoryName: "혼합자산 (Mixed Asset)",
            items: [
                { rank: 1, name: "RISE 미국S&P500", yield1W: "+15.8%", yield1M: "+19.4%", yield3M: "+46.7%", yield6M: "+77.3%" },
                { rank: 2, name: "RISE 삼성그룹밸류", yield1W: "+7.3%", yield1M: "+12.5%", yield3M: "+28.7%", yield6M: "+33.8%" },
                { rank: 3, name: "KODEX 삼성전자채권혼합", yield1W: "+10.1%", yield1M: "+12.9%", yield3M: "+29.6%", yield6M: "+40.2%" },
                { rank: 4, name: "RISE 200고배당채권혼합", yield1W: "+9.4%", yield1M: "+10.8%", yield3M: "+21.8%", yield6M: "+33.2%" },
                { rank: 5, name: "KODEX 200미국채혼합", yield1W: "+0.7%", yield1M: "+28.3%", yield3M: "+42.5%", yield6M: "-" },
                { rank: 6, name: "RISE 미국S&P500셀렉트밸류채권혼합", yield1W: "+8.4%", yield1M: "+9.8%", yield3M: "+18.3%", yield6M: "+31.1%" },
                { rank: 7, name: "KODEX 코리아배당성장채권혼합", yield1W: "+5.5%", yield1M: "+5.9%", yield3M: "+8.0%", yield6M: "+10.7%" },
                { rank: 8, name: "PLUS 고배당주채권혼합", yield1W: "+1.1%", yield1M: "+7.5%", yield3M: "+7.3%", yield6M: "+25.9%" },
                { rank: 9, name: "KODEX 코리아배당성장채권혼합", yield1W: "+3.4%", yield1M: "+5.2%", yield3M: "+5.6%", yield6M: "+18.3%" },
                { rank: 10, name: "KIWOOM TDF2050", yield1W: "+1.7%", yield1M: "+3.0%", yield3M: "+14.6%", yield6M: "+18.5%" },
                { rank: 11, name: "PLUS 스마트베타Quality혼합", yield1W: "+2.5%", yield1M: "+4.7%", yield3M: "+6.6%", yield6M: "+17.1%" },
                { rank: 12, name: "SOL 미국배당미국채혼합", yield1W: "+1.5%", yield1M: "+5.1%", yield3M: "+11.0%", yield6M: "+8.3%" },
                { rank: 13, name: "TIGER 리츠부동산인프라채권", yield1W: "+2.6%", yield1M: "+3.3%", yield3M: "+7.3%", yield6M: "+14.3%" },
                { rank: 14, name: "KODEX 멀티에셋하이인컴", yield1W: "+2.5%", yield1M: "+3.0%", yield3M: "+7.0%", yield6M: "+15.9%" },
                { rank: 15, name: "KIWOOM TDF2040", yield1W: "+1.5%", yield1M: "+2.4%", yield3M: "+13.1%", yield6M: "+16.8%" },
                { rank: 16, name: "TIGER 경기방어채권혼합", yield1W: "+2.4%", yield1M: "+3.5%", yield3M: "+3.9%", yield6M: "+10.7%" },
                { rank: 17, name: "RISE 글로벌자산배분액티브", yield1W: "+1.0%", yield1M: "+2.9%", yield3M: "+12.0%", yield6M: "+16.2%" },
                { rank: 18, name: "ACE 미국고정배당우선증권", yield1W: "+1.8%", yield1M: "+0.1%", yield3M: "+9.4%", yield6M: "+3.0%" }
            ]
        },
        {
            categoryName: "통화/기타 (Currency/Other)",
            items: [
                { rank: 1, name: "SOL 글로벌탄소배출권선물(합성)", yield1W: "-0.7%", yield1M: "+10.8%", yield3M: "+27.4%", yield6M: "+28.1%" },
                { rank: 2, name: "SOL 유럽탄소배출권(합성)", yield1W: "-0.3%", yield1M: "+9.4%", yield3M: "+23.2%", yield6M: "+15.4%" },
                { rank: 3, name: "KODEX 유럽탄소배출권선물(H)", yield1W: "-0.4%", yield1M: "+8.9%", yield3M: "+21.3%", yield6M: "+13.3%" },
                { rank: 4, name: "HANARO 글로벌탄소배출권선물(합성)", yield1W: "-1.4%", yield1M: "+9.0%", yield3M: "+25.9%", yield6M: "+26.0%" },
                { rank: 5, name: "RISE TDF2050", yield1W: "+1.9%", yield1M: "+3.1%", yield3M: "+14.4%", yield6M: "+21.0%" },
                { rank: 6, name: "RISE TDF2040", yield1W: "+1.5%", yield1M: "+2.3%", yield3M: "+12.0%", yield6M: "+17.7%" },
                { rank: 7, name: "RISE TDF2030", yield1W: "+0.9%", yield1M: "+0.5%", yield3M: "+8.4%", yield6M: "+12.5%" },
                { rank: 8, name: "TIGER 미국달러SOFR금리", yield1W: "-0.3%", yield1M: "+1.6%", yield3M: "+5.9%", yield6M: "+2.3%" },
                { rank: 9, name: "KIWOOM 미국달러선물", yield1W: "-0.6%", yield1M: "+1.5%", yield3M: "+5.8%", yield6M: "+2.0%" },
                { rank: 10, name: "PLUS 미국달러SOFR금리", yield1W: "-0.5%", yield1M: "+1.6%", yield3M: "+6.0%", yield6M: "+2.2%" },
                { rank: 11, name: "ACE 미국달러SOFR금리", yield1W: "-0.5%", yield1M: "+1.5%", yield3M: "+5.9%", yield6M: "+2.2%" },
                { rank: 12, name: "KODEX 미국달러선물", yield1W: "-0.6%", yield1M: "+1.5%", yield3M: "+5.8%", yield6M: "+2.1%" },
                { rank: 13, name: "KIWOOM 미국달러SOFR금리", yield1W: "-0.6%", yield1M: "+1.4%", yield3M: "+5.9%", yield6M: "+2.2%" },
                { rank: 14, name: "KODEX 미국달러SOFR금리", yield1W: "-0.6%", yield1M: "+1.5%", yield3M: "+6.0%", yield6M: "+2.1%" },
                { rank: 15, name: "KODEX CD금리액티브", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+2.9%" },
                { rank: 16, name: "PLUS 국공채머니마켓액티브", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+2.9%" },
                { rank: 17, name: "RISE 미국달러SOFR금리", yield1W: "-0.7%", yield1M: "+1.3%", yield3M: "+5.9%", yield6M: "+2.3%" },
                { rank: 18, name: "TIGER CD금리투자KIS", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+2.9%" },
                { rank: 19, name: "KODEX KOFR금리액티브", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+2.8%" },
                { rank: 20, name: "TIGER KOFR금리액티브", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.3%", yield6M: "+2.8%" }
            ]
        }
    ]
};

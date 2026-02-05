import type { RankingReport } from '../types';

export const initialData: RankingReport = {
    date: '2026-02-05',
    categories: [
        {
            categoryName: "국내 주식 (Domestic Stock)",
            items: [
                { rank: 1, name: "PLUS 글로벌HBM반도체", yield1M: "+37.8%", yield3M: "+60.3%", yield6M: "+191.3%", yield1Y: "+241.4%" },
                { rank: 2, name: "PLUS 우주항공&UAM", yield1M: "+50.0%", yield3M: "+66.3%", yield6M: "+65.5%", yield1Y: "+181.9%" },
                { rank: 3, name: "TIGER 반도체TOP10", yield1M: "+38.2%", yield3M: "+49.4%", yield6M: "+137.9%", yield1Y: "+174.6%" },
                { rank: 4, name: "TIGER 반도체", yield1M: "+35.4%", yield3M: "+51.0%", yield6M: "+142.3%", yield1Y: "+170.3%" },
                { rank: 5, name: "KODEX 로봇액티브", yield1M: "+36.0%", yield3M: "+60.3%", yield6M: "+118.6%", yield1Y: "+166.5%" },
                { rank: 6, name: "RISE AI&로봇", yield1M: "+39.5%", yield3M: "+60.1%", yield6M: "+91.2%", yield1Y: "+111.5%" },
                { rank: 7, name: "KODEX 반도체", yield1M: "+34.7%", yield3M: "+50.2%", yield6M: "+139.8%", yield1Y: "+166.8%" },
                { rank: 8, name: "ACE AI반도체포커스", yield1M: "+34.1%", yield3M: "+42.6%", yield6M: "+140.1%", yield1Y: "+163.7%" },
                { rank: 9, name: "HANARO Fn K-반도체", yield1M: "+32.5%", yield3M: "+45.3%", yield6M: "+142.1%", yield1Y: "+186.3%" },
                { rank: 10, name: "UNICORN SK하이닉스밸류체인액티브", yield1M: "+34.6%", yield3M: "+39.9%", yield6M: "+138.1%", yield1Y: "+181.3%" },
                { rank: 11, name: "KODEX AI반도체", yield1M: "+33.6%", yield3M: "+42.2%", yield6M: "+131.2%", yield1Y: "+180.2%" },
                { rank: 12, name: "TIGER 200 IT", yield1M: "+27.8%", yield3M: "+44.3%", yield6M: "+136.0%", yield1Y: "+170.9%" },
                { rank: 13, name: "HANARO 반도체핵심공정주도주", yield1M: "+41.1%", yield3M: "+25.8%", yield6M: "+92.5%", yield1Y: "+76.8%" },
                { rank: 14, name: "BNK 온디바이스AI", yield1M: "+30.0%", yield3M: "+42.5%", yield6M: "+125.0%", yield1Y: "+154.2%" },
                { rank: 15, name: "TIGER 코리아TOP10", yield1M: "+31.1%", yield3M: "+46.3%", yield6M: "+110.1%", yield1Y: "+154.6%" },
                { rank: 16, name: "RISE 대형고배당10TR", yield1M: "+29.9%", yield3M: "+47.5%", yield6M: "+113.6%", yield1Y: "+173.6%" },
                { rank: 17, name: "SOL 반도체전공정", yield1M: "+40.5%", yield3M: "+27.1%", yield6M: "+89.4%", yield1Y: "+114.5%" },
                { rank: 18, name: "KODEX 200IT TR", yield1M: "+29.6%", yield3M: "+39.7%", yield6M: "+129.5%", yield1Y: "+170.0%" },
                { rank: 19, name: "WON 반도체밸류체인액티브", yield1M: "+30.2%", yield3M: "+35.9%", yield6M: "+125.1%", yield1Y: "+185.1%" },
                { rank: 20, name: "KODEX 증권", yield1M: "+40.0%", yield3M: "+35.4%", yield6M: "+64.6%", yield1Y: "+198.1%" }
            ]
        },
        {
            categoryName: "채권 (Bond)",
            items: [
                { rank: 1, name: "KODEX iShares미국하이일드액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+8.1%", yield1Y: "+6.0%" },
                { rank: 2, name: "PLUS 일본엔화초단기국채(합성)", yield1M: "+1.8%", yield3M: "-0.9%", yield6M: "-0.5%", yield1Y: "-0.1%" },
                { rank: 3, name: "ACE 미국하이일드액티브(H)", yield1M: "+0.6%", yield3M: "+0.8%", yield6M: "+2.0%", yield1Y: "+4.9%" },
                { rank: 4, name: "[주의] PLUS 미국단기회사채(AAA~A)", yield1M: "-0.2%", yield3M: "+0.3%", yield6M: "+6.6%", yield1Y: "+2.7%" },
                { rank: 5, name: "[주의] RISE 미국단기투자등급회사채액티브", yield1M: "-0.3%", yield3M: "+0.1%", yield6M: "+7.1%", yield1Y: "+4.4%" },
                { rank: 6, name: "ACE 11월만기자동연장회사채AA-이상액티브", yield1M: "+0.3%", yield3M: "+0.8%", yield6M: "+1.5%", yield1Y: "+3.2%" },
                { rank: 7, name: "[주의] TIGER 단기선진하이일드(합성 H)", yield1M: "+0.3%", yield3M: "+0.8%", yield6M: "+1.6%", yield1Y: "+6.4%" },
                { rank: 8, name: "KODEX 머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.8%", yield6M: "+1.5%", yield1Y: "+3.1%" },
                { rank: 9, name: "WON 전단채플러스액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.4%" },
                { rank: 10, name: "SOL 초단기채권액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.2%" },
                { rank: 11, name: "SOL CD금리&머니마켓액티브", yield1M: "+0.2%", yield3M: "+0.8%", yield6M: "+1.5%", yield1Y: "+3.2%" },
                { rank: 12, name: "RISE 머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.1%" },
                { rank: 13, name: "1Q 머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.1%" },
                { rank: 14, name: "PLUS 국공채머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.3%", yield1Y: "+3.0%" },
                { rank: 15, name: "[주의] KODEX 아시아달러채권ESG플러스액티브", yield1M: "-0.3%", yield3M: "-0.6%", yield6M: "+7.5%", yield1Y: "+5.8%" },
                { rank: 16, name: "ACE 8월만기자동연장회사채AA-이상액티브", yield1M: "+0.3%", yield3M: "+0.5%", yield6M: "+1.2%", yield1Y: "+2.7%" },
                { rank: 17, name: "PLUS 머니마켓액티브", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.1%" },
                { rank: 18, name: "ACE 머니마켓액티브", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.0%" },
                { rank: 19, name: "HANARO 머니마켓액티브", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.1%" },
                { rank: 20, name: "ACE 26-06 회사채(AA-이상)액티브", yield1M: "+0.3%", yield3M: "+0.6%", yield6M: "+1.2%", yield1Y: "+3.1%" }
            ]
        },
        {
            categoryName: "금/원자재 (Gold/Commodity)",
            items: [
                { rank: 1, name: "KODEX 은선물(H)", yield1M: "+47.8%", yield3M: "+121.6%", yield6M: "+177.4%", yield1Y: "+228.5%" },
                { rank: 2, name: "TIGER 금은선물(H)", yield1M: "+21.7%", yield3M: "+36.1%", yield6M: "+62.2%", yield1Y: "+90.3%" },
                { rank: 3, name: "ACE KRX금현물", yield1M: "+19.1%", yield3M: "+35.8%", yield6M: "+69.0%", yield1Y: "+92.0%" },
                { rank: 4, name: "TIGER 골드선물(H)", yield1M: "+16.2%", yield3M: "+30.6%", yield6M: "+51.5%", yield1Y: "+84.9%" },
                { rank: 5, name: "KODEX 골드선물(H)", yield1M: "+17.3%", yield3M: "+27.3%", yield6M: "+51.1%", yield1Y: "+79.9%" },
                { rank: 6, name: "RISE 팔라듐선물(H)", yield1M: "+6.1%", yield3M: "+34.8%", yield6M: "+42.9%", yield1Y: "+92.4%" },
                { rank: 7, name: "KODEX WTI원유선물(H)", yield1M: "+11.6%", yield3M: "+7.7%", yield6M: "+0.9%", yield1Y: "-9.5%" },
                { rank: 8, name: "TIGER 원유선물Enhanced(H)", yield1M: "+11.1%", yield3M: "+7.5%", yield6M: "+1.1%", yield1Y: "-10.8%" },
                { rank: 9, name: "TIGER 구리실물", yield1M: "+0.2%", yield3M: "+18.5%", yield6M: "+31.9%", yield1Y: "+33.8%" },
                { rank: 10, name: "KODEX 구리선물(H)", yield1M: "+4.7%", yield3M: "+16.9%", yield6M: "+0.9%", yield1Y: "+27.0%" },
                { rank: 11, name: "KODEX 콩선물(H)", yield1M: "+2.0%", yield3M: "-4.9%", yield6M: "+2.4%", yield1Y: "+0.9%" },
                { rank: 12, name: "TIGER 농산물선물Enhanced(H)", yield1M: "+0.7%", yield3M: "-1.7%", yield6M: "-3.0%", yield1Y: "-9.2%" },
                { rank: 13, name: "KODEX 3대농산물선물(H)", yield1M: "+0.4%", yield3M: "-2.5%", yield6M: "-1.1%", yield1Y: "-10.9%" }
            ]
        },
        {
            categoryName: "부동산 (Real Estate)",
            items: [
                { rank: 1, name: "RISE 글로벌데이터센터리츠(합성)", yield1M: "+9.8%", yield3M: "-2.7%", yield6M: "+12.1%", yield1Y: "+19.2%" },
                { rank: 2, name: "TIGER 리츠부동산인프라", yield1M: "+3.4%", yield3M: "+5.5%", yield6M: "+12.0%", yield1Y: "+21.3%" },
                { rank: 3, name: "ACE 싱가포르리츠", yield1M: "+3.5%", yield3M: "+2.0%", yield6M: "+17.4%", yield1Y: "+25.6%" },
                { rank: 4, name: "WON 한국부동산TOP3플러스", yield1M: "+2.6%", yield3M: "+5.9%", yield6M: "+8.6%", yield1Y: "+16.0%" },
                { rank: 5, name: "PLUS K리츠", yield1M: "+2.3%", yield3M: "+4.7%", yield6M: "+11.2%", yield1Y: "+19.0%" },
                { rank: 6, name: "KODEX 한국부동산리츠인프라", yield1M: "+1.1%", yield3M: "+3.6%", yield6M: "+8.4%", yield1Y: "+16.3%" },
                { rank: 7, name: "RISE 글로벌리얼티인컴", yield1M: "+2.3%", yield3M: "+0.5%", yield6M: "+3.7%", yield1Y: "+5.9%" },
                { rank: 8, name: "[주의] TIGER 미국MSCI리츠(합성 H)", yield1M: "+0.8%", yield3M: "+0.3%", yield6M: "+1.1%", yield1Y: "+1.3%" },
                { rank: 9, name: "KODEX 일본부동산리츠(H)", yield1M: "-1.4%", yield3M: "+2.0%", yield6M: "+11.0%", yield1Y: "+26.4%" },
                { rank: 10, name: "[주의] ACE 미국부동산리츠(합성 H)", yield1M: "+1.2%", yield3M: "+0.7%", yield6M: "-2.4%", yield1Y: "+1.1%" },
                { rank: 11, name: "KODEX 미국부동산리츠(H)", yield1M: "+1.4%", yield3M: "-0.7%", yield6M: "-1.9%", yield1Y: "+4.6%" }
            ]
        },
        {
            categoryName: "혼합자산 (Mixed Asset)",
            items: [
                { rank: 1, name: "RISE 주식혼합", yield1M: "+18.4%", yield3M: "+23.8%", yield6M: "+54.2%", yield1Y: "+85.9%" },
                { rank: 2, name: "RISE 삼성그룹Top3채권혼합", yield1M: "+11.2%", yield3M: "+13.5%", yield6M: "+30.2%", yield1Y: "+36.3%" },
                { rank: 3, name: "KODEX 삼성전자채권혼합", yield1M: "+10.0%", yield3M: "+15.9%", yield6M: "+32.1%", yield1Y: "+42.9%" },
                { rank: 4, name: "RISE 채권혼합", yield1M: "+9.9%", yield3M: "+12.8%", yield6M: "+25.6%", yield1Y: "+37.1%" },
                { rank: 5, name: "KODEX 200미국채혼합", yield1M: "+8.9%", yield3M: "+11.1%", yield6M: "+31.0%", yield1Y: "+44.6%" },
                { rank: 6, name: "RISE V&S셀렉트밸류채권혼합", yield1M: "+7.8%", yield3M: "+10.3%", yield6M: "+20.5%", yield1Y: "+32.5%" },
                { rank: 7, name: "PLUS 고배당주채권혼합", yield1M: "+6.3%", yield3M: "+10.4%", yield6M: "+12.1%", yield1Y: "+28.1%" },
                { rank: 8, name: "KODEX 코리아배당성장채권혼합", yield1M: "+5.7%", yield3M: "+6.5%", yield6M: "+8.9%", yield1Y: "+19.9%" },
                { rank: 9, name: "RISE 글로벌자산배분액티브", yield1M: "+3.0%", yield3M: "+4.2%", yield6M: "+13.6%", yield1Y: "+17.6%" },
                { rank: 10, name: "KODEX 멀티에셋하이인컴(H)", yield1M: "+3.6%", yield3M: "+4.9%", yield6M: "+7.7%", yield1Y: "+16.0%" },
                { rank: 11, name: "KIWOOM TDF2050액티브", yield1M: "+2.7%", yield3M: "+2.7%", yield6M: "+15.5%", yield1Y: "+18.9%" },
                { rank: 12, name: "PLUS 스마트베타Quality채권혼합", yield1M: "+3.2%", yield3M: "+4.1%", yield6M: "+7.7%", yield1Y: "+17.0%" },
                { rank: 13, name: "KIWOOM TDF2040액티브", yield1M: "+2.5%", yield3M: "+2.4%", yield6M: "+14.3%", yield1Y: "+17.0%" },
                { rank: 14, name: "TIGER 경기방어채권혼합", yield1M: "+3.2%", yield3M: "+4.6%", yield6M: "+5.5%", yield1Y: "+11.9%" },
                { rank: 15, name: "RISE 헬스케어채권혼합", yield1M: "+2.7%", yield3M: "+4.7%", yield6M: "+7.6%", yield1Y: "+10.1%" }
            ]
        },
        {
            categoryName: "통화/기타 (Currency/Other)",
            items: [
                { rank: 1, name: "SOL 유럽탄소배출권선물S&P(H)", yield1M: "+0.9%", yield3M: "+10.0%", yield6M: "+24.5%", yield1Y: "+12.5%" },
                { rank: 2, name: "[주의] SOL 글로벌탄소배출권선물ICE(합성)", yield1M: "-0.2%", yield3M: "+8.9%", yield6M: "+26.3%", yield1Y: "+27.2%" },
                { rank: 3, name: "RISE TDF2050액티브", yield1M: "+3.4%", yield3M: "+3.2%", yield6M: "+15.8%", yield1Y: "+22.1%" },
                { rank: 4, name: "KODEX 유럽탄소배출권선물ICE(H)", yield1M: "+0.2%", yield3M: "+9.1%", yield6M: "+21.6%", yield1Y: "+10.4%" },
                { rank: 5, name: "[주의] HANARO 글로벌탄소배출권선물ICE(합성)", yield1M: "-0.4%", yield3M: "+8.8%", yield6M: "+25.7%", yield1Y: "+25.3%" },
                { rank: 6, name: "RISE TDF2040액티브", yield1M: "+2.9%", yield3M: "+2.4%", yield6M: "+13.3%", yield1Y: "+18.6%" },
                { rank: 7, name: "RISE TDF2030액티브", yield1M: "+1.6%", yield3M: "+0.5%", yield6M: "+9.0%", yield1Y: "+13.2%" },
                { rank: 8, name: "[주의] KIWOOM 미국달러선물", yield1M: "+0.1%", yield3M: "+1.9%", yield6M: "+6.3%", yield1Y: "+2.7%" },
                { rank: 9, name: "[주의] KODEX 미국달러선물", yield1M: "-", yield3M: "+1.9%", yield6M: "+6.2%", yield1Y: "+2.9%" },
                { rank: 10, name: "[주의] RISE 미국달러SOFR금리액티브(합성)", yield1M: "-0.1%", yield3M: "+0.3%", yield6M: "+6.4%", yield1Y: "+2.0%" },
                { rank: 11, name: "[주의] TIGER 미국달러SOFR금리액티브(합성)", yield1M: "-0.2%", yield3M: "+0.3%", yield6M: "+6.2%", yield1Y: "+1.7%" },
                { rank: 12, name: "[주의] KIWOOM 미국달러SOFR금리액티브(합성)", yield1M: "-0.2%", yield3M: "+0.3%", yield6M: "+6.4%", yield1Y: "+1.6%" },
                { rank: 13, name: "[주의] PLUS 미국달러SOFR금리액티브(합성)", yield1M: "-0.2%", yield3M: "+0.2%", yield6M: "+6.3%", yield1Y: "+1.7%" },
                { rank: 14, name: "[주의] KODEX 미국달러SOFR금리액티브(합성)", yield1M: "-0.3%", yield3M: "+0.4%", yield6M: "+6.2%", yield1Y: "+1.4%" },
                { rank: 15, name: "[주의] ACE 미국달러SOFR금리(합성)", yield1M: "-0.3%", yield3M: "+0.2%", yield6M: "+6.2%", yield1Y: "+1.6%" },
                { rank: 16, name: "KODEX CD1년금리플러스액티브(합성)", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+2.9%" },
                { rank: 17, name: "TIGER CD금리플러스액티브(합성)", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+2.9%" },
                { rank: 18, name: "TIGER CD금리투자KIS(합성)", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.3%", yield1Y: "+2.8%" },
                { rank: 19, name: "TIGER CD1년금리액티브(합성)", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+2.9%" },
                { rank: 20, name: "KODEX CD금리액티브(합성)", yield1M: "+0.2%", yield3M: "+0.7%", yield6M: "+1.3%", yield1Y: "+2.8%" }
            ]
        }
    ]
};

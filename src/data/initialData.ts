import type { RankingReport } from '../types';

export const initialData: RankingReport = {
    date: '2026-01-30',
    categories: [
        {
            categoryName: "국내 주식 (Domestic Stock)",
            items: [
                { rank: 1, name: "PLUS 글로벌HBM반도체", yield1W: "+37.8%", yield1M: "+60.3%", yield3M: "+191.3%", yield6M: "+241.4%" },
                { rank: 2, name: "PLUS 우주항공&UAM", yield1W: "+50.0%", yield1M: "+66.3%", yield3M: "+65.5%", yield6M: "+181.9%" },
                { rank: 3, name: "TIGER 반도체 TOP10", yield1W: "+38.2%", yield1M: "+49.4%", yield3M: "+137.9%", yield6M: "+174.6%" },
                { rank: 4, name: "KODEX 로봇액티브", yield1W: "+36.0%", yield1M: "+60.3%", yield3M: "+118.6%", yield6M: "+166.5%" },
                { rank: 5, name: "RISE AI반도체", yield1W: "+39.5%", yield1M: "+60.1%", yield3M: "+91.2%", yield6M: "+111.5%" },
                { rank: 6, name: "TIGER AI반도체핵심공정", yield1W: "+36.5%", yield1M: "+43.9%", yield3M: "+132.7%", yield6M: "+165.6%" },
                { rank: 7, name: "KODEX AI반도체핵심장비", yield1W: "+36.5%", yield1M: "+43.3%", yield3M: "+130.1%", yield6M: "+162.5%" },
                { rank: 8, name: "ACE AI반도체포커스", yield1W: "+34.1%", yield1M: "+42.6%", yield3M: "+140.1%", yield6M: "+163.7%" },
                { rank: 9, name: "HANARO Fn K-반도체", yield1W: "+35.5%", yield1M: "+45.4%", yield3M: "+142.1%", yield6M: "+186.3%" },
                { rank: 10, name: "UNICORN SK하이닉스밸류체인", yield1W: "+34.6%", yield1M: "+39.9%", yield3M: "+138.1%", yield6M: "+181.3%" },
                { rank: 11, name: "KODEX AI반도체핵심장비", yield1W: "+33.6%", yield1M: "+42.2%", yield3M: "+131.2%", yield6M: "+180.2%" },
                { rank: 12, name: "HANARO 반도체핵심공정주도주", yield1W: "+41.1%", yield1M: "+25.8%", yield3M: "+92.5%", yield6M: "+76.8%" },
                { rank: 13, name: "BNK 온디바이스AI", yield1W: "+30.0%", yield1M: "+42.5%", yield3M: "+125.0%", yield6M: "+154.2%" },
                { rank: 14, name: "TIGER 코리아반도체TOP10", yield1W: "+31.1%", yield1M: "+46.3%", yield3M: "+110.1%", yield6M: "+154.6%" },
                { rank: 15, name: "RISE 200대형고배당10TR", yield1W: "+20.8%", yield1M: "+47.5%", yield3M: "+102.7%", yield6M: "+173.6%" },
                { rank: 16, name: "SOL 반도체전공정", yield1W: "+40.5%", yield1M: "+27.1%", yield3M: "+89.4%", yield6M: "+114.5%" },
                { rank: 17, name: "KODEX 200IT", yield1W: "+29.6%", yield1M: "+39.7%", yield3M: "+129.5%", yield6M: "+170.0%" },
                { rank: 18, name: "TIGER 200 IT", yield1W: "+29.6%", yield1M: "+39.5%", yield3M: "+128.9%", yield6M: "+169.2%" },
                { rank: 19, name: "WON 반도체밸류체인액티브", yield1W: "+30.2%", yield1M: "+35.9%", yield3M: "+125.1%", yield6M: "+185.1%" },
                { rank: 20, name: "KIWOOM K-반도체", yield1W: "+34.2%", yield1M: "+34.2%", yield3M: "+99.7%", yield6M: "+114.3%" }
            ]
        },
        {
            categoryName: "채권 (Bond)",
            items: [
                { rank: 1, name: "KODEX iShares미국하이일드액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+8.1%", yield6M: "+6.0%" },
                { rank: 2, name: "PLUS 일본엔화초단기국채(합성)", yield1W: "+1.8%", yield1M: "-0.9%", yield3M: "-0.5%", yield6M: "-0.1%" },
                { rank: 3, name: "TIGER 단기선진하이일드(합성)", yield1W: "+0.6%", yield1M: "+0.7%", yield3M: "+2.9%", yield6M: "+6.1%" },
                { rank: 4, name: "ACE 미국하이일드액티브(H)", yield1W: "+0.6%", yield1M: "+0.8%", yield3M: "+2.0%", yield6M: "+4.9%" },
                { rank: 5, name: "PLUS 미국단기회사채", yield1W: "+0.3%", yield1M: "+0.1%", yield3M: "+2.7%", yield6M: "+3.3%" },
                { rank: 6, name: "RISE 미국단기투자등급회사채액티브", yield1W: "+0.3%", yield1M: "+0.1%", yield3M: "+7.1%", yield6M: "+4.4%" },
                { rank: 7, name: "ACE 11월만기자동연장회사채", yield1W: "+0.3%", yield1M: "+0.8%", yield3M: "+1.3%", yield6M: "+3.2%" },
                { rank: 8, name: "KODEX 머니마켓액티브", yield1W: "+0.3%", yield1M: "+0.8%", yield3M: "+1.5%", yield6M: "+3.2%" },
                { rank: 9, name: "WON 전단채플러스액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.4%" },
                { rank: 10, name: "SOL 초단기채권액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.2%" },
                { rank: 11, name: "SOL 국고채10년", yield1W: "+0.2%", yield1M: "+0.8%", yield3M: "+1.5%", yield6M: "+3.2%" },
                { rank: 12, name: "KBSTAR 머니마켓액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.1%" },
                { rank: 13, name: "HANARO 머니마켓액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.1%" },
                { rank: 14, name: "PLUS 국공채머니마켓액티브", yield1W: "+0.3%", yield1M: "+0.7%", yield3M: "+1.3%", yield6M: "+3.0%" },
                { rank: 15, name: "KODEX 아시아달러채권", yield1W: "-0.3%", yield1M: "-0.6%", yield3M: "+7.5%", yield6M: "+5.8%" },
                { rank: 16, name: "ACE 8월만기자동연장회사채", yield1W: "+0.3%", yield1M: "+0.5%", yield3M: "+1.2%", yield6M: "+2.7%" },
                { rank: 17, name: "PLUS 머니마켓액티브", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.1%" },
                { rank: 18, name: "ACE 머니마켓액티브", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.0%" },
                { rank: 19, name: "HANARO 단기채권액티브", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+3.1%" },
                { rank: 20, name: "ACE 26-06 회사채액티브", yield1W: "+0.3%", yield1M: "+0.6%", yield3M: "+1.2%", yield6M: "+3.1%" }
            ]
        },
        {
            categoryName: "금/원자재 (Gold/Commodity)",
            items: [
                { rank: 1, name: "KODEX 은선물(H)", yield1W: "+47.5%", yield1M: "+37.0%", yield3M: "+184.4%", yield6M: "+258.5%" },
                { rank: 2, name: "TIGER 금은선물(H)", yield1W: "+10.9%", yield1M: "+30.7%", yield3M: "+62.2%", yield6M: "+96.5%" },
                { rank: 3, name: "ACE KRX금현물", yield1W: "+19.1%", yield1M: "+35.8%", yield3M: "+69.0%", yield6M: "+92.0%" },
                { rank: 4, name: "KODEX 골드선물(H)", yield1W: "+16.5%", yield1M: "+31.0%", yield3M: "+52.3%", yield6M: "+86.3%" },
                { rank: 5, name: "TIGER 골드선물(H)", yield1W: "+16.2%", yield1M: "+30.6%", yield3M: "+51.5%", yield6M: "+84.9%" },
                { rank: 6, name: "HANARO 금선물(H)", yield1W: "+16.1%", yield1M: "+34.8%", yield3M: "+42.9%", yield6M: "+92.4%" },
                { rank: 7, name: "TIGER 구리실물(H)", yield1W: "+2.8%", yield1M: "+16.3%", yield3M: "+27.5%", yield6M: "+35.9%" },
                { rank: 8, name: "TIGER 원유선물Enhanced(H)", yield1W: "+9.9%", yield1M: "+5.4%", yield3M: "-1.3%", yield6M: "-11.0%" },
                { rank: 9, name: "KODEX WTI원유선물(H)", yield1W: "+9.9%", yield1M: "+5.1%", yield3M: "-1.7%", yield6M: "-9.8%" },
                { rank: 10, name: "KODEX 구리선물(H)", yield1W: "+2.7%", yield1M: "+13.1%", yield3M: "+1.7%", yield6M: "+29.4%" },
                { rank: 11, name: "KODEX 콩선물(H)", yield1W: "-2.3%", yield1M: "+2.0%", yield3M: "+1.4%", yield6M: "+1.5%" },
                { rank: 12, name: "KODEX 3대농산물선물(H)", yield1W: "-1.6%", yield1M: "-3.1%", yield3M: "-2.4%", yield6M: "+1.7%" },
                { rank: 13, name: "TIGER 농산물선물Enhanced(H)", yield1W: "-1.8%", yield1M: "-2.1%", yield3M: "-3.6%", yield6M: "-10.4%" }
            ]
        },
        {
            categoryName: "부동산 (Real Estate)",
            items: [
                { rank: 1, name: "RISE 글로벌데이터센터리츠(합성)", yield1W: "+9.8%", yield1M: "+2.7%", yield3M: "+12.1%", yield6M: "+19.2%" },
                { rank: 2, name: "TIGER 리츠부동산인프라", yield1W: "+3.4%", yield1M: "+5.5%", yield3M: "+12.0%", yield6M: "+21.3%" },
                { rank: 3, name: "KBSTAR 싱가포르리츠", yield1W: "+3.5%", yield1M: "+2.0%", yield3M: "+17.4%", yield6M: "+25.6%" },
                { rank: 4, name: "WON 한국부동산리츠", yield1W: "+2.6%", yield1M: "+5.9%", yield3M: "+8.6%", yield6M: "+16.0%" },
                { rank: 5, name: "PLUS K-리츠복합투자", yield1W: "+2.3%", yield1M: "+4.7%", yield3M: "+11.2%", yield6M: "+19.0%" },
                { rank: 6, name: "KODEX 한국부동산리츠인프라", yield1W: "+2.1%", yield1M: "+3.6%", yield3M: "+8.4%", yield6M: "+16.3%" },
                { rank: 7, name: "RISE 글로벌리얼티인컴", yield1W: "+2.3%", yield1M: "+0.5%", yield3M: "+3.7%", yield6M: "+5.9%" },
                { rank: 8, name: "ACE 미국부동산리츠(합성)", yield1W: "+1.8%", yield1M: "-0.6%", yield3M: "-1.9%", yield6M: "+5.2%" },
                { rank: 9, name: "KODEX 일본부동산리츠(H)", yield1W: "-1.4%", yield1M: "+2.0%", yield3M: "+11.0%", yield6M: "+26.4%" },
                { rank: 10, name: "KODEX 미국부동산리츠(H)", yield1W: "+1.4%", yield1M: "-0.7%", yield3M: "-1.9%", yield6M: "+4.6%" },
                { rank: 11, name: "TIGER 미국MSCI리츠(H)", yield1W: "+0.4%", yield1M: "+1.2%", yield3M: "+0.4%", yield6M: "+3.0%" }
            ]
        },
        {
            categoryName: "혼합자산 (Mixed Asset)",
            items: [
                { rank: 1, name: "KODEX 미국S&P500주식혼합", yield1W: "+17.8%", yield1M: "+23.2%", yield3M: "+50.4%", yield6M: "+82.7%" },
                { rank: 2, name: "RISE 삼성그룹밸류채권혼합", yield1W: "+11.2%", yield1M: "+13.5%", yield3M: "+30.2%", yield6M: "+36.3%" },
                { rank: 3, name: "KODEX 삼성전자채권혼합", yield1W: "+10.0%", yield1M: "+15.9%", yield3M: "+32.1%", yield6M: "+42.9%" },
                { rank: 4, name: "RISE 200고배당채권혼합", yield1W: "+10.5%", yield1M: "+13.0%", yield3M: "+24.4%", yield6M: "+36.4%" },
                { rank: 5, name: "KODEX 200미국채혼합", yield1W: "+9.0%", yield1M: "+28.3%", yield3M: "+42.5%", yield6M: "+44.6%" },
                { rank: 6, name: "RISE 미국S&P500셀렉트밸류", yield1W: "+9.6%", yield1M: "+10.4%", yield3M: "+20.2%", yield6M: "+33.1%" },
                { rank: 7, name: "KBSTAR 코리아배당성장채권", yield1W: "+6.7%", yield1M: "+7.9%", yield3M: "+8.3%", yield6M: "+13.3%" },
                { rank: 8, name: "PLUS 고배당주채권혼합", yield1W: "+6.0%", yield1M: "+8.9%", yield3M: "+9.0%", yield6M: "+27.6%" },
                { rank: 9, name: "KODEX 코리아배당성장채권", yield1W: "+4.7%", yield1M: "+5.7%", yield3M: "+6.7%", yield6M: "+19.4%" },
                { rank: 10, name: "RISE 글로벌자산배분액티브", yield1W: "+3.0%", yield1M: "+4.2%", yield3M: "+13.6%", yield6M: "+17.6%" },
                { rank: 11, name: "KODEX 멀티에셋하이인컴(H)", yield1W: "+3.6%", yield1M: "+4.9%", yield3M: "+7.7%", yield6M: "+16.0%" },
                { rank: 12, name: "KIWOOM TDF2050액티브", yield1W: "+2.7%", yield1M: "+2.7%", yield3M: "+15.5%", yield6M: "+18.9%" },
                { rank: 13, name: "PLUS 스마트베타Quality혼합", yield1W: "+3.6%", yield1M: "+3.7%", yield3M: "+6.6%", yield6M: "+17.0%" },
                { rank: 14, name: "KIWOOM TDF2040액티브", yield1W: "+2.5%", yield1M: "+2.4%", yield3M: "+14.3%", yield6M: "+17.0%" },
                { rank: 15, name: "KODEX TDF2050액티브", yield1W: "+2.3%", yield1M: "+2.1%", yield3M: "+1.8%", yield6M: "+17.5%" },
                { rank: 16, name: "TIGER 경기방어채권혼합", yield1W: "+2.3%", yield1M: "+3.5%", yield3M: "+4.5%", yield6M: "+12.3%" },
                { rank: 17, name: "TIGER 리츠부동산인프라채권", yield1W: "+2.3%", yield1M: "+3.6%", yield3M: "+7.1%", yield6M: "+14.1%" },
                { rank: 18, name: "SOL 미국배당미국채혼합", yield1W: "+1.6%", yield1M: "+4.0%", yield3M: "+9.9%", yield6M: "+6.1%" },
                { rank: 19, name: "KIWOOM TDF2030액티브", yield1W: "+1.7%", yield1M: "+1.3%", yield3M: "+10.9%", yield6M: "+12.8%" },
                { rank: 20, name: "ACE 미국나스닥100채권혼합", yield1W: "+1.6%", yield1M: "+0.9%", yield3M: "+11.8%", yield6M: "+10.8%" }
            ]
        },
        {
            categoryName: "통화/기타 (Currency/Other)",
            items: [
                { rank: 1, name: "SOL 유럽탄소배출권선물S&P(H)", yield1W: "-0.9%", yield1M: "+10.0%", yield3M: "+24.5%", yield6M: "+12.5%" },
                { rank: 2, name: "SOL 글로벌탄소배출권선물(합성)", yield1W: "-0.2%", yield1M: "+8.9%", yield3M: "+26.3%", yield6M: "+27.2%" },
                { rank: 3, name: "KODEX 유럽탄소배출권선물(H)", yield1W: "-0.2%", yield1M: "+9.1%", yield3M: "+21.6%", yield6M: "+10.4%" },
                { rank: 4, name: "HANARO 글로벌탄소배출권선물", yield1W: "-0.4%", yield1M: "+8.8%", yield3M: "+25.7%", yield6M: "+25.3%" },
                { rank: 5, name: "RISE TDF2040액티브", yield1W: "+2.9%", yield1M: "+2.4%", yield3M: "+13.3%", yield6M: "+18.6%" },
                { rank: 6, name: "RISE TDF2030액티브", yield1W: "+1.6%", yield1M: "+0.5%", yield3M: "+9.0%", yield6M: "+13.2%" },
                { rank: 7, name: "RISE 미국달러SOFR금리(합성)", yield1W: "+0.1%", yield1M: "+0.3%", yield3M: "+6.4%", yield6M: "+2.0%" },
                { rank: 8, name: "TIGER 미국달러SOFR금리(합성)", yield1W: "-0.2%", yield1M: "+0.3%", yield3M: "+6.2%", yield6M: "+1.7%" },
                { rank: 9, name: "KIWOOM 미국달러SOFR금리(합성)", yield1W: "-0.2%", yield1M: "+0.3%", yield3M: "+6.4%", yield6M: "+1.6%" },
                { rank: 10, name: "PLUS 미국달러SOFR금리(합성)", yield1W: "-0.2%", yield1M: "+0.2%", yield3M: "+6.3%", yield6M: "+1.7%" },
                { rank: 11, name: "KODEX 미국달러SOFR금리(합성)", yield1W: "-0.3%", yield1M: "+0.4%", yield3M: "+6.2%", yield6M: "+1.4%" },
                { rank: 12, name: "ACE 미국달러SOFR금리(합성)", yield1W: "-0.3%", yield1M: "+0.2%", yield3M: "+6.2%", yield6M: "+1.6%" },
                { rank: 13, name: "KODEX CD금리액티브(합성)", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.4%", yield6M: "+2.9%" },
                { rank: 14, name: "TIGER CD금리투자KIS(합성)", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.3%", yield6M: "+2.8%" },
                { rank: 15, name: "TIGER KOFR금리액티브(합성)", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.3%", yield6M: "+2.8%" },
                { rank: 16, name: "KODEX KOFR금리액티브(합성)", yield1W: "+0.2%", yield1M: "+0.7%", yield3M: "+1.3%", yield6M: "+2.8%" },
                { rank: 17, name: "KODEX 미국달러선물", yield1W: "-0.4%", yield1M: "+0.2%", yield3M: "+6.0%", yield6M: "+1.4%" }
            ]
        }
    ]
};

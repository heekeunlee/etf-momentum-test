import type { RankingReport } from '../types';

export const initialData: RankingReport = {
    date: '2026-02-03',
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
                { rank: 4, name: "PLUS 미국단기회사채(AAA~A)", yield1M: "-0.2%", yield3M: "+0.3%", yield6M: "+6.6%", yield1Y: "+2.7%" },
                { rank: 5, name: "RISE 미국단기투자등급회사채액티브", yield1M: "-0.3%", yield3M: "+0.1%", yield6M: "+7.1%", yield1Y: "+4.4%" },
                { rank: 6, name: "ACE 11월만기자동연장회사채AA-이상액티브", yield1M: "+0.3%", yield3M: "+0.8%", yield6M: "+1.5%", yield1Y: "+3.2%" },
                { rank: 7, name: "TIGER 단기선진하이일드(합성 H)", yield1M: "+0.3%", yield3M: "+0.8%", yield6M: "+1.6%", yield1Y: "+6.4%" },
                { rank: 8, name: "KODEX 머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.8%", yield6M: "+1.5%", yield1Y: "+3.1%" },
                { rank: 9, name: "WON 전단채플러스액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.4%" },
                { rank: 10, name: "SOL 초단기채권액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.2%" },
                { rank: 11, name: "SOL CD금리&머니마켓액티브", yield1M: "+0.2%", yield3M: "+0.8%", yield6M: "+1.5%", yield1Y: "+3.2%" },
                { rank: 12, name: "RISE 머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.1%" },
                { rank: 13, name: "1Q 머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.4%", yield1Y: "+3.1%" },
                { rank: 14, name: "PLUS 국공채머니마켓액티브", yield1M: "+0.3%", yield3M: "+0.7%", yield6M: "+1.3%", yield1Y: "+3.0%" }
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
                { rank: 7, name: "RISE 글로벌리얼티인컴", yield1M: "+2.3%", yield3M: "+0.5%", yield6M: "+3.7%", yield1Y: "+5.9%" }
            ]
        },
        {
            categoryName: "혼합자산 (Mixed Asset)",
            items: [
                { rank: 1, name: "RISE 주식혼합", yield1M: "+18.4%", yield3M: "+23.8%", yield6M: "+54.2%", yield1Y: "+85.9%" },
                { rank: 2, name: "RISE 삼성그룹Top3채권혼합", yield1M: "+1.2%", yield3M: "+13.59%", yield6M: "+10.2%", yield1Y: "+68.3%" },
                { rank: 3, name: "KODEX 삼성전자채권혼합", yield1M: "+30.05%", yield3M: "+15.9%", yield6M: "+32.1%", yield1Y: "+42.9%" },
                { rank: 4, name: "RISE 채권혼합", yield1M: "+9.9%", yield3M: "+12.8%", yield6M: "+25.6%", yield1Y: "+37.1%" },
                { rank: 5, name: "KODEX 200미국채혼합", yield1M: "+8.9%", yield3M: "+11.1%", yield6M: "+31.0%", yield1Y: "+44.6%" },
                { rank: 6, name: "RISE V&S셀렉트밸류채권혼합", yield1M: "+7.8%", yield3M: "+10.3%", yield6M: "+20.5%", yield1Y: "+32.5%" },
                { rank: 7, name: "PLUS 고배당주채권혼합", yield1M: "+6.3%", yield3M: "+10.4%", yield6M: "+12.1%", yield1Y: "+28.3%" },
                { rank: 8, name: "KODEX 코리아배당성장채권혼합", yield1M: "+5.79%", yield3M: "+65%", yield6M: "+8.95%", yield1Y: "+19.95%" },
                { rank: 9, name: "RISE 팔라듐선물(H)", yield1M: "+30%", yield3M: "+42%", yield6M: "+13.8%", yield1Y: "+17.6%" },
                { rank: 10, name: "KODEX WTI원유선물(H)", yield1M: "+36%", yield3M: "+29%", yield6M: "+7%", yield1Y: "+16.0%" },
                { rank: 12, name: "", yield1M: "+12%", yield3M: "+0081%", yield6M: "+32%", yield1Y: "-" },
                { rank: 13, name: "[주의] KIWOOM 미국달러선물", yield1M: "+25%", yield3M: "+24%", yield6M: "+14.3%", yield1Y: "+17.0%" },
                { rank: 14, name: "TIGER 경기방어채권혼합", yield1M: "+3.2%", yield3M: "+48%", yield6M: "+5.5%", yield1Y: "+1.9%" },
                { rank: 15, name: "RISE 헬스케어채권혼합", yield1M: "+27%", yield3M: "+7%", yield6M: "+76%", yield1Y: "+10.1%" }
            ]
        },
        {
            categoryName: "통화/기타 (Currency/Other)",
            items: [
                { rank: 1, name: "SOL 유럽탄소배출권선물S&P(H)", yield1M: "+0.9%", yield3M: "+100%", yield6M: "+24.8%", yield1Y: "+12.5%" },
                { rank: 3, name: "RISE 주식혼합", yield1M: "+3.4%", yield3M: "+3.2%", yield6M: "+15.8%", yield1Y: "+22.3%" },
                { rank: 4, name: "KODEX 증권", yield1M: "+0.2%", yield3M: "+1%", yield6M: "+28%", yield1Y: "+104.8%" },
                { rank: 5, name: "HANARO Fn K-반도체", yield1M: "+0.4%", yield3M: "+88%", yield6M: "+25.7%", yield1Y: "+25.3%" },
                { rank: 6, name: "", yield1M: "+6%", yield3M: "-", yield6M: "-", yield1Y: "-" },
                { rank: 7, name: "RISE 주식혼합", yield1M: "+16%", yield3M: "+5%", yield6M: "+2.0%", yield1Y: "+13.2%" },
                { rank: 8, name: "KIWOOM TDF2050액티브", yield1M: "+01%", yield3M: "+19%", yield6M: "+8.39%", yield1Y: "+27.9%" },
                { rank: 9, name: "", yield1M: "+9%", yield3M: "+18%", yield6M: "+8.25%", yield1Y: "+2.9%" },
                { rank: 10, name: "EB)RISEDIRWBISOFRS2ALM", yield1M: "+24%", yield3M: "-01%", yield6M: "+6.4%", yield1Y: "+2.0%" },
                { rank: 12, name: "[주의] KIWOOM 미국달러선물", yield1M: "-0.2%", yield3M: "+03%", yield6M: "+6.45%", yield1Y: "+16%" },
                { rank: 13, name: "PLUSU2RESOFRILHEIL", yield1M: "+02%", yield3M: "+02%", yield6M: "+6.3%", yield1Y: "+17%" },
                { rank: 15, name: "EE)ACE", yield1M: "+0.3%", yield3M: "+0.2%", yield6M: "+8.29%", yield1Y: "+16%" }
            ]
        }
    ]
};

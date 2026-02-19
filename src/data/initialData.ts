import type { RankingReport } from '../types';

export const initialData: RankingReport = {
    date: '2026-02-20',
    categories: [
        {
            categoryName: "국내 주식 (Domestic Stock)",
            items: [
                { rank: 1, name: "TIGER 증권", yield1M: "+70.2%", yield3M: "+95.5%", yield6M: "+132.8%", yield1Y: "+260.7%" },
                { rank: 2, name: "KODEX 증권", yield1M: "+70.9%", yield3M: "+94.2%", yield6M: "+131.4%", yield1Y: "+299.7%" },
                { rank: 3, name: "RISE 코리아금융고배당", yield1M: "+48.1%", yield3M: "+52.6%", yield6M: "+71.0%", yield1Y: "+141.0%" },
                { rank: 4, name: "SOL 반도체전공정", yield1M: "+41.4%", yield3M: "+48.2%", yield6M: "+100.4%", yield1Y: "+141.2%" },
                { rank: 5, name: "PLUS 태양광&ESS", yield1M: "+42.6%", yield3M: "+44.6%", yield6M: "+91.6%", yield1Y: "+222.7%" },
                { rank: 6, name: "HANARO Fn K-반도체", yield1M: "+25.6%", yield3M: "+62.9%", yield6M: "+156.5%", yield1Y: "+215.7%" },
                { rank: 7, name: "UNICORN SK하이닉스밸류체인액티브", yield1M: "+27.8%", yield3M: "+48.5%", yield6M: "+160.7%", yield1Y: "+207.6%" },
                { rank: 8, name: "TIGER 반도체", yield1M: "+26.5%", yield3M: "+56.8%", yield6M: "+146.7%", yield1Y: "+181.2%" },
                { rank: 9, name: "KODEX 반도체", yield1M: "+26.7%", yield3M: "+56.0%", yield6M: "+144.2%", yield1Y: "+179.2%" },
                { rank: 10, name: "TIGER 반도체TOP10", yield1M: "+24.3%", yield3M: "+59.3%", yield6M: "+151.3%", yield1Y: "+194.6%" },
                { rank: 11, name: "KIWOOM K-반도체북미공급망", yield1M: "+32.8%", yield3M: "+48.3%", yield6M: "+116.6%", yield1Y: "+123.2%" },
                { rank: 12, name: "PLUS 글로벌HBM반도체", yield1M: "+13.5%", yield3M: "+60.7%", yield6M: "+188.7%", yield1Y: "+260.0%" },
                { rank: 13, name: "ACE AI반도체포커스", yield1M: "+20.6%", yield3M: "+54.5%", yield6M: "+155.5%", yield1Y: "+186.7%" },
                { rank: 14, name: "BNK 온디바이스AI", yield1M: "+23.5%", yield3M: "+53.0%", yield6M: "+138.5%", yield1Y: "+161.2%" },
                { rank: 15, name: "TIME Korea플러스배당액티브", yield1M: "+31.5%", yield3M: "+51.8%", yield6M: "+89.4%", yield1Y: "+139.9%" },
                { rank: 16, name: "TIGER 코스닥150IT", yield1M: "+34.5%", yield3M: "+43.9%", yield6M: "+80.0%", yield1Y: "+84.7%" },
                { rank: 17, name: "PLUS 우주항공&UAM", yield1M: "+16.8%", yield3M: "+87.7%", yield6M: "+93.1%", yield1Y: "+189.4%" },
                { rank: 18, name: "RISE 대형고배당10TR", yield1M: "+19.2%", yield3M: "+56.9%", yield6M: "+137.7%", yield1Y: "+211.2%" },
                { rank: 19, name: "WON 반도체밸류체인액티브", yield1M: "+22.9%", yield3M: "+45.9%", yield6M: "+137.7%", yield1Y: "+202.6%" },
                { rank: 20, name: "RISE 200금융", yield1M: "+36.9%", yield3M: "+41.7%", yield6M: "+55.5%", yield1Y: "+116.5%" }
            ]
        },
        {
            categoryName: "채권 (Bond)",
            items: [
                { rank: 1, name: "RISE 주식혼합", yield1M: "+13.2%", yield3M: "+33.5%", yield6M: "+63.4%", yield1Y: "+97.7%" },
                { rank: 2, name: "PLUS 고배당주채권혼합", yield1M: "+12.8%", yield3M: "+17.0%", yield6M: "+20.8%", yield1Y: "+38.8%" },
                { rank: 3, name: "TIGER 한중전기차(합성)", yield1M: "+5.1%", yield3M: "+15.3%", yield6M: "+54.1%", yield1Y: "+59.8%" },
                { rank: 4, name: "RISE V&S셀렉트밸류채권혼합", yield1M: "+8.8%", yield3M: "+16.2%", yield6M: "+25.3%", yield1Y: "+38.6%" },
                { rank: 5, name: "RISE 채권혼합", yield1M: "+7.4%", yield3M: "+17.8%", yield6M: "+29.7%", yield1Y: "+41.9%" },
                { rank: 6, name: "KODEX 200미국채혼합", yield1M: "+6.5%", yield3M: "+17.0%", yield6M: "+36.3%", yield1Y: "+51.6%" },
                { rank: 7, name: "RISE 삼성그룹Top3채권혼합", yield1M: "+6.7%", yield3M: "+17.7%", yield6M: "+31.8%", yield1Y: "+38.1%" },
                { rank: 8, name: "KODEX 한중전기차(합성)", yield1M: "+4.6%", yield3M: "+14.0%", yield6M: "+50.9%", yield1Y: "+56.8%" },
                { rank: 9, name: "SOL 한국형글로벌전기차&2차전지액티브", yield1M: "+5.7%", yield3M: "+8.5%", yield6M: "+30.9%", yield1Y: "+39.9%" },
                { rank: 10, name: "KODEX 코리아배당성장채권혼합", yield1M: "+7.5%", yield3M: "+11.0%", yield6M: "+14.0%", yield1Y: "+24.8%" },
                { rank: 11, name: "SOL 미국배당미국채혼합50", yield1M: "+4.0%", yield3M: "+8.6%", yield6M: "+16.5%", yield1Y: "+12.7%" },
                { rank: 12, name: "PLUS 스마트베타Quality채권혼합", yield1M: "+4.2%", yield3M: "+7.7%", yield6M: "+11.3%", yield1Y: "+20.7%" },
                { rank: 13, name: "RISE 글로벌리얼티인컴", yield1M: "+3.5%", yield3M: "+8.8%", yield6M: "+13.0%", yield1Y: "+11.3%" },
                { rank: 14, name: "KODEX 멀티에셋하이인컴(H)", yield1M: "+4.7%", yield3M: "+5.9%", yield6M: "+8.5%", yield1Y: "+13.5%" },
                { rank: 15, name: "WON 한국부동산TOP3플러스", yield1M: "+3.0%", yield3M: "+8.5%", yield6M: "+10.3%", yield1Y: "+16.8%" }
            ]
        },
        {
            categoryName: "금/원자재 (Gold/Commodity)",
            items: [
                { rank: 1, name: "[주의] ACE KRX금현물", yield1M: "+5.1%", yield3M: "+20.0%", yield6M: "+55.1%", yield1Y: "+57.2%" },
                { rank: 2, name: "KODEX 골드선물(H)", yield1M: "+6.1%", yield3M: "+21.3%", yield6M: "+45.7%", yield1Y: "+66.0%" },
                { rank: 3, name: "[주의] TIGER 금은선물(H)", yield1M: "+2.7%", yield3M: "+23.5%", yield6M: "+49.5%", yield1Y: "+67.0%" },
                { rank: 4, name: "TIGER 원유선물Enhanced(H)", yield1M: "+10.9%", yield3M: "+10.9%", yield6M: "+5.4%", yield1Y: "-0.2%" },
                { rank: 5, name: "[주의] PLUS 글로벌희토류&전략자원생산기업", yield1M: "-3.0%", yield3M: "+23.8%", yield6M: "+62.7%", yield1Y: "+104.2%" },
                { rank: 6, name: "[주의] KODEX 은선물(H)", yield1M: "-17.9%", yield3M: "+50.4%", yield6M: "+97.3%", yield1Y: "+123.6%" },
                { rank: 7, name: "KODEX WTI원유선물(H)", yield1M: "+10.6%", yield3M: "+10.9%", yield6M: "+5.1%", yield1Y: "+1.5%" },
                { rank: 8, name: "KODEX 콩선물(H)", yield1M: "+7.0%", yield3M: "-0.6%", yield6M: "+10.3%", yield1Y: "+3.0%" },
                { rank: 9, name: "[주의] RISE 팔라듐선물(H)", yield1M: "-6.2%", yield3M: "+20.5%", yield6M: "+44.4%", yield1Y: "+63.3%" },
                { rank: 10, name: "[주의] KODEX 구리선물(H)", yield1M: "-2.5%", yield3M: "+13.0%", yield6M: "+26.0%", yield1Y: "+20.4%" },
                { rank: 11, name: "[주의] TIGER 구리실물", yield1M: "-4.4%", yield3M: "+14.4%", yield6M: "+32.5%", yield1Y: "+29.4%" },
                { rank: 12, name: "KODEX 3대농산물선물(H)", yield1M: "+4.7%", yield3M: "-1.4%", yield6M: "+4.4%", yield1Y: "-13.3%" },
                { rank: 13, name: "TIGER 농산물선물Enhanced(H)", yield1M: "+2.4%", yield3M: "-2.3%", yield6M: "-0.2%", yield1Y: "-12.9%" }
            ]
        },
        {
            categoryName: "부동산 (Real Estate)",
            items: [
                { rank: 1, name: "RISE 글로벌데이터센터리츠(합성)", yield1M: "+4.3%", yield3M: "+10.4%", yield6M: "+20.8%", yield1Y: "+20.0%" },
                { rank: 2, name: "TIGER 미국MSCI리츠(합성 H)", yield1M: "+3.6%", yield3M: "+6.4%", yield6M: "+11.2%", yield1Y: "+5.3%" },
                { rank: 3, name: "TIGER 리츠부동산인프라", yield1M: "+2.4%", yield3M: "+6.8%", yield6M: "+12.3%", yield1Y: "+22.3%" },
                { rank: 4, name: "KODEX 미국부동산리츠(H)", yield1M: "+2.3%", yield3M: "+5.0%", yield6M: "+6.3%", yield1Y: "+3.4%" },
                { rank: 5, name: "ACE 미국부동산리츠(합성 H)", yield1M: "+2.0%", yield3M: "+5.2%", yield6M: "+6.1%", yield1Y: "+3.0%" },
                { rank: 6, name: "TIGER 리츠부동산인프라채권", yield1M: "+1.6%", yield3M: "+4.5%", yield6M: "+7.4%", yield1Y: "+14.2%" },
                { rank: 7, name: "PLUS K리츠", yield1M: "+0.1%", yield3M: "+4.9%", yield6M: "+10.4%", yield1Y: "+19.8%" },
                { rank: 8, name: "KODEX 한국부동산리츠인프라", yield1M: "+0.4%", yield3M: "+4.3%", yield6M: "+7.9%", yield1Y: "+16.1%" },
                { rank: 9, name: "ACE 싱가포르리츠", yield1M: "-1.6%", yield3M: "+1.1%", yield6M: "+14.8%", yield1Y: "+22.8%" },
                { rank: 10, name: "KODEX 일본부동산리츠(H)", yield1M: "-2.5%", yield3M: "+0.1%", yield6M: "+7.3%", yield1Y: "+24.5%" }
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
                { rank: 1, name: "TIGER 일본엔선물", yield1M: "+0.2%", yield3M: "-1.1%", yield6M: "-0.4%", yield1Y: "-2.3%" },
                { rank: 2, name: "[주의] KODEX 미국달러선물", yield1M: "-1.6%", yield3M: "+0.1%", yield6M: "+6.0%", yield1Y: "+4.0%" },
                { rank: 3, name: "[주의] KIWOOM 미국달러선물", yield1M: "-1.7%", yield3M: "-", yield6M: "+6.0%", yield1Y: "+3.8%" }
            ]
        }
    ]
};

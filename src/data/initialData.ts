import type { RankingReport } from '../types';

export const initialData: RankingReport = {
    date: '2026-02-26',
    categories: [
        {
            categoryName: "국내 주식 (Domestic Stock)",
            items: [
                { rank: 1, name: "TIGER 증권", yield1M: "+57.0%", yield3M: "+106.5%", yield6M: "+137.5%", yield1Y: "+253.6%" },
                { rank: 2, name: "KODEX 증권", yield1M: "+57.4%", yield3M: "+104.9%", yield6M: "+134.9%", yield1Y: "+292.2%" },
                { rank: 3, name: "HANARO Fn K-반도체", yield1M: "+38.5%", yield3M: "+95.5%", yield6M: "+186.0%", yield1Y: "+236.0%" },
                { rank: 4, name: "UNICORN SK하이닉스밸류체인액티브", yield1M: "+36.4%", yield3M: "+83.0%", yield6M: "+185.1%", yield1Y: "+220.9%" },
                { rank: 5, name: "TIGER 200 IT", yield1M: "+32.1%", yield3M: "+85.0%", yield6M: "+175.4%", yield1Y: "+225.3%" },
                { rank: 6, name: "TIGER 반도체TOP10", yield1M: "+30.6%", yield3M: "+89.0%", yield6M: "+170.5%", yield1Y: "+204.9%" },
                { rank: 7, name: "TIGER 반도체", yield1M: "+33.4%", yield3M: "+84.1%", yield6M: "+163.1%", yield1Y: "+188.9%" },
                { rank: 8, name: "KODEX 200IT TR", yield1M: "+31.1%", yield3M: "+84.2%", yield6M: "+176.5%", yield1Y: "+227.1%" },
                { rank: 9, name: "ACE AI반도체포커스", yield1M: "+30.6%", yield3M: "+84.6%", yield6M: "+178.5%", yield1Y: "+205.5%" },
                { rank: 10, name: "KODEX 반도체", yield1M: "+33.3%", yield3M: "+83.8%", yield6M: "+160.9%", yield1Y: "+185.5%" },
                { rank: 11, name: "RISE 네트워크인프라", yield1M: "+34.0%", yield3M: "+76.8%", yield6M: "+169.8%", yield1Y: "+213.3%" },
                { rank: 12, name: "WON 반도체밸류체인액티브", yield1M: "+33.8%", yield3M: "+75.1%", yield6M: "+164.0%", yield1Y: "+212.1%" },
                { rank: 13, name: "BNK 온디바이스AI", yield1M: "+31.2%", yield3M: "+79.5%", yield6M: "+159.4%", yield1Y: "+168.9%" },
                { rank: 14, name: "PLUS 글로벌HBM반도체", yield1M: "+18.8%", yield3M: "+89.2%", yield6M: "+209.4%", yield1Y: "+273.0%" },
                { rank: 15, name: "RISE 대형고배당10TR", yield1M: "+27.4%", yield3M: "+85.7%", yield6M: "+162.0%", yield1Y: "+236.7%" },
                { rank: 16, name: "KODEX IT", yield1M: "+29.6%", yield3M: "+75.3%", yield6M: "+151.9%", yield1Y: "+185.5%" },
                { rank: 17, name: "TIGER 코리아TOP10", yield1M: "+26.2%", yield3M: "+81.6%", yield6M: "+154.4%", yield1Y: "+205.7%" },
                { rank: 18, name: "KIWOOM K-반도체북미공급망", yield1M: "+34.3%", yield3M: "+68.5%", yield6M: "+123.4%", yield1Y: "+118.1%" },
                { rank: 19, name: "DAISHIN343 AI반도체&인프라액티브", yield1M: "+32.0%", yield3M: "+70.8%", yield6M: "+130.1%", yield1Y: "+157.9%" },
                { rank: 20, name: "KODEX AI반도체", yield1M: "+26.8%", yield3M: "+71.9%", yield6M: "+151.7%", yield1Y: "+196.4%" }
            ]
        },
        {
            categoryName: "채권 (Bond)",
            items: [
                { rank: 1, name: "KODEX 한중전기차(합성)", yield1M: "+7.2%", yield3M: "+28.7%", yield6M: "+58.5%", yield1Y: "+62.9%" },
                { rank: 2, name: "TIGER 한중전기차(합성)", yield1M: "+6.4%", yield3M: "+27.4%", yield6M: "+57.8%", yield1Y: "+62.0%" },
                { rank: 3, name: "SOL 한국형글로벌전기차&2차전지액티브", yield1M: "+3.9%", yield3M: "+18.9%", yield6M: "+29.8%", yield1Y: "+41.6%" },
                { rank: 4, name: "RISE 글로벌리얼티인컴", yield1M: "+6.0%", yield3M: "+8.6%", yield6M: "+13.5%", yield1Y: "+11.1%" },
                { rank: 5, name: "WON 한국부동산TOP3플러스", yield1M: "+3.1%", yield3M: "+7.8%", yield6M: "+11.2%", yield1Y: "+17.0%" },
                { rank: 6, name: "TIGER 미국30년국채스트립액티브(합성 H)", yield1M: "+3.0%", yield3M: "+0.1%", yield6M: "+6.0%", yield1Y: "+0.3%" },
                { rank: 7, name: "KODEX 미국30년국채액티브(H)", yield1M: "+2.3%", yield3M: "+0.9%", yield6M: "+5.1%", yield1Y: "+4.5%" },
                { rank: 8, name: "KODEX 미국30년국채울트라선물(H)", yield1M: "+2.3%", yield3M: "+0.7%", yield6M: "+4.6%", yield1Y: "+3.9%" },
                { rank: 9, name: "SOL 미국30년국채액티브(H)", yield1M: "+2.2%", yield3M: "+0.5%", yield6M: "+4.7%", yield1Y: "+3.7%" },
                { rank: 10, name: "RISE 미국장기국채선물(H)", yield1M: "+2.1%", yield3M: "+1.0%", yield6M: "+4.0%", yield1Y: "+5.9%" },
                { rank: 11, name: "ACE 미국30년국채액티브(H)", yield1M: "+2.1%", yield3M: "+0.6%", yield6M: "+4.6%", yield1Y: "+3.7%" },
                { rank: 12, name: "TIGER 미국30년국채커버드콜액티브(H)", yield1M: "+2.0%", yield3M: "+0.7%", yield6M: "+4.5%", yield1Y: "+4.3%" },
                { rank: 13, name: "KODEX 미국30년국채타겟커버드콜(합성 H)", yield1M: "+1.9%", yield3M: "+1.0%", yield6M: "+4.3%", yield1Y: "+4.1%" },
                { rank: 14, name: "TIGER 미국투자등급회사채액티브(H)", yield1M: "+0.8%", yield3M: "+1.3%", yield6M: "+3.0%", yield1Y: "+6.6%" },
                { rank: 15, name: "SOL 미국30년국채커버드콜(합성)", yield1M: "+0.1%", yield3M: "-0.6%", yield6M: "+10.9%", yield1Y: "+9.8%" }
            ]
        },
        {
            categoryName: "금/원자재 (Gold/Commodity)",
            items: [
                { rank: 1, name: "KODEX 은선물(H)", yield1M: "-10.3%", yield3M: "+78.6%", yield6M: "+129.0%", yield1Y: "+157.3%" },
                { rank: 2, name: "TIGER 금은선물(H)", yield1M: "+2.2%", yield3M: "+31.3%", yield6M: "+57.9%", yield1Y: "+73.9%" },
                { rank: 3, name: "KODEX 골드선물(H)", yield1M: "+4.0%", yield3M: "+27.0%", yield6M: "+51.8%", yield1Y: "+69.1%" },
                { rank: 4, name: "PLUS 글로벌희토류&전략자원생산기업", yield1M: "-2.0%", yield3M: "+37.5%", yield6M: "+64.2%", yield1Y: "+122.6%" },
                { rank: 5, name: "ACE KRX금현물", yield1M: "+1.8%", yield3M: "+23.7%", yield6M: "+59.1%", yield1Y: "+44.9%" },
                { rank: 6, name: "TIGER 원유선물Enhanced(H)", yield1M: "+10.2%", yield3M: "+14.4%", yield6M: "+8.3%", yield1Y: "+1.2%" },
                { rank: 7, name: "KODEX WTI원유선물(H)", yield1M: "+10.3%", yield3M: "+14.0%", yield6M: "+8.0%", yield1Y: "+2.4%" },
                { rank: 8, name: "RISE 팔라듐선물(H)", yield1M: "-5.7%", yield3M: "+30.9%", yield6M: "+56.1%", yield1Y: "+72.3%" },
                { rank: 9, name: "[주의] KODEX 구리선물(H)", yield1M: "+1.6%", yield3M: "+17.7%", yield6M: "+29.4%", yield1Y: "+17.9%" },
                { rank: 10, name: "[주의] TIGER 구리실물", yield1M: "-1.5%", yield3M: "+18.8%", yield6M: "+35.1%", yield1Y: "+27.6%" },
                { rank: 11, name: "KODEX 콩선물(H)", yield1M: "+8.0%", yield3M: "+1.1%", yield6M: "+7.0%", yield1Y: "+7.5%" },
                { rank: 12, name: "KODEX 3대농산물선물(H)", yield1M: "+5.3%", yield3M: "+0.8%", yield6M: "+4.7%", yield1Y: "-10.5%" },
                { rank: 13, name: "TIGER 농산물선물Enhanced(H)", yield1M: "+3.4%", yield3M: "+0.5%", yield6M: "+1.3%", yield1Y: "-10.8%" }
            ]
        },
        {
            categoryName: "부동산 (Real Estate)",
            items: [
                { rank: 1, name: "RISE 글로벌데이터센터리츠(합성)", yield1M: "+6.2%", yield3M: "+12.8%", yield6M: "+20.1%", yield1Y: "+18.4%" },
                { rank: 2, name: "TIGER 미국MSCI리츠(합성 H)", yield1M: "+7.5%", yield3M: "+9.7%", yield6M: "+13.2%", yield1Y: "+7.5%" },
                { rank: 3, name: "KODEX 미국부동산리츠(H)", yield1M: "+5.2%", yield3M: "+7.8%", yield6M: "+7.6%", yield1Y: "+5.4%" },
                { rank: 4, name: "ACE 미국부동산리츠(합성 H)", yield1M: "+5.2%", yield3M: "+7.5%", yield6M: "+7.4%", yield1Y: "+5.4%" },
                { rank: 5, name: "TIGER 리츠부동산인프라", yield1M: "+2.5%", yield3M: "+7.5%", yield6M: "+14.0%", yield1Y: "+22.7%" },
                { rank: 6, name: "TIGER 리츠부동산인프라채권", yield1M: "+2.5%", yield3M: "+5.6%", yield6M: "+9.2%", yield1Y: "+15.9%" },
                { rank: 7, name: "PLUS K리츠", yield1M: "+0.8%", yield3M: "+5.7%", yield6M: "+11.9%", yield1Y: "+20.6%" },
                { rank: 8, name: "KODEX 한국부동산리츠인프라", yield1M: "+0.9%", yield3M: "+4.6%", yield6M: "+9.8%", yield1Y: "+16.7%" },
                { rank: 9, name: "[주의] ACE 싱가포르리츠", yield1M: "-0.7%", yield3M: "+4.1%", yield6M: "+16.6%", yield1Y: "+27.0%" },
                { rank: 10, name: "KODEX 일본부동산리츠(H)", yield1M: "+1.4%", yield3M: "+2.2%", yield6M: "+7.6%", yield1Y: "+26.2%" }
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

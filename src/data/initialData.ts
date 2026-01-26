import type { RankingReport } from '../types';

export const initialData: RankingReport = {
    date: new Date().toISOString().split('T')[0],
    categories: [
        {
            categoryName: "국내 주식형 (Domestic Equity)",
            items: [
                { rank: 1, name: "KODEX 레버리지", yield1W: "+5.23%", yield1M: "+12.1%", yield3M: "-2.4%", yield6M: "+15.3%" },
                { rank: 2, name: "TIGER 2차전지테마", yield1W: "+4.12%", yield1M: "+8.5%", yield3M: "+10.1%", yield6M: "+30.2%" },
                { rank: 3, name: "KODEX 코스닥150레버리지", yield1W: "+3.98%", yield1M: "+11.2%", yield3M: "-5.1%", yield6M: "+8.4%" },
                { rank: 4, name: "TIGER 반도체", yield1W: "+3.45%", yield1M: "+6.7%", yield3M: "+1.2%", yield6M: "+12.5%" },
                { rank: 5, name: "KBSTAR 2차전지TOP10", yield1W: "+3.10%", yield1M: "+7.9%", yield3M: "+9.5%", yield6M: "+28.1%" }
            ]
        },
        {
            categoryName: "해외 주식형 (Overseas Equity)",
            items: [
                { rank: 1, name: "TIGER 미국필라델피아반도체나스닥", yield1W: "+6.12%", yield1M: "+15.4%", yield3M: "+20.1%", yield6M: "+45.2%" },
                { rank: 2, name: "ACE 미국S&P500", yield1W: "+2.5%", yield1M: "+5.1%", yield3M: "+8.2%", yield6M: "+12.3%" },
                { rank: 3, name: "KODEX 미국나스닥100TR", yield1W: "+2.1%", yield1M: "+4.8%", yield3M: "+9.5%", yield6M: "+18.2%" }
            ]
        }
    ]
};

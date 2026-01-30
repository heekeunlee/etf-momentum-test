export interface TradingHistory {
    date: string;
    realizedProfit: number;
    totalProfit?: number;
    memo?: string;
}

export const tradingHistory: TradingHistory[] = [
    {
        date: '2026-01-30',
        realizedProfit: 1201585,
        memo: "오늘자 ETF 실현손익"
    }
];

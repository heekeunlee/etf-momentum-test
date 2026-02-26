export interface ETFData {
  rank: number;
  rankChange: string;
  name: string;
  closePrice: string;
  diffPrev: string;
  changeRate: string;
  nav: string;
  volume: string;
  tradingValue: string;
  marketCap: string;
  baseDate: string;
  momentumScore: string;
  yield1W: string;
  yield2W: string;
  yield1M: string;
  yield3M: string;
}

export interface RankingReport {
  date: string;
  upItems: ETFData[];
  downItems: ETFData[];
}

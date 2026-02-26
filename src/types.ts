export interface ETFData {
  rank: number;
  rankChange: string;
  name: string;
  closePrice: string;
  changeRate: string;
  momentumScore: string;
  yield1W: string;
  yield2W: string;
  yield1M: string;
  yield3M: string;
}

export interface RankingReport {
  date: string;
  items: ETFData[];
}

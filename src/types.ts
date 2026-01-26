export interface ETFData {
  rank: number;
  name: string;
  yield1W: string;
  yield1M: string;
  yield3M: string;
  yield6M: string;
  yield1Y?: string;
}

export interface CategoryData {
  categoryName: string;
  items: ETFData[];
}

export interface RankingReport {
  date: string;
  categories: CategoryData[];
}

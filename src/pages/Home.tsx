import { useState } from 'react';
import { initialData } from '../data/initialData';
import type { RankingReport } from '../types';
import { Trophy, Calendar } from 'lucide-react';
import { VisitorCounter } from '../components/VisitorCounter';

export const Home: React.FC = () => {
    const [data] = useState<RankingReport>(initialData);

    const checkTrend = (val: string) => {
        if (!val || val === '-') return 'neutral';
        // Remove commas before parsing to number
        const numVal = parseFloat(val.replace(/,/g, ''));
        if (numVal > 0 || val.includes('+') || val.includes('▲')) return 'up';
        if (numVal < 0 || val.includes('-') || val.includes('▼')) return 'down';
        return 'neutral';
    };

    return (
        <div className="container" style={{ paddingBottom: '4rem', maxWidth: '1000px' }}>
            <div className="header-section">
                <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1E293B' }}>
                        ETF 상승/하락 모멘텀 랭킹
                    </h2>

                </div>
                <div className="last-updated" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} />
                        <span>Last Updated: {data.date}</span>
                    </div>
                    <VisitorCounter />
                </div>
            </div>


            <div className="flex flex-col gap-4">
                <div className="card" style={{ overflowX: 'auto' }}>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th className="th-rank">현재 순위</th>
                                    <th className="th-name" style={{ textAlign: 'center' }}>순위 변동</th>
                                    <th className="th-name">종목명</th>
                                    <th className="th-data tiny-col">종가</th>
                                    <th className="th-data tiny-col">전일대비</th>
                                    <th className="th-data tiny-col">등락률 (%)</th>
                                    <th className="th-data tiny-col">NAV</th>
                                    <th className="th-data tiny-col">거래량 (만주)</th>
                                    <th className="th-data tiny-col">거래대금 (억원)</th>
                                    <th className="th-data tiny-col">시가총액 (억원)</th>
                                    <th className="th-data tiny-col">기준일</th>
                                    <th className="th-data tiny-col">모멘텀 점수</th>
                                    <th className="th-data">1주 수익률</th>
                                    <th className="th-data">2주 수익률</th>
                                    <th className="th-data">1개월 수익률</th>
                                    <th className="th-data">3개월 수익률</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.items && data.items.map((item, i) => (
                                    <tr key={i}>
                                        <td className="td-rank">
                                            <div className={`rank-badge ${item.rank <= 3 ? 'top-rank' : ''}`}>
                                                {item.rank}
                                            </div>
                                        </td>
                                        <td className="td-name" style={{ textAlign: 'center' }}>
                                            <span style={{
                                                color: item.rankChange.includes('▲') ? '#ef4444' :
                                                    item.rankChange.includes('▼') ? '#3b82f6' : '#64748b',
                                                fontWeight: 600
                                            }}>
                                                {item.rankChange}
                                            </span>
                                        </td>
                                        <td className="td-name font-semibold text-gray-800">
                                            {item.name}
                                            {item.rank === 1 && <Trophy size={14} className="trophy-icon ml-1 inline-block" />}
                                        </td>
                                        <td className="td-data tiny-col" data-label="종가">{item.closePrice}</td>
                                        <td className="td-data tiny-col" data-label="전일대비">{item.diffPrev}</td>
                                        <td className={`td-data tiny-col text-${checkTrend(item.changeRate)}`} data-label="등락률 (%)">
                                            {item.changeRate}
                                        </td>
                                        <td className="td-data tiny-col" data-label="NAV">{item.nav}</td>
                                        <td className="td-data tiny-col" data-label="거래량 (만주)">{item.volume}</td>
                                        <td className="td-data tiny-col" data-label="거래대금 (억원)">{item.tradingValue}</td>
                                        <td className="td-data tiny-col" data-label="시가총액 (억원)">{item.marketCap}</td>
                                        <td className="td-data tiny-col" data-label="기준일">{item.baseDate}</td>
                                        <td className="td-data tiny-col font-medium text-purple-600" data-label="모멘텀 점수">
                                            {item.momentumScore}
                                        </td>
                                        {['yield1W', 'yield2W', 'yield1M', 'yield3M'].map((key) => {
                                            const val = item[key as keyof typeof item] as string;
                                            const trend = checkTrend(val);
                                            const labelMap: Record<string, string> = {
                                                yield1W: '1주',
                                                yield2W: '2주',
                                                yield1M: '1개월',
                                                yield3M: '3개월'
                                            };
                                            return (
                                                <td key={key} className={`td-data text-${trend}`} data-label={`${labelMap[key]} 수익률`}>
                                                    {val || '-'}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

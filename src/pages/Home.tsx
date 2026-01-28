import { useState } from 'react';
import { initialData } from '../data/initialData';
import type { RankingReport } from '../types';
import { Trophy, Calendar } from 'lucide-react';
import { VisitorCounter } from '../components/VisitorCounter';

export const Home: React.FC = () => {
    const [data] = useState<RankingReport>(initialData);

    const checkTrend = (val: string) => {
        if (!val) return 'neutral';
        if (val.includes('+')) return 'up';
        if (val.includes('-')) return 'down';
        return 'neutral';
    };

    return (
        <div className="container" style={{ paddingBottom: '4rem', maxWidth: '1000px' }}>
            <div className="header-section">
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B' }}>
                        ETF 종목별 수익률 랭킹 <br />
                        <span style={{ fontSize: '1rem', fontWeight: 500, color: '#64748B' }}>(주간, 1개월, 3개월, 6개월)</span>
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
                {data.categories.map((cat, idx) => (
                    <div key={idx} className="card">
                        <div className="card-header">
                            <div className="indicator"></div>
                            <h3>{cat.categoryName}</h3>
                        </div>

                        <div className="table-container">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th className="th-rank">Rank</th>
                                        <th className="th-name">ETF Name</th>
                                        <th className="th-data">1 Week</th>
                                        <th className="th-data">1 Month</th>
                                        <th className="th-data">3 Month</th>
                                        <th className="th-data">6 Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cat.items.map((item, i) => (
                                        <tr key={i}>
                                            <td className="td-rank">
                                                <div className={`rank-badge ${item.rank <= 3 ? 'top-rank' : ''}`}>
                                                    {item.rank}
                                                </div>
                                            </td>
                                            <td className="td-name">
                                                {item.name}
                                                {item.rank === 1 && <Trophy size={14} className="trophy-icon" />}
                                            </td>
                                            {['yield1W', 'yield1M', 'yield3M', 'yield6M'].map((key) => {
                                                const val = item[key as keyof typeof item] as string;
                                                const trend = checkTrend(val);
                                                const labelMap: Record<string, string> = {
                                                    yield1W: '1 Week',
                                                    yield1M: '1 Month',
                                                    yield3M: '3 Month',
                                                    yield6M: '6 Month'
                                                };
                                                return (
                                                    <td key={key} className={`td-data text-${trend}`} data-label={labelMap[key]}>
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
                ))}
            </div>

        </div>
    );
};

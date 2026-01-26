import { useEffect, useState } from 'react';
import { initialData } from '../data/initialData';
import type { RankingReport } from '../types';
import { Trophy } from 'lucide-react';

export const Home: React.FC = () => {
    const [data, setData] = useState<RankingReport>(initialData);

    useEffect(() => {
        const saved = localStorage.getItem('etf_data');
        if (saved) {
            try {
                setData(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse saved data", e);
            }
        }
    }, []);

    const getColor = (val: string) => {
        if (val.includes('+')) return 'var(--color-up)';
        if (val.includes('-')) return 'var(--color-down)';
        return 'inherit';
    };

    return (
        <div className="container" style={{ paddingBottom: '4rem' }}>
            <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <Trophy size={32} color="var(--color-primary)" />
                    ETF Momentum Rankings
                </h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Updated: {data.date}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {data.categories.map((cat, idx) => (
                    <div key={idx} className="bg-white shadow-md rounded-lg p-4">
                        <h2 style={{
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            marginBottom: '1rem',
                            paddingBottom: '0.5rem',
                            borderBottom: '2px solid var(--color-primary)',
                            display: 'inline-block'
                        }}>
                            {cat.categoryName}
                        </h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '60px' }}>Rank</th>
                                        <th>Item Name</th>
                                        <th>1 Week</th>
                                        <th>1 Month</th>
                                        <th>3 Month</th>
                                        <th>6 Month</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cat.items.map((item) => (
                                        <tr key={item.rank}>
                                            <td>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '50%',
                                                    backgroundColor: item.rank <= 3 ? '#FEF3C7' : '#F1F5F9',
                                                    color: item.rank <= 3 ? '#D97706' : '#64748B',
                                                    fontWeight: 'bold',
                                                    fontSize: '0.75rem'
                                                }}>
                                                    {item.rank}
                                                </div>
                                            </td>
                                            <td style={{ fontWeight: 500 }}>{item.name}</td>
                                            <td style={{ color: getColor(item.yield1W), fontWeight: 500 }}>{item.yield1W}</td>
                                            <td style={{ color: getColor(item.yield1M), fontWeight: 500 }}>{item.yield1M}</td>
                                            <td style={{ color: getColor(item.yield3M), fontWeight: 500 }}>{item.yield3M}</td>
                                            <td style={{ color: getColor(item.yield6M), fontWeight: 500 }}>{item.yield6M}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

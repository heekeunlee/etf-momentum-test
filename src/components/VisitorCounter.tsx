import React, { useEffect, useState } from 'react';

export const VisitorCounter: React.FC = () => {
    const [counts, setCounts] = useState({ today: 0, total: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const today = new Date().toISOString().split('T')[0];
                const NAMESPACE = 'etf-momentum-test';

                // Fetch and increment Total
                const totalRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/total/up`);
                const totalData = await totalRes.json();

                // Fetch and increment Today
                const todayRes = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${today}/up`);
                const todayData = await todayRes.json();

                if (totalData && todayData) {
                    setCounts({
                        total: totalData.count,
                        today: todayData.count
                    });
                }
            } catch (error) {
                console.error("Failed to fetch visitor counts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCounts();
    }, []);

    if (loading) return <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Loading counts...</span>;

    return (
        <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 500 }}>
            <span style={{ marginRight: '0.5rem' }}>Today: {counts.today.toLocaleString()}</span>
            <span style={{ color: '#CBD5E1' }}>|</span>
            <span style={{ marginLeft: '0.5rem' }}>Total: {counts.total.toLocaleString()}</span>
        </div>
    );
};

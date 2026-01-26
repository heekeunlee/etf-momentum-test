import React from 'react';
import { TrendingUp, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container" style={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', color: 'var(--color-primary)' }}>
                    <TrendingUp size={24} />
                    <span>ETF Momentum</span>
                </Link>
                <Link to="/admin" className="btn btn-outline" style={{ fontSize: '0.875rem', padding: '0.25rem 0.75rem' }}>
                    <Upload size={16} style={{ marginRight: '0.25rem' }} />
                    Admin
                </Link>
            </div>
        </header>
    );
};

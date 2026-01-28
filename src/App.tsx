import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { AdminModal } from './components/AdminModal';
import { initialData } from './data/initialData';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [footerClicks, setFooterClicks] = useState(0);

  const handleFooterClick = () => {
    const newCount = footerClicks + 1;
    setFooterClicks(newCount);
    if (newCount === 5) {
      setIsAdminOpen(true);
      setFooterClicks(0);
    }
  };

  // Flatten data for the report
  const allRankings = initialData.categories.flatMap(cat => cat.items).sort((a, b) => a.rank - b.rank);

  return (
    <Router basename="/etf-momentum-test">
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F8FAFC' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <footer style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          color: '#94A3B8',
          fontSize: '0.875rem',
          borderTop: '1px solid #E2E8F0',
          marginTop: 'auto',
          backgroundColor: 'white'
        }}>
          <p onClick={handleFooterClick} style={{ cursor: 'pointer', userSelect: 'none' }}>
            © {new Date().getFullYear()} ETF Momentum Rankings. Engineered by Heekeun Lee x Deepmind AI (v1.2)
          </p>
        </footer>
        <AdminModal
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
          todaysRankings={allRankings}
        />
      </div>
    </Router>
  );
}

export default App;

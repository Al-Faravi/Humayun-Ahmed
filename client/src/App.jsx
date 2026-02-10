import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import HimuWorld from './pages/Worlds/HimuWorld';

function App() {
  return (
    <Router>
      <div className="App">
        {/* আমরা পরে Navbar বানাবো, এখন জাস্ট প্লেসহোল্ডার */}
        <Navbar />
        
        <main className="container" style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/world/himu" element={<HimuWorld />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
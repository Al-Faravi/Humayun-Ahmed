import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
        হুমায়ূন আর্কাইভ
      </Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#555' }}>হোম</Link>
        <Link to="/books" style={{ textDecoration: 'none', color: '#555' }}>বইসমূহ</Link>
        <Link to="/world/himu" style={{ textDecoration: 'none', color: '#FFD700', fontWeight: 'bold' }}>হিমু জগত</Link>
      </div>
    </nav>
  );
};

export default Navbar;
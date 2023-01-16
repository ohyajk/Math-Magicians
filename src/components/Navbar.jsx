import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="text-white text-center flex gap-10">
        <h1>Logo</h1>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
      </nav>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="px-4 py-2">
      <nav className="text-white text-center flex items-center justify-between">
        <h1 className="text-amber-500 text-4xl">Math Magicians</h1>
        <div className="text-lg flex gap-10">
          <Link className="hover:text-amber-500" to="/">HOME</Link>
          <Link className="hover:text-amber-500" to="/calculator">CALCULATOR</Link>
          <Link className="hover:text-amber-500" to="/quote">QUOTE</Link>
        </div>
      </nav>
    </div>
  );
}

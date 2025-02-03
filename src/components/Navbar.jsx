import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 px-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          My Project
        </Link>
      </div>
      <div className="flex-none space-x-4">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/todo" className="btn btn-ghost">Todo Page</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>
      </div>
    </div>
  );
}

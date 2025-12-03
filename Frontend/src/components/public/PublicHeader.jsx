import { Link } from "react-router-dom";
const PublicHeader = () => {

  return (
    <>
       <nav className="w-full border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-orange-400">
          OptKey Boost
        </Link>

        <div className="flex gap-6 text-gray-300">
          <Link to="/login" className="hover:text-orange-400 transition">Login</Link>
          <Link to="/signup" className="hover:text-orange-400 transition">Signup</Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default PublicHeader;
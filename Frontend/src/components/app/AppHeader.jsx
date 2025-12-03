import { Link } from "react-router-dom";

const AppHeader = () => {

  return (
    <>
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-xl font-semibold text-orange-400">
          OptKey Boost
        </Link>

        <div className="flex gap-6 text-gray-300">
          <Link to="/test" className="hover:text-orange-400 transition">Typing Test</Link>
          <Link to="/history" className="hover:text-orange-400 transition">History</Link>

          <button className="ml-4 text-red-400 hover:text-red-500 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default AppHeader;
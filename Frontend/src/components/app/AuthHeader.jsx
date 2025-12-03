import { Link } from "react-router-dom";
const AuthHeader = () => {

  return (
    <>
          <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0">

       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-orange-400">
          OptKey Boost
        </Link>
        </div>
        </nav>
    </>
  );
};

export default AuthHeader;
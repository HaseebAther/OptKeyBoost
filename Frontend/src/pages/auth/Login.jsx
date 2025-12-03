import { Link } from "react-router-dom";


const Login = () => {

  return (
    <>
       <h1 className="text-3xl font-semibold text-orange-400 mb-6">Login</h1>

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-800 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-gray-800 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-400"
        />

        <button className="bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg font-medium">
          Login
        </button>
      </div>

      <p className="text-gray-400 mt-4 text-sm">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-orange-400">Sign up</Link>
      </p>
    </>
  );
};

export default Login;
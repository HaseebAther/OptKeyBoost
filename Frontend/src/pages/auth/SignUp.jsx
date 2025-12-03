import { Link } from "react-router-dom";
const SignUp = () => {

  return (
    <>          
    <h1 className="text-3xl font-semibold text-orange-400 mb-6">Create Account</h1>

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
          Sign Up
        </button>
      </div>

      <p className="text-gray-400 mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-orange-400">Login</Link>
      </p>
    </>
  );
};

export default SignUp;
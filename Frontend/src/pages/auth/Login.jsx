import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Client, Account } from "appwrite";
import { useAuth } from "../../hooks/useAuth";
const Login = () => {
  const [email, setEmail]=useState('')
   const [password,setPassword]= useState('')
   const [showPassword, setShowPassword] = useState(false)
     const [message,setMessage]= useState('')
    const navigate= useNavigate();
   const {login} = useAuth();

  const client = new Client()
              .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)      
              .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

  const account = new Account(client);

async function handleLogin() {
  try {
    const user = await account.get();

    login(user);
    navigate("/dashboard");
    return;

  } catch {
    try {
      await account.createEmailPasswordSession(email, password);
      const user = await account.get();

      login(user);
      setMessage("Login successful! Redirecting...");
      navigate("/dashboard");

    } catch (e) {
      setMessage(e.message || "Login failed.");
    }
  }
}

  return (
    <>
       <h1 className="text-3xl font-semibold text-orange-400 mb-6">Login</h1>
    
     {message && (
        <p className="bg-gray-800 p-3 rounded text-center text-orange-400 mb-4">
          {message}
        </p>
      )}
      <div className="flex flex-col gap-4">
        <input
           type="email"
           name="userEmail"
          placeholder="Email"
          value={email}
          className="bg-gray-800 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-400"
          onChange={(e)=>setEmail(e.target.value)}  
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="userPassword"
            value={password}
            className="bg-gray-800 p-3 pr-10 w-full rounded-lg border border-gray-700 focus:outline-none focus:border-orange-400"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-400 transition cursor-pointer"
            onClick={() => setShowPassword((v) => !v)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg font-medium"
        onClick={handleLogin}
        >
          Login
        </button>
      </div>

      <p className="text-gray-400 mt-4 text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-orange-400">Sign up</Link>
      </p>
    </>
  );
};

export default Login;
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Client, Account } from "appwrite";
import { useAuth } from "../../hooks/useAuth";
const Login = () => {
   const [email, setEmail]=useState('')
    const [password,setPassword]= useState('')
     const [message,setMessage]= useState('')
    const navigate= useNavigate();
   const {login} = useAuth();

  const client = new Client()
              .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)      
              .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

  const account = new Account(client);

  async function handleLogin(){
try {
     await account.deleteSessions();
    const result = await account.createEmailPasswordSession(email, password);
    const user= await account.get();
    // console.log(user);
     login(user);
          setMessage("Login successfully! Redirecting...");
        navigate("/dashboard")


   
} catch (e){
  setMessage(e.message || "Error creating account.");
  
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

        <input
           type="password"
          placeholder="Password"
            name="userPassword"
          value={password}
          className="bg-gray-800 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-400"
          onChange={(e)=>setPassword(e.target.value)}
        />

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
import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { Client,Account,ID } from "appwrite";




const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message,setMessage]=useState("");
  const navigate = useNavigate();
    
  const client = new Client()
              .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)      
              .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT);

  const account = new Account(client);
  
  async function handleSignUp() {

  try {
    const user = await account.create({
        userId: ID.unique(),
        email: email,
        password: password
    });
    setMessage("Account created successfully! Redirecting...");
    setTimeout(()=>{
        navigate("/login")
    },1000)

   
} catch (e){
  setMessage(e.message || "Error creating account.");
  
}
  
  }

  
  return (
    <>
      <h1 className="text-3xl font-semibold text-orange-400 mb-6">
        Create Account
      </h1>
      {message && (
        <p className="bg-gray-800 p-3 rounded text-center text-orange-400 mb-4">
          {message}
        </p>
      )}

      <div className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          name="userEmail"
          value={email}
          className="bg-gray-800 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-400"
          onChange={(e)=>setemail(e.target.value)}          
        />

        <input
          type="password"
          placeholder="Password"
             name="userPassword"
          value={password}
          className="bg-gray-800 p-3 rounded-lg border border-gray-700 focus:outline-none focus:border-orange-400"
          onChange={(e)=>setpassword(e.target.value)}
        />

        <button className="bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg font-medium"
        onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>

      <p className="text-gray-400 mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-orange-400">
          Login
        </Link>
      </p>
    </>
  );
};

export default SignUp;

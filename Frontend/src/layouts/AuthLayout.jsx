import { Outlet } from "react-router-dom";
import AuthHeader from "../components/app/AuthHeader";

const AuthLayout = () => {

  return (
    <>
     <div className="min-h-screen bg-[#0d0d0f] text-white flex flex-col">
         <AuthHeader/>
        <div className="min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-xl">
        <Outlet />
      </div>
    </div>
      

    </div>
  
    </>
  );
};

export default AuthLayout;
import AppHeader from "../components/app/AppHeader";
import AppFooter from "../components/app/AppFooter";
import { Outlet,Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const AppLayout = () => {
   const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <>
    
  <div className="min-h-screen bg-[#0d0d0f] text-white flex flex-col">
      <AppHeader />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
      
        <Outlet />
      </main>

      <AppFooter />
    </div>
    </>
  );
};

export default AppLayout;
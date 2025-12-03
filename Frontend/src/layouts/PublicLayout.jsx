import PublicFooter from "../components/public/PublicFooter";
import PublicHeader from "../components/public/PublicHeader";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {

  return (
    <>
       <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col">
      <PublicHeader />
       <div className="min-h-screen bg-[#0d0d0f] text-white">
      <main className="max-w-5xl mx-auto px-6 py-10">
        <Outlet />
      </main>
    </div>

      <PublicFooter />
    </div>

    </>
  );
};

export default PublicLayout;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import LoadingOverlay from "../components/LoadingOverlay";

const MainLayout = () => {
  return (
    <div className="bg-background text-on-background font-body-lg overflow-x-hidden selection:bg-tertiary selection:text-on-tertiary">
      <LoadingOverlay />
      <Navbar />
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default MainLayout;

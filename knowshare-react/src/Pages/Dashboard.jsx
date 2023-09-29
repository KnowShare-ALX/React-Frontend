import { useEffect, useState } from "react";

import { AiOutlineMenuUnfold } from "react-icons/ai";
// import Profile from "@/components/influencer/Profile";
// import Campaigns from "@/components/influencer/Campaigns";
// import ChatWidget from "@/components/ChatWidget";
// import Dashboard from "@/components/influencer/Dashboard";
// import Wallet from "@/components/influencer/Wallet";
// import Settings from "@/components/influencer/Settings";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import AuthService from "../services/authService";
import { setUserData, setUserEmail } from "../redux/auth";
import VideoLibrary from "../components/layout/shared/VideoLibrary";
import Dashboard from "../components/layout/shared/Dashboard";
import Settings from "../components/layout/shared/Settings";
import SideNav from "../components/layout/shared/SideNav";
import Profile from "../components/layout/shared/Profile";
import Feeds from "../components/layout/shared/Feeds";
import CreateTutorial from "../components/layout/shared/CreateTutorial";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const TutorDashboard = () => {
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const { sidenavOpen, userData } = useSelector((state) => {
    const { sidenavOpen, userData } = state.auth;
    return { sidenavOpen, userData };
  }, shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handles SideBar Toggle
  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const selected = () => setIsSidebarOpen(false);

  const handleLogout = async () => {
    await AuthService.logout();
    dispatch(setUserEmail(null));
    dispatch(setUserData(null));
    toast.success("Logged Out");
    navigate("/");
    // window.location.href = "/";
  };

  // Selects the Sidebar  Component to render
  let componentToRender;
  switch (selectedComponent) {
    case "Home":
      componentToRender = (
        <Dashboard onClick={(component) => setSelectedComponent(component)} />
      );
      break;
    case "Videos":
      componentToRender = <VideoLibrary title="Video Library" />;
      break;
    case "Settings":
      componentToRender = <Settings />;
      break;

    case "Profile":
      componentToRender = <Profile />;
      break;

    case "Feeds":
      componentToRender = <Feeds />;
      break;

    case "Create":
      componentToRender = <CreateTutorial />;
      break;

    case "Logout":
      handleLogout();
      break;

    default:
      componentToRender = null;
  }

  useEffect(() => {
    // Check if the URL contains "upload=successfull"
    if (location.search.includes("upload=successfull")) {
      // Set selectedComponent to "Videos" when the condition is met
      setSelectedComponent("Videos");
    }
  }, [location.search]);

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData]);

  return (
    <div className="relative overflow-x-hidden">
      <div className="flex min-h-screen lg:h-screen">
        <div className="absolute lg:relative z-30">
          {/* SideBar */}
          <SideNav
            onClick={(component) => setSelectedComponent(component)}
            isOpen={sidenavOpen}
            type="influencer"
          />
        </div>
        {/* Rendered Component */}
        <div className="w-full flex-grow items-center flex flex-col gap-4 overflow-y-auto overflow-x-hidden">
          {componentToRender}
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;

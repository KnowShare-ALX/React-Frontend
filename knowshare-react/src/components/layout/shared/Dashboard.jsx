import { IoMailUnread } from "react-icons/io5";
import { RiCrossFill, RiCommunityFill } from "react-icons/ri";
import { BiSolidBellRing } from "react-icons/bi";
import { IoSave } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import CardDashboard from "../Atoms/CardDashboard";
import VideoLibrary from "./VideoLibrary";

const Dashboard = ({ onClick }) => {
  const handleClick = (component) => {
    onClick(component);
  };

  return (
    <>
      {/* <div className="p-2 lg:px-6 w-full animate__animated animate__fadeIn">
        <ProfileCover />
      </div> */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 p-2 text-sm animate__animated animate__fadeIn">
        <CardDashboard
          label=""
          icon={<RiCrossFill className="w-5 h-5" />}
          text="Create a New Tutorial"
          onClick={() => handleClick("Create")}
        />
        <CardDashboard
          label="Notifications"
          icon={<BiSolidBellRing className="w-5 h-5" />}
          text="13 Unread"
          onClick={() => handleClick("Notifications")}
        />
        <CardDashboard
          label="My Courses/Tutorial"
          icon={<IoMailUnread className="w-5 h-5" />}
          text="28 Files"
          onClick={() => handleClick("My Courses/Tutorial")}
        />
        <CardDashboard
          label="Saved Content"
          icon={<IoSave className="w-5 h-5" />}
          text="123 Files"
          onClick={() => handleClick("Saved Content")}
        />
        <CardDashboard
          label="Community Forum"
          icon={<RiCommunityFill className="w-5 h-5" />}
          text="287 New Members"
          onClick={() => handleClick("Community Forum")}
        />
        <CardDashboard
          label="Profile"
          icon={<BsPersonCircle className="w-5 h-5" />}
          text="23 Unread"
          onClick={() => handleClick("Profile")}
        />
      </div>
      <VideoLibrary title="Recently Watched" />
      <VideoLibrary title="Completed" />
    </>
  );
};

export default Dashboard;

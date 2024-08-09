import { Link } from "react-router-dom";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="fixed top-16 left-10 right-10">
      <div className="bg-white border-b fixed top-0 left-0 right-0 border-gray-200 px-2 sm:px-4 py-3  flex justify-center text-lg font-nep  md:tracking-wide md:text-2xl">
        Settings
      </div>
      <Link to="/NotificationSettings" className="h-12 flex items-center gap-2">
        <MdOutlineNotificationsActive className="size-4" />
        <span>Notification Settings</span>
      </Link>
      <Link to="/about" className="h-12 flex items-center gap-2">
        <BsInfoCircle />
        <span>About</span>
      </Link>
      <Link to="/profile" className="h-12 flex items-center gap-2">
        <FaRegUserCircle />
        <span>User Profile</span>
      </Link>
    </div>
  );
};

export default Menu;

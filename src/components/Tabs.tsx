import {
  IoNewspaperOutline,
  IoNewspaperSharp,
  IoMenuOutline,
  IoMenu,
} from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const footerClass =
    pathname === "/" ? "hidden" : "fixed bottom-0 left-0 right-0";

  return (
    <div className={footerClass}>
      <nav>
        <div className="bg-white border-t border-gray-200 px-2 sm:px-4 py-3 flex justify-around">
          <Link to="/News">
            {pathname === "/News" ? (
              <IoNewspaperSharp className="size-6" />
            ) : (
              <IoNewspaperOutline className="size-6" />
            )}
          </Link>
          <Link to="/bookmark">
            {pathname === "/bookmark" ? (
              <FaBookmark className="size-6" />
            ) : (
              <FaRegBookmark className="size-6" />
            )}
          </Link>
          <Link to="/menu">
            {pathname === "/menu" ? (
              <IoMenu className="size-6" />
            ) : (
              <IoMenuOutline className="size-6" />
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Tabs;

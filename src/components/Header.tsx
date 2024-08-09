import { format } from "date-fns";
import { useLocation } from "react-router-dom";

const Header = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "iiii, MMMM dd, yyyy");
  const location = useLocation();
  const pathname = location.pathname;
  const headerClass =
    pathname === "/News" ? "fixed top-0 left-0 right-0" : "hidden";

  return (
    <>
      <header className={headerClass}>
        <div className="bg-white border-b border-gray-200 px-2 sm:px-4  py-2.5  flex justify-between ">
          <img
            src="/logodark.png"
            width={30}
            height={25}
            className=""
            alt="Nepshots"
          />
          <div className="text-lg  px-2 font-nep  md:tracking-wide ">
            Nepshots
          </div>
          <div className="text-sm text-gray-600 ml-auto">{formattedDate}</div>
        </div>
      </header>
    </>
  );
};

export default Header;

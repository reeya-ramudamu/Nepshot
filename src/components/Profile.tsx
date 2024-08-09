import { useUser } from "./context/UserContext";
import { googleLogout } from "@react-oauth/google";

const Profile = () => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  console.log(user);
  console.log(user?.picture);

  return (
    <div>
      {user ? (
        <>
          <div className="bg-white border-b fixed top-0 left-0 right-0 border-gray-200  px-2 sm:px-4 py-3  flex justify-center text-lg font-nep  md:tracking-wide md:text-2xl">
            Profile
          </div>
          <div className="fixed top-20 left-10 right-10 md:flex md:justify-evenly md:items-center">
            <div className="flex flex-col gap-3 ">
              <div className="flex items-center gap-3">
                <img
                  className="rounded-full  w-10 h-10"
                  src={user.picture}
                  alt={user.name}
                />
                <div>
                  {user.name}

                  <p className="text-slate-500"> {user.email}</p>
                </div>
              </div>
            </div>
            <div className="mt-2 ml-16 bg-red-600 rounded-md py-2 px-4 text-white  w-fit ">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </>
      ) : (
        <h1>No user logged in</h1>
      )}
    </div>
  );
};

export default Profile;

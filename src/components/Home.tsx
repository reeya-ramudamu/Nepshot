import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { CredentialResponse } from "@react-oauth/google";
import { useUser } from "./context/UserContext";

export interface DecodedToken {
  email: string;
  name: string;
  picture: string;
}

const Home = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleOnSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      try {
        const decoded: DecodedToken = jwtDecode(credentialResponse.credential);
        setUser(decoded);
        navigate("/News");
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } else {
      console.error("No credential found in response.");
    }
  };
  if (user) {
    navigate("/News");
  }
  return (
    <div>
      {!user && (
        <div className=" fixed top-40 md:top-24 left-10 md:left-80 right-10  md:right-80 flex justify-evenly items-center bg-slate-50 h-96 rounded-md shadow-xl">
          <GoogleLogin
            onSuccess={handleOnSuccess}
            onError={() => console.log("Login Failed")}
          />
        </div>
      )}
    </div>
  );
};

export default Home;

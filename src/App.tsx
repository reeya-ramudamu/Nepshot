import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import News from "./components/News";
import Bookmark from "./components/Bookmark";
import Menu from "./components/Menu";
import Aboutpage from "./components/About";
import Setting from "./components/Setting";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { UserProvider, useUser } from "./components/context/UserContext";
import DynamicNews from "./components/DynamicNews";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-[100px_minmax(300px,_1fr)_100px] md:grid-cols-[200px_minmax(400px,_1fr)_200px] lg:grid-cols-[350px_minmax(450px,_1fr)_350px] sm:mx-0">
          <div className="hidden sm:block sm:bg-slate-100"></div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/News"
                element={<ProtectedRoute component={News} />}
              />
              <Route
                path="/bookmark"
                element={<ProtectedRoute component={Bookmark} />}
              />
              <Route
                path="/menu"
                element={<ProtectedRoute component={Menu} />}
              />
              <Route path="/about" element={<Aboutpage />} />
              <Route
                path="/setting"
                element={<ProtectedRoute component={Setting} />}
              />
              <Route
                path="/profile"
                element={<ProtectedRoute component={Profile} />}
              />

              <Route
                path="/News/:slug/:newsId"
                element={<ProtectedRoute component={DynamicNews} />}
              />
            </Routes>
          </div>
          <div className="hidden sm:block sm:bg-slate-100"></div>
        </div>
        <Tabs />
      </Router>
    </UserProvider>
  );
}

const ProtectedRoute = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => {
  const { user } = useUser();
  return user ? <Component /> : <Navigate to="/" />;
};

export default App;

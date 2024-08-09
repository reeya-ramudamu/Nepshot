import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { Auth0Provider } from "@auth0/auth0-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BookmarkProvider } from "./components/context/BookmarkContext";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookmarkProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </BookmarkProvider>
  </React.StrictMode>
);

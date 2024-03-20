import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserProvider from "./context/UserProvider.jsx";
import "./index.css";
import "flowbite-react";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);

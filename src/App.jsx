import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequiereAuth";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

const App = () => {

  const {user} = useContext(UserContext)

  if (user === false) {
    return <p>Cargando...</p>
  }

  return (
    <>
      <Navbar />
      <h1>APP</h1>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default App;

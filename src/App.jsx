import { UserContext } from "./context/UserProvider";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

import NotFound from "./routes/NotFound";
import Register from "./routes/Register";
import Perfil from "./routes/Perfil";
import Login from "./routes/Login";
import Home from "./routes/Home";

import LayoutRequireAuth from "./components/layouts/LayoutRequiereAuth";
import LayoutRedirect from "./components/layouts/LayoutRedirect";
import LayaoutHome from "./components/layouts/LayoutHome";
import Navbar from "./components/Navbar";

const App = () => {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Navbar />
      <h1>APP</h1>
      <Routes>
        <Route path="/" element={<LayoutRequireAuth />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
        </Route>
        <Route path="/" element={<LayaoutHome />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route path="/:nanoid" element={<LayoutRedirect />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

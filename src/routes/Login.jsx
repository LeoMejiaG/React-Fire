import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456");

  const { loginUser } = useContext(UserContext);
  const navegate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("procesando form..." + email + password);
    try {
      loginUser(email, password);
      console.log("Usuario logeado");
      navegate("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa tu password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;

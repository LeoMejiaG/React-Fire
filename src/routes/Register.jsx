import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    console.log(email, password);
    try {
      await registerUser(email, password);
      console.log("Usuario creado");
      navegate("/");
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("email", {
            message: "Este correo ya esta registrado",
          });
          break;
        case "auth/invalid-email":
          setError("email", {
            message: "Formato email no valido",
          });
          break;
        default:
          console.log("Ocurrio un error en el servidor");
      }
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Ingresa tu email"
          {...register("email", {
            required: {
              value: true,
              message: "Campo obligatorio",
            },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: "Formato de email incorrecto",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Ingresa tu password"
          {...register("password", {
            minLength: {
              value: 6,
              message: "Mínimo 6 carácteres",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Confirma tu password"
          {...register("repassword", {
            validate: {
              ValidacionPassword: (v) =>
                v === getValues("password") || "No coinciden las contraseñas",
            },
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

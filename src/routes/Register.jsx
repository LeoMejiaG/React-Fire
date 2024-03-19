import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import formValidate from "../utils/formValidate";
import FormInput from "../components/FormInput";

const Register = () => {
  const navegate = useNavigate();
  const { registerUser } = useContext(UserContext);
  const { required, patternEmail, minLength, validateTrim, validatePassword } =
    formValidate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password);
      navegate("/");
    } catch (error) {
      console.log(error.code);
      setError("firebase", {
        message: erroresFirebase(error.code),
      });
    }
  };

  return (
    <>
      <h1>Register</h1>
      <FormError error={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          placeholder="Ingresa tu email"
          {...register("email", {
            required,
            pattern: patternEmail,
          })}
        >
        <FormError error={errors.email} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Ingresa tu password"
          {...register("password", {
            minLength,
            validate: validateTrim,
          })}
        >
        <FormError error={errors.password} />
        </FormInput>

        <FormInput
          type="password"
          placeholder="Confirma tu password"
          {...register("repassword", {
            validate: validatePassword(getValues),
          })}
        >
        <FormError error={errors.repassword} />
        </FormInput>

        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;

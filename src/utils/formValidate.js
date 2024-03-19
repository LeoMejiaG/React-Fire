const formValidate = () => {
  return {
    required: {
      value: true,
      message: "Campo obligatorio",
    },
    patternEmail: {
      value:
        /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: "Formato de email incorrecto",
    },
    minLength: {
      value: 6,
      message: "Mínimo 6 carácteres",
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return "no es permitido ingresar campos vacios";
        }
        return true;
      },
    },
    validatePassword(getValues) {
      return {
        ValidacionPassword: (v) =>
          v === getValues("password") || 
          "No coinciden las contraseñas",
      };
    },
  };
};

export default formValidate;

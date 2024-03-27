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
    patternURL: {
      value: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
      message: "Formato de URL incorrecto",
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
    validatePassword(value) {
      return {
        ValidacionPassword: (v) =>
          v === value || "No coinciden las contraseñas",
      };
    },
  };
};

export default formValidate;

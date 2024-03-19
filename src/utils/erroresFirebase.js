export const erroresFirebase = (code) => {
  switch (code) {
    case "auth/invalid-credential":
      return "Email o contraseña incorrecta";
    case "auth/email-already-in-use":
      return "Este correo ya esta registrado";
    case "auth/invalid-email":
      return "Formato email no valido";
    default:
      return "Ocurrio un error en el servidor";
  }
};

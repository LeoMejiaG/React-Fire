import PropTypes from "prop-types";

const FormError = ({ error }) => {
  return <>{error && <p>{error.message}</p>}</>;
};
FormError.propTypes = {
  error: PropTypes.object,
};
export default FormError;

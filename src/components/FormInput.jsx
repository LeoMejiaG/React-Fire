import { forwardRef } from "react";
import PropTypes from "prop-types";

const FormInput = forwardRef(
  ({ children, type, placeholder, onChange, onBlur, name }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </>
    );
  }
);
FormInput.propTypes = {
  FormInput: PropTypes.func,
  children: PropTypes.object,
  type: PropTypes.any.isRequired,
  placeholder: PropTypes.any.isRequired,
  onChange: PropTypes.any.isRequired,
  onBlur: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
};
FormInput.displayName = "FormInput";
export default FormInput;

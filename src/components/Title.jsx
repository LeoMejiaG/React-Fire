import PropTypes from "prop-types"
const Title = ({ text }) => {
  return <h1 className="text-center my-5 text-3xl">{text}</h1>;
};
Title.propTypes = {
  text: PropTypes.string,
}
export default Title;

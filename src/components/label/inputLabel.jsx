import PropTypes from 'prop-types';
export default function InputLabel({ children, label }) {
  return label === 'name' ? (
    <label>Name:{children}</label>
  ) : (
    <label>Number:{children}</label>
  );
}

InputLabel.propTypes = {
  label: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-5 py-2
        bg-blue-500
        text-white
        font-semibold
        rounded-lg
        hover:bg-blue-700
        active:scale-95
        transition-transform
        duration-150
      "
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;

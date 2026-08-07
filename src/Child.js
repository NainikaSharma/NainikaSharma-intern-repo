import React from 'react';
import PropTypes from 'prop-types';

function Child({ onClick }) {
  console.log('🔁 Child rendered');

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
Child.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default React.memo(Child);

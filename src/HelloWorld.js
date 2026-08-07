import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({ name }) {
  return (
    <div>
      <h1>Hello, Focus Bear!</h1>
      <p>Welcome, {name}!</p>
    </div>
  );
}
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};
export default HelloWorld;

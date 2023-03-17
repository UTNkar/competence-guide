import React from 'react';
import PropTypes from 'prop-types';

const CircleWithText = ({ text }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        margin:"auto"
      }}
    >
      {text}
    </div>
  );
};

CircleWithText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CircleWithText;

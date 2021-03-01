import React from 'react';

import './custom-button.styles.css'


const CustomButton = ({ children, status, ...otherProps }) => (
  <button disabled={status} className='custom-button1' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
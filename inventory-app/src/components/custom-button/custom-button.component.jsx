import React from 'react';

import './custom-button.styles.css'


const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button1' {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
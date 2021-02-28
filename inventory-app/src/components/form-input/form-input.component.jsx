import React from 'react';

import './form-input.styles.css'

export const forminput = ({handleChange, label, ...otherProps}) => (

    <div className="group">
        <div className='label'>{label}</div>
        {/* <div><label>{label}</label></div> */}
        <input className='forminput' onChange={handleChange} {...otherProps} />
        
    </div>

)


export default forminput;


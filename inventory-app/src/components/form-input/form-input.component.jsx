import React from 'react';

import './form-input.styles.css'

export const forminput = ({handleChange, label, errmsg, errcolor, ...otherProps}) => (

    <div className="group">
        <div className='label'>{label}</div>
        {/* <div><label>{label}</label></div> */}
        <div className="inputanderror">
        <input className='forminput' onChange={handleChange} {...otherProps} />
        <div className='message' style={{color: errcolor}} >{errmsg}</div>
        </div>
        
    </div>

)


export default forminput;


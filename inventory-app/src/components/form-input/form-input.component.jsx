import React from 'react';


export const forminput = ({handleChange, label, ...otherProps}) => (

    <div className="group">
        <label>{label}</label>
        <input className='forminput' onChange={handleChange} {...otherProps} />

    </div>

)


export default forminput;


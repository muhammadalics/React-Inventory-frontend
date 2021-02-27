import React from 'react';

import './item.styles.css'


export const Item = (props) => (
    <div>
        
        <img className="image" src={props.department}/>
        <div>{props.name}</div>
        <div>{props.size}</div>
        <div>{props.corrosionfree}</div>
        <div>{props.material}</div>
        <div>{props.weight}</div>
    </div>
)
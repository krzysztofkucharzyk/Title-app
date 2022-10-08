import React from "react";
import './Title.css';

function Title(props) {
    return (
        <div>
            {/* <h1 className="title" style={{color: props.color}}>React color</h1> */}
            <h1 className={`title ${props.color}`}>React color</h1>
        </div>
    )
} 

export default Title;

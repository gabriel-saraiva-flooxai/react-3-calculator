import React from "react";
import "./Button.css";

export default props => {
    let classes = 'button ';
    classes += props.operation ? 'operation ' : '';
    classes += props.double ? 'double ' : '';
    classes += props.triple ? 'triple ' : '';
    classes += props.special ? 'special ' : '';

    return (
        <button 
        onClick={e => props.click && props.click(props.label)}
        className={classes.trim()}>
            {props.label}
        </button>
    )
}
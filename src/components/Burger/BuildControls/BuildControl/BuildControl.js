import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Minus}>Minus</button>
        <button className={classes.Add} onClick={props.addIngredient}>Add</button>
    </div>
);

export default buildControl;
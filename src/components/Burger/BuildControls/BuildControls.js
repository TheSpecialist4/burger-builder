import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', value: 'salad' },
    { label: 'Meat', value: 'meat' },
    { label: 'Cheese', value: 'cheese' },
    { label: 'Bacon', value: 'bacon' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                console.log(ctrl.value);
                return (
                    <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    addIngredient={() => props.addIngredient(ctrl.value)} />
                );
            }
            )}
        </div>
    );
};

export default buildControls;
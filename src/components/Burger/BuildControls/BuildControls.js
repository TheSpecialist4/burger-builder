import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controls.map(ctrl => {
                console.log(ctrl.type);
                return (
                    <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        addIngredient={() => props.addIngredient(ctrl.type)}
                        removeIngredient={() => props.removeIngredient(ctrl.type)} />
                );
            }
            )}
        </div>
    );
};

export default buildControls;
import React from 'react';
import { Modal, Button } from 'react-materialize';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => {
    let ingsSummary = [];
    for (let ing in props.ingredients) {
        ingsSummary.push(
            <li>{ing}: {props.ingredients[ing]}</li>
        );
    }

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
            {/* <button className={classes.OrderButton} 
                disabled={!props.isPurchasable}>
                Order Now
            </button> */}
            <Modal
                id='summaryModal'
                header='Order Summary'
                trigger={<Button style={{ backgroundColor: '#DAD735', color: '#966909' }} 
                            disabled={!props.isPurchasable}>
                            Checkout</Button>}>
                <ui>{ingsSummary}</ui>
                <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>The total price is <strong>${props.totalPrice.toFixed(2)}</strong></p>
            </Modal>
        </div>
    );
};

export default buildControls;
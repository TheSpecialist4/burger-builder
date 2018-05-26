import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let ings = [];
    for (let ing in props.ingredients) {
        console.log("looping for " + ing + " value: " + props.ingredients[ing]);
        for (let i = props.ingredients[ing]; i > 0; i--) {
            console.log("index: " + i + " " + ing);
            ings.push(<BurgerIngredient key={ing + i} ingredientType={ing}/>);
        }
    }

    if (ings.length === 0) {
        ings.push(<p key="unique">Please add some ingredients to the burger</p>)
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient ingredientType="breadTop" />
            {ings}
            <BurgerIngredient ingredientType="breadBottom" />
        </div>
    )
};

export default burger;
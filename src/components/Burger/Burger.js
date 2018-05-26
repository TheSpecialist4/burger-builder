import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient ingredientType="breadTop" />
            <BurgerIngredient ingredientType="bacon" />
            <BurgerIngredient ingredientType="cheese" />
            <BurgerIngredient ingredientType="meat" />
            <BurgerIngredient ingredientType="breadBottom" />
        </div>
    )
};

export default burger;
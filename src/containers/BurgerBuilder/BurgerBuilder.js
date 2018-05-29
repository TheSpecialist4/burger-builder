import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import classes from './BurgerBuilder.css';

class BurgerBuilder extends Component {

    itemPrice = {
        "bacon": 2.60,
        "salad": 1,
        "cheese": 1.5,
        "meat": 3,
    }

    state = {
        ingredients: {
            "bacon": 0,
            "salad": 0,
            "cheese": 0,
            "meat": 0,
        },
        totalPrice: 4.00,
        isPurchasable: false
    }

    addIngredientHandler = (type) => {
        console.log("from addIngredient handler value is " + type);
        const newIngValue = this.state.ingredients[type] + 1;
        let newIngs = {...this.state.ingredients};
        newIngs[type] = newIngValue;

        let newPrice = this.state.totalPrice + this.itemPrice[type];

        this.setState({ ingredients: newIngs, totalPrice: newPrice });

        this.updatePurchasable(newIngs);
    }

    updatePurchasable(newIngs) {
        let canPurchase = false;
        for (let ing in newIngs) {
            if (newIngs[ing] > 0) {
                canPurchase = true;
                break;
            }
        }
        this.setState({ isPurchasable: canPurchase });
    }

    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const newIngValue = this.state.ingredients[type] - 1;
            let newIngs = {...this.state.ingredients};
            newIngs[type] = newIngValue;

            let newPrice = this.state.totalPrice - this.itemPrice[type];

            this.setState({ ingredients: newIngs, totalPrice: newPrice });

            this.updatePurchasable(newIngs);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <p className={classes.Price}>The price of the burger is <strong>${this.state.totalPrice.toFixed(2)}</strong></p>
                <BuildControls addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    isPurchasable={this.state.isPurchasable} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
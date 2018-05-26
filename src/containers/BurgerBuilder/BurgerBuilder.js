import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            "bacon": 0,
            "salad": 0,
            "cheese": 0,
            "meat": 0,
        }
    }

    addIngredientHandler = (type) => {
        console.log("from addIngredient handler value is " + type);
        const newIngValue = this.state.ingredients[type] + 1;
        let newIngs = {...this.state.ingredients};
        newIngs[type] = newIngValue;
        this.setState({ ingredients: newIngs });
    }

    render() {
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
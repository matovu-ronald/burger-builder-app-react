import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients)
        .map( ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
            })
        });
    console.log(transformIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
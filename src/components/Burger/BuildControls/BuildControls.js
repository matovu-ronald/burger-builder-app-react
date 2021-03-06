import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Pirce: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl => (
                <BuildControl
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    key={ctrl.label}
                    label={ctrl.label}
                    disabled={props.disabled[ctrl.type]}/>
            ))
        }
        <button
            onClick={props.ordered}
            disabled={!props.purchaseable}
            className={classes.OrderButton}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;
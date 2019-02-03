import React from 'react';
import burgerLogo from '../../assets/127 burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger Logo"/>
    </div>
);

export default logo;
import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    /* State can also be implemented using this way */
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //
    //     };
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 2,
            meat: 1
        }

    };

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;
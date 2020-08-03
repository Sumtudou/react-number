import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 }
    }
    render() {
        return <div>
            <button onClick={this.decrease}>-</button>
            <span>{this.state.value}</span>
            <button onClick={this.increase}>+</button>
        </div>
    }
    static getDerivedStateFromProps(props , state){
        if(props.clear === 1){
            state.value = 0;
        }
    }


    increase = () => {
        this.setState((prevState) => ({
            value : prevState.value + 1
        }));
        this.props.onIncrease();
    }

    decrease = () => {
        this.setState((prevState) => ({
            value : prevState.value - 1
        }));
        this.props.onDecrease();
    }


}
export default Counter;
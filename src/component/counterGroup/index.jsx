import React from 'react';
import Counter from '../counter';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { size: 0, totalValue: 0 ,clear : 0};
    }

    handleResize = (event) => {
        let reSizes = event.target.value;
        this.setState({
            size: reSizes ? parseInt(reSizes) : 0,
            totalValue: 0,
            clear : 1
        })
    }



    render() {
        const initArr = [...Array(this.state.size).keys()];
        return <div>
            <div>
                <label>Group Size:</label>
                <input onBlur={this.handleResize} defaultValue={0} /><br />
                <label>totalValue: {this.state.totalValue}</label>
            </div>
            {
                initArr.map(key => <Counter key={key}  clear={this.state.clear} onIncrease={this.totalIncrease} onDecrease={this.totalDecrease} />)
            }
        </div>
    }
    totalIncrease = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue + 1,
            clear : 0
        }));
    }

    totalDecrease = () => {
        this.setState((prevState) => ({
            totalValue: prevState.totalValue - 1,
            clear : 0

        }));
    }


}

export default CounterGroup;
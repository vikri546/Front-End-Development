import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = {
    //     counters: [
    //         { id: 1, value: 4 },
    //         { id: 2, value: 0 },
    //         { id: 3, value: 0 },
    //         { id: 4, value: 0 }
    //     ]
    // };

    // handleIncrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter}
    //     counters[index].value++;
    //     // console.log(this.state.counters[index]);
    //     this.setState({counters});
    //     // console.log(counter);
    // }

    // handleReset = () => {
    //     const counters = this.state.counters.map (c => {
    //         c.value = 0 ;
    //         return c;
    //     });
    //     this.setState({counters});
    // }

    // handleDelete = (counterId) => {
    //     const counters = this.state.counters.filter (c => c.id !== counterId);
    //     this.setState({counters});
    //     // console.log ('Event Handler Called', counterId);
    // };

    render() {
        console.log('Counters - Rendered');

        const {onReset, counters, onDelete, onIncrement} = this.props

        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm sm-2">Reset</button>
                { counters.map(counter => (
                <Counter 
                    key={counter.id} 
                    onDelete={onDelete}
                    onIncrement={onIncrement} 
                    counter={counter}
                    // value={counter.value} 
                    // id={counter.id} 
                    // selected={counter.selected}
                    >
                    {/* <h4>Counter #{counter.id}</h4> */}
                </Counter> ))}
            </div>
        );
    }
}

export default Counters;
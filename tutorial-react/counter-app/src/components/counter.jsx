import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState)
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax Call and Get New Data From The Server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount')
    }

    // state = {
    //     value : this.props.counter.value
    // };
    
    // styles = {
    //     fontSize: 50,
    //     fontWeight: "bold"
    // }
    // style={{fontSize:30}}

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>Masih Kosong</p>;

    //     return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>) }</ul>
    // }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.blind(this);
    //     // console.log("Constructor", this)
    // }

    // handleIncrement = () => {
    //     // console.log(product);
    //     // this.state.count++;
    //     // this.props.value = 0;
    //     this.setState({value: this.state.value + 1})
    //     // console.log("Increment Clicked", this);
    //     //     // obj.method();
    //     //     // function();
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1});
    // };

    render() {
        console.log('Counter - Rendered');

        // console.log(this.props);
        // console.log('props', this.props);
        // let classes = this.getBadgeClasses();
        return (
            <div>
                {/* <h4>{this.props.id}</h4> */}
                {this.props.children}
                {/* { this.state.tags.length === 0 && 'Bikin Baru Bro' }
                { this.renderTags() } */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>  
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        // const x = <h1>Zero</h1>;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter ;
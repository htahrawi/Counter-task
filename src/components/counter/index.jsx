import React, { Component } from 'react'
import './style.css'
class Counter extends Component {
    state = {
        count: 0,
    }
    onDecreaseHandler = ()=>{
        this.setState((prevState=> ({count: prevState.count> 0 ? prevState.count-1: 0}) ))
    }
    onIncreamentHandler = ()=>{
        this.setState((prevState=>({count: prevState.count +1})))
    }
    render() {
        const {count} = this.state;
        return (
            <div className="counter_container">
                <span className="value">{count}</span>
                <button className="decrease_btn" onClick={this.onDecreaseHandler}>-</button>
                <button className="increase_btn" onClick={this.onIncreamentHandler}>+</button>
            </div>
        )
    }
}
export default Counter;

// Another Attempt 

// import React, { Component } from 'react'
// import './style.css'
// class Counter extends Component {
//     render() {
//         const { count = 0, increaseHandler, decreaseHandler } = this.props;
//         return (
//             <div className="counter_container">
//                 <span className="value">{count}</span>
//                 <button className="decrease_btn" onClick={increaseHandler}>-</button>
//                 <button className="increase_btn" onClick={decreaseHandler}>+</button>
//             </div>
//         )
//     }
// }
// export default Counter;
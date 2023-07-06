import React, { Component } from 'react'

class Total extends Component {
    render() {
        return (
            <>
                {this.props.children}
                <h4>Total is : 00</h4>
            </>
        )
    }
}
export default Total
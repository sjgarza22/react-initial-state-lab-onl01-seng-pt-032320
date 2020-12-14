import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countDown = () => {
        let line = "";
        const newCount = this.state.secondsLeft - 1;
        if (this.state.secondsLeft > 0) {
            this.setState({secondsLeft: newCount})
            line = this.state.secondsLeft + " seconds left before I go boom!"
        } else {
            line = "Boom!"
        }
        return line;
    }

    render () {
        return(
        <p>{this.countDown()}</p>
        )
    }
}
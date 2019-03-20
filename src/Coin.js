import React, { Component } from "react";
import './Coin.css';

class Coin extends Component {
    render () {
        return (
            <div className="Coin text-center">
                <img className="Coin-img img-fluid" src={this.props.imgUrl} alt="coin-face"></img> 
            </div>
        )
    }
}

export default Coin
import React, { Component } from "react";
import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        title: "Let's flip a coin!",
        imgUrls: [
            "https://s3.amazonaws.com/ngccoin-production/us-coin-explorer/4326181-007o.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFutdSbZOKsEb5l7BvGdQavsbmOs8JWqv2zHTzsImwMZeiJRZvg"
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            coinImg: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    //get a random index of 0 or 1
    getRandomIdx(){
        return Math.round(Math.random());
    }

    handleClick(evt) {
        const randomIdx = this.getRandomIdx();
        const img = this.props.imgUrls[randomIdx];
        this.setState(st => ({ coinImg: img }));
    }

    render () {
        return (
            <div className="CoinFlip">
                <h3>{this.title}</h3>
                <Coin imgageSrc={this.state.coinImg}/>
                <button className="CoinFlip-flip" onClick={this.handleClick}>Flip Meeee</button>
            </div>
        )
    }



}

export default CoinFlip;
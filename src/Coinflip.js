import React, { Component } from "react";
import Coin from './Coin';

class CoinFlip extends Component {
    static defaultProps = {
        //[0]head [1]tail
        imgUrls: [
            "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png",
            "http://forums.previously.tv/applications/core/interface/imageproxy/imageproxy.php?img=https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL.jpg&key=8068e143105d13e26ee58ff1f1117be31f7451cca7cd8aa1a7ed392cc8b3c12a"
        ]
    }

    constructor(props) {
        super(props);
        this.state = { coinImg: "http://cerc.net/_bopwp/wp-content/uploads/2013/12/158737094.jpg" };
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
                <h3>Let's flip a coin!</h3>
                <Coin imgUrl={this.state.coinImg}/>
                <button className="CoinFlip-flip" onClick={this.handleClick}>Flip Meeee</button>
            </div>
        )
    }



}

export default CoinFlip;